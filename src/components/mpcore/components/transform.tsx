import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Transform extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.transform = this.props.data.attributes.transform;
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
