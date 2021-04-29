import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssBorderRadius } from "../utils/geometry";

export class ClipRRect extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          ...cssBorderRadius(this.props.data.attributes.borderRadius),
          overflow: "hidden",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
