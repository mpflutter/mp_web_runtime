import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssWidth } from "../utils/geometry";

export class Positioned extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          left: cssWidth(this.props.data.attributes.left),
          top: cssWidth(this.props.data.attributes.top),
          right: cssWidth(this.props.data.attributes.right),
          bottom: cssWidth(this.props.data.attributes.bottom),
          width: cssWidth(this.props.data.attributes.width),
          height: cssWidth(this.props.data.attributes.height)
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
