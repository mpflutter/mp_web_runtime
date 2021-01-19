import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Visibility extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = new DeliverContext();
    nextContext.style.visibility = this.props.data.attributes.visible
      ? "unset"
      : "hidden";
    return this.props.deliverContext.singleChildElement(
      this,
      this.props.deliverContext,
      true,
      nextContext
    );
  }
}
