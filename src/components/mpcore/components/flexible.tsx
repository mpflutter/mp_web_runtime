import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Flexible extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.display = "flex";
    nextContext.style.flex = this.props.data.attributes.flex;
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
