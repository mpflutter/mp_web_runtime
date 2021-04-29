import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class AbsorbPointer extends PureComponent<{
  data: MPComponentsProps;
}> {
  render() {
    return (
      <div
        style={{}}
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
