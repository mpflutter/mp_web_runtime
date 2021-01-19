import { Component } from "react";
import React from "react";

export class SliverList extends Component {
  render() {
    return <div style={{ display: "contents" }}>{this.props.children}</div>;
  }
}
