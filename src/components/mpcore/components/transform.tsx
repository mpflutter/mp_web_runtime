import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class Transform extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          transform: this.props.data.attributes.transform,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
