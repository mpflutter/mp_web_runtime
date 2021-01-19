import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Flex extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.display = "flex";
    nextContext.style.flexDirection = (() => {
      switch (this.props.data.attributes.direction) {
        case "Axis.vertical":
          return "column";
        case "Axis.horizontal":
          return "row";
        default:
          return "column";
      }
    })();
    nextContext.style.justifyContent = (() => {
      switch (this.props.data.attributes.mainAxisAlignment) {
        case "MainAxisAlignment.start":
          return "flex-start";
        case "MainAxisAlignment.center":
          return "center";
        case "MainAxisAlignment.end":
          return "flex-end";
        case "MainAxisAlignment.spaceBetween":
          return "space-between";
        case "MainAxisAlignment.spaceAround":
          return "space-around";
        case "MainAxisAlignment.spaceEvenly":
          return "space-evenly";
        default:
          return "flex-start";
      }
    })();
    nextContext.style.alignItems = (() => {
      switch (this.props.data.attributes.crossAxisAlignment) {
        case "CrossAxisAlignment.start":
          return "flex-start";
        case "CrossAxisAlignment.center":
          return "center";
        case "CrossAxisAlignment.end":
          return "flex-end";
        case "CrossAxisAlignment.stretch":
          return "stretch";
        default:
          return "flex-start";
      }
    })();
    return this.props.deliverContext.multiChildElement(this, nextContext);
  }
}
