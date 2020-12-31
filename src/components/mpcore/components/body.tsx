import { Component } from "react";
import React from "react";
import { MPCore } from "../mpcore";

export class Body extends Component<{ data: any }> {
  render() {
    if (this.props.data.isListBody) {
      return (
        <div style={{ width: "100%", overflowX: "hidden" }}>{MPCore.render(this.props.data)}</div>
      );
    } else {
      return (
        <div style={{ width: "100%", height: "100%", overflowX: "hidden" }}>
          {MPCore.render(this.props.data)}
        </div>
      );
    }
  }
}
