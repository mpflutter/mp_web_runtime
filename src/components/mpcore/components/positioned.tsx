import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { cssWidth } from "../utils/geometry";
import { DeliverContext } from "../deliver_context";

export class Positioned extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.display = "flex";
    nextContext.style.position = "absolute";
    nextContext.style.left = cssWidth(this.props.data.attributes.left);
    nextContext.style.top = cssWidth(this.props.data.attributes.top);
    nextContext.style.right = cssWidth(this.props.data.attributes.right);
    nextContext.style.bottom = cssWidth(this.props.data.attributes.bottom);
    nextContext.style.width = cssWidth(this.props.data.attributes.width);
    nextContext.style.height = cssWidth(this.props.data.attributes.height);
    const childContext = new DeliverContext();
    childContext.style.minWidth = "100%";
    childContext.style.minHeight = "100%";
    return (
      <div style={nextContext.style}>
        {this.props.deliverContext.singleChildElement(this, childContext)}
      </div>
    );
  }
}
