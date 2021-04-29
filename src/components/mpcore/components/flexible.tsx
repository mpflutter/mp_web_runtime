import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class Flexible extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: this.props.data.attributes.flex
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
