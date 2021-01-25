import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class Visibility extends Component<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          visibility: this.props.data.attributes.visible ? "unset" : "hidden",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
