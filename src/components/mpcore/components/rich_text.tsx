import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssTextStyle } from "../utils/text";
import { DivContextConsumer } from "./div_context";

export class RichText extends Component<{ data: MPComponentsProps }> {
  render() {
    let style = {};
    if (this.props.data.attributes.maxLines) {
      style = {
        ...style,
        ...{
          overflow: "hidden",
          "text-overflow": "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": this.props.data.attributes.maxLines.toString(),
          "-webkit-box-orient": "vertical"
        }
      };
    }
    return (
      <DivContextConsumer style={style}>
        {this.props.data.children?.map((it) => {
          return jsxComponentFromSpan(it);
        })}
      </DivContextConsumer>
    );
  }
}

const jsxComponentFromSpan = (it: any) => {
  if (it.name === "text_span") {
    return <TextSpan data={it} />;
  } else {
    return null;
  }
};

export class TextSpan extends Component<any> {
  render() {
    return (
      <span style={cssTextStyle(this.props.data.attributes.style) as any}>
        {this.props.data.attributes.text ??
          this.props.data.children?.map((it: any) => {
            return jsxComponentFromSpan(it);
          })}
      </span>
    );
  }
}
