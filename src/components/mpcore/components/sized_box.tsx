import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssWidth, cssHeight } from "../utils/geometry";

export class SizedBox extends Component<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          minWidth: cssWidth(this.props.data.attributes.width),
          minHeight: cssHeight(this.props.data.attributes.height),
          maxWidth: cssWidth(this.props.data.attributes.width),
          maxHeight: cssHeight(this.props.data.attributes.height)
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
