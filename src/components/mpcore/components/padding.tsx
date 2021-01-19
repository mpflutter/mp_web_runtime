import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { cssMargin } from "../utils/geometry";
import { DeliverContext } from "../deliver_context";

export class Padding extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = new DeliverContext();
    nextContext.style = {
      ...nextContext.style,
      ...cssMargin(this.props.data.attributes.padding),
    };
    return this.props.deliverContext.singleChildElement(
      this,
      this.props.deliverContext,
      true,
      nextContext
    );

    // if (this.props.data.attributes.isFull) {
    //   const nextContext = new DeliverContext();
    //   nextContext.style = {
    //     ...nextContext.style,
    //     ...cssMargin(this.props.data.attributes.padding),
    //   };
    //   return this.props.deliverContext.singleChildElement(
    //     this,
    //     this.props.deliverContext,
    //     true,
    //     nextContext
    //   );
    // } else {
    //   const nextContext = new DeliverContext();
    //   nextContext.style = {
    //     ...nextContext.style,
    //     ...cssPadding(this.props.data.attributes.padding),
    //   };
    //   return this.props.deliverContext.singleChildElement(
    //     this,
    //     this.props.deliverContext,
    //     true,
    //     nextContext
    //   );
    // }
  }
}
