import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { MPCore } from "../mpcore";
import { App } from "../../app";

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
          zIndex: 3,
          backgroundColor: cssColor(this.props.data.attributes.backgroundColor),
        }}
        onClick={(e: any) => {
          App.callbackChannel(
            JSON.stringify({
              type: "overlay",
              message: {
                event: "onBackgroundTap",
                target: this.props.data.attributes.onBackgroundTap,
              },
            })
          );
          e.stopPropagation();
        }}
      >
        {MPCore.render(this.props.data.children[0])}
      </div>
    );
  }
}
