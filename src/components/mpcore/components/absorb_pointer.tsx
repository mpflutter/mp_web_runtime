import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class AbsorbPointer extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.onClick = this.props.data.attributes.onTap
      ? (e: any) => {
          e.stopPropagation();
        }
      : undefined;
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
