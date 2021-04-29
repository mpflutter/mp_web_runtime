import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints } from "../utils/geometry";

export class ConstrainedBox extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    if (!this.props.children || !(this.props.children as any).length) {
      return (
        <div style={{ ...cssConstraints(this.props.data.constraints) }}></div>
      );
    }
    return this.props.children;
  }
}
