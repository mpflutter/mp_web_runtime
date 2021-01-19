import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class CustomScrollView extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style = {
      ...nextContext.style,
      ...{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        minWidth: "100%",
      },
    };
    return this.props.deliverContext.multiChildElement(this, nextContext);
  }
}
