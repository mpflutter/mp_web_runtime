import { Component } from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints } from "../utils/geometry";

export class MPWebView extends Component<{ data: MPComponentsProps }> {
  render() {
    return (
      <iframe
        title="mp_web_view"
        src={this.props.data.attributes.url}
        style={{
          border: "none",
          ...cssConstraints(this.props.data.constraints),
        }}
      ></iframe>
    );
  }
}
