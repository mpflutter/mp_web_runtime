import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { cssWidth, cssHeight } from "../utils/geometry";
import { DeliverContext } from "../deliver_context";

export class SizedBox extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.display = "flex";
    nextContext.style.minWidth = cssWidth(this.props.data.attributes.width);
    nextContext.style.minHeight = cssHeight(this.props.data.attributes.height);
    nextContext.style.maxWidth = cssWidth(this.props.data.attributes.width);
    nextContext.style.maxHeight = cssHeight(this.props.data.attributes.height);
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
