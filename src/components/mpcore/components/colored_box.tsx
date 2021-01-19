import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { cssColor } from "../utils/color";
import { DeliverContext } from "../deliver_context";

export class ColoredBox extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.backgroundColor = cssColor(
      this.props.data.attributes.color
    );
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
