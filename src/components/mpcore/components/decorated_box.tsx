import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssBorder } from "../utils/border";
import { cssColor } from "../utils/color";
import { cssBorderRadius, cssOffset } from "../utils/geometry";

export class DecoratedBox extends Component<{ data: MPComponentsProps }> {
  renderDecoration() {
    let output: any = {};
    if (this.props.data.attributes.color) {
      output["backgroundColor"] = cssColor(this.props.data.attributes.color);
    }
    if (this.props.data.attributes.decoration?.boxShadow?.[0]) {
      const shadow = this.props.data.attributes.decoration?.boxShadow?.[0];
      output["boxShadow"] = `${cssOffset(shadow.offset)?.dx}px ${
        cssOffset(shadow.offset)?.dy
      }px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${cssColor(
        shadow.color
      )}`;
    }
    if (this.props.data.attributes.decoration?.borderRadius) {
      output = {
        ...output,
        ...cssBorderRadius(this.props.data.attributes.decoration.borderRadius)
      };
    }
    if (this.props.data.attributes.decoration?.border) {
      output = {
        ...output,
        ...cssBorder(this.props.data.attributes.decoration.border)
      };
    }
    return output;
  }

  render() {
    return (
      <div
        style={{
          ...this.renderDecoration()
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
