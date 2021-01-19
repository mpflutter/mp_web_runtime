import React from "react";
import { Component, FunctionComponentElement } from "react";
import { flutterBase } from "../../app";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";
import { cssHeight, cssWidth } from "../utils/geometry";

export class Image extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.style.position = "relative";
    if (this.props.data.attributes.width) {
      nextContext.style.minWidth = cssWidth(this.props.data.attributes.width);
    } else if (!nextContext.style.minWidth) {
      nextContext.style.minWidth = "100%";
    }
    if (this.props.data.attributes.height) {
      nextContext.style.minHeight = cssHeight(
        this.props.data.attributes.height
      );
    } else if (!nextContext.style.minHeight) {
      nextContext.style.minHeight = "100%";
    }
    return this.props.deliverContext.singleChildElement(
      React.createElement("img", {
        src: (() => {
          if (this.props.data.attributes.src) {
            return this.props.data.attributes.src;
          } else if (this.props.data.attributes.assetName) {
            if (this.props.data.attributes.assetPkg) {
              return `${flutterBase}/assets/packages/${this.props.data.attributes.assetPkg}/${this.props.data.attributes.assetName}`;
            } else {
              return `${flutterBase}/assets/${this.props.data.attributes.assetName}`;
            }
          }
        })(),
        style: {
          width: "100%",
          height: "100%",
          position: "absolute",
          objectFit: (() => {
            if (!this.props.data.attributes.fit) return "cover";
            switch (this.props.data.attributes.fit) {
              case "BoxFit.fill":
                return "fill";
              case "BoxFit.contain":
                return "contain";
              case "BoxFit.cover":
                return "cover";
              case "BoxFit.fitWidth":
                return "scale-down";
              case "BoxFit.fitHeight":
                return "scale-down";
              case "BoxFit.none":
                return "none";
              default:
                return "contain";
            }
          })(),
        },
      }) as any,
      nextContext,
      true,
      nextContext
    );
  }
}
