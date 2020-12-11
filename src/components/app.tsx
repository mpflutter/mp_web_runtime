import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";

import { Body } from "./mpcore/components/body";
import { TabBar } from "./mpcore/components/tab_bar";
import {
  DivContextProvider,
  DivContextConsumer,
} from "./mpcore/components/div_context";
import { MPCore } from "./mpcore/mpcore";

export let flutterBase = "./";
export const flutterFonts = [
  { name: "MaterialIcons", url: "MaterialIcons-Regular.otf" },
];

export class App extends Component<any, any> {
  static callbackChannel: (message: string) => void = () => {};

  state: any = {};

  componentDidMount() {
    if ((window as any).mpflutterUseSocket === 1) {
      this.setupDartChannel();
    } else {
      this.setupJSChannel();
    }
  }

  setupDartChannel() {
    flutterBase = `http://${new URL(window.location.href).hostname}:9898`;
    const socket = new WebSocket(
      `ws://${new URL(window.location.href).hostname}:9898/`
    );
    socket.onmessage = (event) => {
      try {
        const messageData = JSON.parse(event.data);
        if (messageData.type === "frame_data") {
          this.setState({
            data: messageData.message,
          });
        } else if (messageData.type === "route") {
          Router.receivedRouteMessage(messageData.message);
        } else {
          MPCore.plugins.forEach((plugin) => {
            plugin.onMessage?.call(this, messageData);
          });
        }
      } catch (error) {}
    };
    socket.onopen = () => {
      this.setupFonts();
      this.setupPlugins();
    };
    socket.onclose = () => {
      setTimeout(() => {
        this.setupDartChannel();
      }, 1000);
    };
    Router.setupPopStateListener();
    App.callbackChannel = (message) => {
      socket.send(message);
    };
  }

  setupJSChannel() {
    window.addEventListener("message", (event) => {
      try {
        const messageData = JSON.parse(event.data);
        if (messageData.type === "frame_data") {
          this.setState({
            data: messageData.message,
          });
        } else if (messageData.type === "route") {
          Router.receivedRouteMessage(messageData.message);
        } else {
          MPCore.plugins.forEach((plugin) => {
            plugin.onMessage?.call(this, messageData);
          });
        }
      } catch (error) {}
    });
    this.setupFonts();
    this.setupPlugins();
    Router.setupPopStateListener();
    App.callbackChannel = (message) => {
      window.postMessage(message, "*");
    };
  }

  setupFonts() {
    if (typeof window !== "undefined") {
      flutterFonts.forEach((font) => {
        const style = document.createElement("style");
        style.innerHTML = `
        @font-face{
          font-family: '${font.name}';
          src: url('${flutterBase}/assets/fonts/${font.url}');
        }
        `;
        document.body.appendChild(style);
      });
    }
  }

  setupPlugins() {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `${flutterBase}/assets/mp_plugins.js`;
      script.addEventListener("load", () => {
        this.setState({});
      });
      document.body.appendChild(script);
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `${flutterBase}/assets/mp_plugins.css`;
      link.media = "all";
      document.head.appendChild(link);
    }
  }

  render() {
    let paddingTop = "unset";
    if (this.state.data?.tabBar && !this.state.data?.header) {
      paddingTop = TabBar.height;
    }
    return (
      <div
        id="app"
        style={{
          paddingTop,
          height: this.state.data?.isListBody === true ? "unset" : "100%",
        }}
      >
        {this.state.data?.header
          ? MPCore.render(this.state.data?.header)
          : null}
        {this.state.data?.tabBar ? (
          <TabBar
            data={this.state.data.tabBar}
            nested={this.state.data?.header}
          />
        ) : null}
        {this.state.data ? <Body data={this.state.data.body} /> : null}
      </div>
    );
  }
}

class Router {
  static setupPopStateListener() {
    if (window) {
      window.addEventListener("popstate", (e) => {
        if (this.doBacking) {
          return true;
        }
        App.callbackChannel(
          JSON.stringify({
            type: "router",
            message: {
              event: "doPop",
            },
          })
        );
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
      window.history.pushState(
        message.route,
        "",
        `/?route=${message.route.name}`
      );
    }
  }

  static doBacking = false;

  static didPop() {
    if (window) {
      this.doBacking = true;
      window.history.back();
      this.doBacking = false;
    }
  }
}

if (typeof window !== "undefined") {
  (window as any).$MPFlutter = {
    MPCore,
    DivContextProvider,
    DivContextConsumer,
    App,
  };
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
}

export default App;
