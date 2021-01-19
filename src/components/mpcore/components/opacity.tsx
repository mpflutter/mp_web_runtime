import { Component } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";
import { FunctionComponentElement } from "react";

export class Opacity extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.opacity = this.props.data.attributes.opacity;
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
