import { Component } from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints, cssPadding } from "../utils/geometry";

export class ListView extends Component<{ data: MPComponentsProps }> {
  render() {
    let constraints = cssConstraints(this.props.data.constraints);
    if (this.props.data.attributes.scrollDirection === "Axis.horizontal") {
      constraints.maxWidth = "unset";
    } else {
      constraints.maxHeight = "unset";
    }
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
          ...cssPadding(this.props.data.attributes.padding),
          ...constraints,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
