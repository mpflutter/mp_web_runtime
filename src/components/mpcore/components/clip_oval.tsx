import { Component } from "react";
import React from "react";

export class ClipOval extends Component {
  render() {
    return (
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
