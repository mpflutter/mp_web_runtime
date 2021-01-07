import { Component } from "react";
import { MPComponentsProps } from "../component";

export class MPWebView extends Component<{ data: MPComponentsProps }> {
  render() {
    console.log(this.props.data);

    return (
      <iframe
        title="mp_web_vie"
        src={this.props.data.attributes.url}
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    );
  }
}
