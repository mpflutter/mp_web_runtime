import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssPadding } from "../utils/geometry";

export class Padding extends Component<{ data: MPComponentsProps }> {
  render() {
    if (this.props.data.attributes.isFull) {
      return (
        <div
          style={{
            ...cssPadding(this.props.data.attributes.padding),
            minWidth: "100%",
            minHeight: "100%",
          }}
        >
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div style={{ ...cssPadding(this.props.data.attributes.padding) }}>
          {this.props.children}
        </div>
      );
    }
  }
}
