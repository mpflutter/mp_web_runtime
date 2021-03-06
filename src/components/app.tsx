import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";

import { MPCore } from "./mpcore/mpcore";
import { WebDialogs } from "./mpcore/components/web_dialogs";
import { Overlay } from "./mpcore/components/overlay";
import { ScrollListener } from "./mpcore/scroll_listener";
import { ScrollBehavior } from "./mpcore/scroll_behavior";
import { TextMeasurer } from "./mpcore/text_measurer";
import { MPComponentsProps, MPDocumentProps } from "./mpcore/component";
import { MPJS } from "./mpcore/mpjs/mpjs";
import { MPDrawable } from "./mpcore/components/custom_paint";
import { MPFragment } from "./fragment";
import { MethodChannelHandler } from "./mpcore/mpjs/method_channel_handler";

export let flutterBase = "./";
export const flutterFonts = [
  { name: "MaterialIcons", url: "MaterialIcons-Regular.otf" },
];

export class App extends Component<
  any,
  { isConnecting: boolean; isDialogDisplaying: boolean; data: MPDocumentProps }
> {
  static callbackChannel: (message: string) => void = () => {};

  static initFragment(options: {
    element: HTMLDivElement;
    route: string;
    onMethodCall?: (method: string, args?: { [key: string]: any }) => Promise<any>;
  }) {
    if (options.element.attributes.getNamedItem("mp-attached")?.value === "1") {
      return;
    }
    options.element.setAttribute("mp-attached", "1");
    ReactDOM.render(
      <React.StrictMode>
        <MPFragment
          route={options.route}
          element={options.element}
          onMethodCall={options.onMethodCall}
        />
      </React.StrictMode>,
      options.element
    );
  }

  private static resendFragmentsInitEvents() {
    for (const key in MPFragment.fragments) {
      if (Object.prototype.hasOwnProperty.call(MPFragment.fragments, key)) {
        const element = MPFragment.fragments[key];
        element.sendInitEvent();
      }
    }
  }

  state: any = {};

  lastFrameDataHashMap: { [key: number]: MPComponentsProps } = {};

  createHashMap(obj: any) {
    if (obj && obj.hashCode && typeof obj.hashCode === "number") {
      this.lastFrameDataHashMap[obj.hashCode] = obj;
    }
    if (obj) {
      for (const key in obj) {
        if (typeof key === "string" || typeof key === "number") {
          const value = obj[key];
          if (typeof value === "object") {
            this.createHashMap(value);
          }
        }
      }
    }
  }

  composeSameMap(data: any) {
    if (typeof data !== "object" || data === null || data === undefined) {
      return;
    }
    for (const key in data) {
      let element = data[key];
      if (
        typeof element !== "object" ||
        element === null ||
        element === undefined
      ) {
        continue;
      }
      if (element.hashCode && element["^"] === 1) {
        Object.assign(element, {
          ...this.lastFrameDataHashMap[element.hashCode],
        });
      } else {
        this.composeSameMap(element);
      }
    }
  }

  composeHashMap(data: MPDocumentProps) {
    if (data.diffs) {
      data.diffs.forEach((diff) => {
        this.composeSameMap(diff);
        if (this.lastFrameDataHashMap[diff.hashCode]) {
          Object.assign(this.lastFrameDataHashMap[diff.hashCode], {
            ...diff,
          });
        }
      });
    }
  }

  componentDidMount() {
    if ((window as any).mpflutterUseSocket === 1) {
      this.setupDartChannel();
    } else {
      this.setupJSChannel();
    }
    MethodChannelHandler.installHandler();
  }

  setupDartChannel() {
    this.setState({ isConnecting: true });
    let socket: WebSocket;
    if (new URL(window.location.href).host.endsWith(".gitpod.io")) {
      flutterBase = `https://${new URL(window.location.href).hostname}/`;
      socket = new WebSocket(
        `wss://${new URL(window.location.href).hostname}/ws?clientType=web`
      );
    } else {
      flutterBase = `http://${new URL(window.location.href).hostname}:9898/`;
      socket = new WebSocket(
        `ws://${new URL(window.location.href).hostname}:9898/ws?clientType=web`
      );
    }
    socket.onmessage = (event) => {
      this.onChannelMessage(event.data);
    };
    socket.onopen = () => {
      this.setState({ isConnecting: false });
      this.setupFonts();
      this.setupPlugins();
      App.resendFragmentsInitEvents();
    };
    socket.onclose = () => {
      this.setState({ isConnecting: true });
      setTimeout(() => {
        this.setupDartChannel();
      }, 1000);
    };
    Router.setupPopStateListener();
    App.callbackChannel = (message) => {
      try {
        socket.send(message);
      } catch (error) {}
    };
  }

  setupJSChannel() {
    window.addEventListener("message", (event) => {
      this.onChannelMessage(event.data);
    });
    this.setupFonts();
    this.setupPlugins();
    Router.setupPopStateListener();
    App.callbackChannel = (message) => {
      window.postMessage(message, "*");
    };
    (window as any).mpClientAttached = true;
  }

  onChannelMessage(message: any) {
    try {
      const messageData = JSON.parse(message);
      if (messageData.type === "frame_data") {
        this.composeSameMap(messageData.message);
        this.setState(
          {
            data: messageData.message,
          },
          () => {
            this.dispatchFragmentData();
          }
        );
        this.createHashMap(messageData.message);
      } else if (messageData.type === "diff_data") {
        let newFrameData = this.state.data;
        this.composeHashMap(messageData.message);
        this.setState(
          {
            data: newFrameData,
          },
          () => {
            this.dispatchFragmentData();
          }
        );
        this.createHashMap(newFrameData);
      } else if (messageData.type === "element_gc") {
        (messageData.message as number[]).forEach((it) => {
          delete this.lastFrameDataHashMap[it];
        });
      } else if (messageData.type === "decode_drawable") {
        MPDrawable.decodeDrawable(messageData.message);
      } else if (messageData.type === "route") {
        Router.receivedRouteMessage(messageData.message);
      } else if (messageData.type === "mpjs") {
        MPJS.instance.handleMessage(
          messageData.message,
          (result) => {
            App.callbackChannel(
              JSON.stringify({
                type: "mpjs",
                message: {
                  requestId: messageData.message.requestId,
                  result: result,
                },
              })
            );
          },
          (funcId: string, args: any[]) => {
            App.callbackChannel(
              JSON.stringify({
                type: "mpjs",
                message: {
                  funcId: funcId,
                  arguments: args,
                },
              })
            );
          }
        );
      } else if (messageData.type === "action:web_dialogs") {
        WebDialogs.receivedWebDialogsMessage(messageData.message);
      } else if (messageData.type === "fragment") {
        MPFragment.receivedFragmentMessage(messageData.message);
      } else {
        MPCore.plugins.forEach((plugin) => {
          plugin.onMessage?.call(this, messageData);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  dispatchFragmentData() {
    if (this.state.data?.scaffold?.attributes?.isFragmentMode === true) {
      const body = this.state.data?.scaffold?.attributes?.body;
      const children = body?.children?.[0]?.children?.[0]?.children;
      if (children && children instanceof Array) {
        children.forEach((it) => {
          if (it.name === "mp_fragment_widget") {
            const fragmentKey = it.attributes.key;
            const data = it.children[0].children[0];
            MPFragment.fragments[fragmentKey]?.onReceiveData(data);
          }
        });
      }
    }
  }

  setupFonts() {
    if (typeof window !== "undefined") {
      flutterFonts.forEach((font) => {
        const style = document.createElement("style");
        style.innerHTML = `
        @font-face{
          font-family: '${font.name}';
          src: url('${flutterBase}assets/fonts/${font.url}');
        }
        `;
        document.body.appendChild(style);
      });
    }
  }

  setupPlugins() {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `${flutterBase}assets/mp_plugins.js?v=${Math.random()}`;
      script.addEventListener("load", () => {
        this.setState({});
      });
      document.body.appendChild(script);
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `${flutterBase}assets/mp_plugins.css?v=${Math.random()}`;
      link.media = "all";
      document.head.appendChild(link);
    }
  }

  render() {
    if (this.state.data?.scaffold?.attributes?.isFragmentMode === true) {
      return <div></div>;
    }
    return (
      <div style={{ display: "contents" }}>
        {this.state.data?.mainTabBar ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {MPCore.render(this.state.data?.scaffold)}
            <div
              style={{
                position: "sticky",
                bottom: "0px",
                zIndex: 1,
                opacity: 0.0,
              }}
            >
              {MPCore.render(this.state.data?.mainTabBar)}
            </div>
            <div style={{ position: "fixed", bottom: "0px", zIndex: 1 }}>
              {MPCore.render(this.state.data?.mainTabBar)}
            </div>
          </div>
        ) : (
          MPCore.render(this.state.data?.scaffold)
        )}
        {this.state.data?.overlays?.length > 0
          ? this.state.data.overlays.map((it: any, index: number) => (
              <Overlay key={`overlay_${index}`} data={it} />
            ))
          : null}
        <ScrollListener />
        <ScrollBehavior
          displayingDialog={this.state.isDialogDisplaying}
          scaffold={this.state.data?.scaffold}
        />
        <TextMeasurer
          scaffold={this.state.data?.scaffold}
          overlays={this.state.data?.overlays}
        />
        {this.state.isConnecting ? this.renderConnectingTips() : null}
      </div>
    );
  }

  renderConnectingTips() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          top: "0",
          backgroundColor: "red",
          color: "white",
          fontSize: 12,
          fontWeight: "bold",
          height: "20px",
          textAlign: "center",
          lineHeight: "20px",
          zIndex: 9999,
        }}
      >
        Connecting to {new URL(window.location.href).hostname} ...
      </div>
    );
  }

  attachDialog(element: any, touchable: boolean = true) {
    this.setState({ isDialogDisplaying: true });
    if (touchable) {
      ReactDOM.render(
        <div style={{ pointerEvents: "auto" }}>{element}</div>,
        document.getElementById("mp_dialog")
      );
    } else {
      ReactDOM.render(element, document.getElementById("mp_dialog"));
    }
  }

  detachDialog() {
    this.setState({ isDialogDisplaying: false });
    ReactDOM.unmountComponentAtNode(document.getElementById("mp_dialog")!);
  }
}

class Router {
  private static lastState: any;

  static setupPopStateListener() {
    if (window) {
      window.addEventListener("popstate", (e) => {
        if (this.doBacking) {
          return true;
        }
        if (this.lastState?.randomId !== e.state?.randomId) {
          App.callbackChannel(
            JSON.stringify({
              type: "router",
              message: {
                event: "doPop",
              },
            })
          );
        }
      });
    }
  }

  static receivedRouteMessage(message: any) {
    if (message.event === "didPush") {
      this.didPush(message);
    } else if (message.event === "didPop") {
      this.didPop();
    }
  }

  static didPush(message: any) {
    if (window) {
      let routeUrl: string = message.route.name;
      if (routeUrl.indexOf("?") > 0) {
        let path = routeUrl.split("?")[0];
        let others = routeUrl
          .split("?")
          .filter((it, idx) => idx > 0)
          .join("?");
        routeUrl = `${path}${encodeURIComponent(`?${others}`)}`;
      }
      message.route.randomId = Math.random().toString();
      window.history.pushState(message.route, "", `?route=${routeUrl}`);
      this.lastState = message.route;
    }
  }

  static doBacking = false;

  static didPop() {
    if (window) {
      this.doBacking = true;
      window.history.back();
      setTimeout(() => {
        this.doBacking = false;
      }, 300);
    }
  }
}

if (typeof window !== "undefined") {
  (window as any).$MPFlutter = {
    MPCore,
    App,
  };
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
}

export default App;
