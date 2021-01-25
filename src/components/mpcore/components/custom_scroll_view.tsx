import { Component } from "react";
import React from "react";
import { cssConstraints } from "../utils/geometry";
import { MPComponentsProps } from "../component";

export class CustomScrollView extends Component<{ data: MPComponentsProps }> {
  render() {
    let constraints = cssConstraints(this.props.data.constraints);
    if (this.props.data.attributes.isRoot) {
      constraints.maxHeight = "unset";
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          overflowX: "hidden",
          ...constraints,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
