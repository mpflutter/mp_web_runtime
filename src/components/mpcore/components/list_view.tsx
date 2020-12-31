import { Component } from "react";
import { MPComponentsProps } from "../component";
import { cssPadding } from "../utils/geometry";

export class ListView extends Component<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection:
            this.props.data.attributes.scrollDirection === "Axis.horizontal"
              ? "row"
              : "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          minWidth: this.props.data.attributes.scrollDirection !== "Axis.horizontal" ? "100%" : "unset",
          minHeight: this.props.data.attributes.scrollDirection === "Axis.horizontal" ? "100%" : "unset",
          ...cssPadding(this.props.data.attributes.padding),
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
