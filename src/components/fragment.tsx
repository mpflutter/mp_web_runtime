import { Component } from "react";
import { App } from "./app";
import { MPComponentsProps } from "./mpcore/component";
import { MPCore } from "./mpcore/mpcore";

export class MPFragment extends Component<
  {
    el: HTMLDivElement;
    route: string;
  },
  { data?: MPComponentsProps }
> {
  static fragments: { [key: string]: MPFragment } = {};

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
            width: this.props.el.clientWidth,
            height: this.props.el.clientHeight,
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

  componentWillUnmount() {
    delete MPFragment.fragments[this.fragmentKey];
    this.sendDisposeEvent();
  }

  onReceiveData(data: any) {
    if (this.props.el.isConnected !== true) {
      delete MPFragment.fragments[this.fragmentKey];
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
