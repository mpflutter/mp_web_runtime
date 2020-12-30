import { Component } from "react";
import React from "react";

export class CustomScrollView extends Component {

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          minWidth: "100%",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
