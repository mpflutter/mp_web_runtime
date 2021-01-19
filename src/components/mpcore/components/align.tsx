import { Component, FunctionComponentElement } from "react";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class Align extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  alignStyles() {
    let alignments = this.props.data.attributes.alignment;
    let marginLeft = "unset";
    let marginRight = "unset";
    let marginTop = "unset";
    let marginBottom = "unset";
    if (
      alignments === "bottomLeft" ||
      alignments === "centerLeft" ||
      alignments === "topLeft"
    ) {
      marginRight = "auto";
    } else if (
      alignments === "bottomCenter" ||
      alignments === "center" ||
      alignments === "topCenter"
    ) {
      marginLeft = "auto";
      marginRight = "auto";
    } else if (
      alignments === "bottomRight" ||
      alignments === "centerRight" ||
      alignments === "topRight"
    ) {
      marginLeft = "auto";
    }
    if (
      alignments === "topCenter" ||
      alignments === "topLeft" ||
      alignments === "topRight"
    ) {
      marginBottom = "auto";
    } else if (
      alignments === "centerLeft" ||
      alignments === "center" ||
      alignments === "centerRight"
    ) {
      marginTop = "auto";
      marginBottom = "auto";
    } else if (
      alignments === "bottomCenter" ||
      alignments === "bottomLeft" ||
      alignments === "bottomRight"
    ) {
      marginTop = "auto";
    }

    return {
      display: "flex",
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    };
  }

  render(): FunctionComponentElement<any> {
    const nextContext = new DeliverContext();
    nextContext.style = { ...nextContext.style, ...this.alignStyles() };
    return this.props.deliverContext.singleChildElement(
      this,
      this.props.deliverContext,
      true,
      nextContext
    );
  }
}
