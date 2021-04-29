import { PureComponent } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { cssConstraints, cssWidth } from "../utils/geometry";

export class Icon extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          ...cssConstraints(this.props.data.constraints),
          fontFamily: this.props.data.attributes.icon?.fontFamily,
          color:
            this.props.data.attributes.color &&
            cssColor(this.props.data.attributes.color),
          fontSize: cssWidth(this.props.data.attributes.size),
        }}
      >
        {this.props.data.attributes.icon?.codePoint
          ? String.fromCharCode(this.props.data.attributes.icon?.codePoint)
          : ""}
      </div>
    );
  }
}
