import { Component, FunctionComponentElement } from "react";
import { DeliverContext } from "../deliver_context";
import { MPComponentsProps } from "../component";

export class ClipOval extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.borderRadius = "50%";
    nextContext.style.overflow = "hidden";
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
