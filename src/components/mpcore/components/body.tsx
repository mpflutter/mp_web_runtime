import { Component } from "react";
import React from "react";
import { MPCore } from "../mpcore";
import { DeliverContext } from "../deliver_context";

export class Body extends Component<{
  isListBody: boolean;
  data: any;
  deliverContext: DeliverContext;
}> {
  render() {
    if (this.props.data.name === "constrained_box") {
      return MPCore.render(this.props.data.children[0], this.props.deliverContext);
    }
    if (this.props.isListBody) {
      return (
        <div style={{ width: "100%", maxWidth: "100%" }}>
          {MPCore.render(this.props.data, this.props.deliverContext)}
        </div>
      );
    } else {
      return (
        <div style={{ width: "100%", height: "100%", maxWidth: "100%" }}>
          {MPCore.render(this.props.data, this.props.deliverContext)}
        </div>
      );
    }
  }
}
