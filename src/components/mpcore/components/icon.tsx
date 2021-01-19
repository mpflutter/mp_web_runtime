import { Component } from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { cssWidth } from "../utils/geometry";
import { DeliverContext } from "../deliver_context";

export class Icon extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render() {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style = {
      ...nextContext.style,
      ...{
        fontFamily: this.props.data.attributes.icon?.fontFamily,
        color:
          this.props.data.attributes.color &&
          cssColor(this.props.data.attributes.color),
        fontSize: cssWidth(this.props.data.attributes.size),
      },
    };
    return (
      <div style={nextContext.style}>
        {this.props.data.attributes.icon?.codePoint
          ? String.fromCharCode(this.props.data.attributes.icon?.codePoint)
          : ""}
      </div>
    );
  }
}
