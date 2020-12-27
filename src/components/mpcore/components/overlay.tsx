import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { MPCore } from "../mpcore";

export class Overlay extends Component<{
  data: MPComponentsProps;
}> {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          backgroundColor: cssColor(this.props.data.attributes.backgroundColor),
        }}
      >
        {MPCore.render(this.props.data.children[0])}
      </div>
    );
  }
}
