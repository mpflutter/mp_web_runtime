import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";

export class AbsorbPointer extends Component<{
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
