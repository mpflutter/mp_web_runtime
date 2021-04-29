import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class IgnorePointer extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          pointerEvents: this.props.data.attributes.ignoring
            ? "none"
            : undefined,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
