import { Component } from "react";
// import React from "react";
import { MPComponentsProps } from "../component";

export class ConstrainedBox extends Component<{ data: MPComponentsProps }> {
  render() {
    return this.props.children;
  }
}
