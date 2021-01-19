import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class IgnorePointer extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    if (this.props.data.attributes.ignoring) {
      nextContext.style.pointerEvents = "none";
    }
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
