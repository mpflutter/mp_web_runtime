import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";
import { cssPadding } from "../utils/geometry";

export class ListView extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style = {
      ...nextContext.style,
      ...{
        display: "flex",
        flexDirection:
          this.props.data.attributes.scrollDirection === "Axis.horizontal"
            ? "row"
            : "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        minWidth:
          this.props.data.attributes.scrollDirection !== "Axis.horizontal"
            ? "100%"
            : "unset",
        minHeight:
          this.props.data.attributes.scrollDirection === "Axis.horizontal"
            ? "100%"
            : "unset",
        ...cssPadding(this.props.data.attributes.padding),
      },
    };
    return this.props.deliverContext.multiChildElement(this, nextContext);
  }
}
