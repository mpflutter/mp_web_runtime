import { Component } from "react";
import { App } from "./app";
import { MPComponentsProps } from "./mpcore/component";
import { MPCore } from "./mpcore/mpcore";

export class MPFragment extends Component<
  {
    element: HTMLDivElement;
    route: string;
    onMethodCall?: (
      method: string,
      args?: { [key: string]: any }
    ) => Promise<any>;
  },
  { data?: MPComponentsProps }
> {
  static fragments: { [key: string]: MPFragment } = {};

  static receivedFragmentMessage(message: any) {
    if (message.event === "onMethodCall") {
      const data = message.data;
      const key = data.key;
      const requestId = data.requestId;
      const method = data.method;
      const params = data.params;
      this.fragments[key]?.onMethodCall(requestId, method, params);
    }
  }

  readonly fragmentKey = "fragment_" + Math.random().toString();

  state: { data?: MPComponentsProps } = {};

  componentDidMount() {
    MPFragment.fragments[this.fragmentKey] = this;
    this.sendInitEvent();
  }

  sendInitEvent() {
    App.callbackChannel(
      JSON.stringify({
        type: "fragment",
        message: {
          event: "init",
          data: {
            key: this.fragmentKey,
            route: this.props.route,
            width: this.props.element.clientWidth,
            height: this.props.element.clientHeight,
          },
        },
      })
    );
  }

  sendDisposeEvent() {
    App.callbackChannel(
      JSON.stringify({
        type: "fragment",
        message: {
          event: "dispose",
          data: {
            key: this.fragmentKey,
          },
        },
      })
    );
  }

  async onMethodCall(
    requestId: string,
    method: string,
    args?: { [key: string]: any }
  ) {
    const result = await this.props.onMethodCall?.call(this, method, args);
    App.callbackChannel(
      JSON.stringify({
        type: "fragment",
        message: {
          event: "onMethodCallResult",
          data: {
            requestId,
            result,
          },
        },
      })
    );
  }

  componentWillUnmount() {
    delete MPFragment.fragments[this.fragmentKey];
    this.props.element.removeAttribute("mp-attached");
    this.sendDisposeEvent();
  }

  onReceiveData(data: any) {
    if (this.props.element.isConnected !== true) {
      delete MPFragment.fragments[this.fragmentKey];
      this.props.element.removeAttribute("mp-attached");
      this.sendDisposeEvent();
      return;
    }
    this.setState({ data: data });
  }

  render() {
    if (!this.state.data) return <div />;
    return MPCore.render(this.state.data);
  }
}
