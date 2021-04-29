import { PureComponent } from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints, cssPadding } from "../utils/geometry";

export class ListView extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    let constraints = cssConstraints(this.props.data.constraints);
    if (this.props.data.attributes.isRoot) {
      if (this.props.data.attributes.scrollDirection === "Axis.horizontal") {
        constraints.maxWidth = "unset";
      } else {
        constraints.maxHeight = "unset";
      }
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
          overflowX:
            this.props.data.attributes.scrollDirection === "Axis.horizontal"
              ? this.props.data.attributes.isRoot
                ? "unset"
                : "scroll"
              : "hidden",
          overflowY:
            this.props.data.attributes.scrollDirection !== "Axis.horizontal"
              ? this.props.data.attributes.isRoot
                ? "unset"
                : "scroll"
              : "hidden",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
