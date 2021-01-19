import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Stack extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.display = "flex";
    nextContext.style.position = "relative";
    return this.props.deliverContext.multiChildElement(this, nextContext);
  }
}
