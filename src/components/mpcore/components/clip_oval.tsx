import { PureComponent } from "react";
import React from "react";

export class ClipOval extends PureComponent {
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
