import { PureComponent } from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { cssConstraints } from "../utils/geometry";

export class MPIcon extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <div
        style={{
          position: "relative",
          ...cssConstraints(this.props.data.constraints),
        }}
      >
        {this.props.children}
        <div
          style={{
            position: "absolute",
            backgroundColor: cssColor(this.props.data.attributes.color),
            mask: `url(${this.props.data.attributes.iconUrl}) no-repeat center`,
            WebkitMask: `url(${this.props.data.attributes.iconUrl}) no-repeat center`,
            width: "24px",
            height: "24px",
            transform: `scale(${this.props.data.attributes.size / 24}, ${
              this.props.data.attributes.size / 24
            })`,
            transformOrigin: "top left",
          }}
        ></div>
      </div>
    );
  }
}
