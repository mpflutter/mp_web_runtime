import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints } from "../utils/geometry";

export class Stack extends Component<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          position: "relative",
          ...cssConstraints(this.props.data.constraints),
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
