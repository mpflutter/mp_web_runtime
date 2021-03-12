import { Component } from "react";
import React from "react";
import { flutterBase } from "../../app";
import { MPComponentsProps } from "../component";
import { cssConstraints, cssHeight, cssWidth } from "../utils/geometry";

export class Image extends Component<{ data: MPComponentsProps }> {
  render() {
    let imgConstraints: any = cssConstraints(this.props.data.constraints);
    imgConstraints.minWidth = imgConstraints.maxWidth;
    imgConstraints.minHeight = imgConstraints.maxHeight;
    if (this.props.data.attributes.width) {
      imgConstraints.minWidth = cssWidth(this.props.data.attributes.width);
      imgConstraints.maxWidth = cssWidth(this.props.data.attributes.width);
    }
    if (this.props.data.attributes.height) {
      imgConstraints.minHeight = cssHeight(this.props.data.attributes.height);
      imgConstraints.maxHeight = cssHeight(this.props.data.attributes.height);
    }
    return (
      <img
        alt=""
        style={{
          ...imgConstraints,
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
        }}
        src={(() => {
          if (this.props.data.attributes.src) {
            return this.props.data.attributes.src;
          } else if (this.props.data.attributes.assetName) {
            if (this.props.data.attributes.assetPkg) {
              return `${flutterBase}assets/packages/${this.props.data.attributes.assetPkg}/${this.props.data.attributes.assetName}`;
            } else {
              return `${flutterBase}assets/${this.props.data.attributes.assetName}`;
            }
          }
        })()}
      ></img>
    );
  }
}
