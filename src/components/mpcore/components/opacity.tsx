import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class Opacity extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          opacity: this.props.data.attributes.opacity,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
