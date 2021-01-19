import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { cssBorderRadius } from "../utils/geometry";
import { DeliverContext } from "../deliver_context";

export class ClipRRect extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.borderRadius = "50%";
    nextContext.style.overflow = "hidden";
    nextContext.style = {
      ...nextContext.style,
      ...cssBorderRadius(this.props.data.attributes.borderRadius),
      overflow: "hidden",
    };
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
