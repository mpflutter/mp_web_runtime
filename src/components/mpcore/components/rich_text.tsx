import { Component } from "react";
import React from "react";
import { MPComponentsProps } from "../component";
import { cssTextAlign, cssTextStyle } from "../utils/text";
import { DivContextConsumer } from "./div_context";

export class RichText extends Component<{ data: MPComponentsProps }> {
  render() {
    let style = {};
    if (this.props.data.attributes.maxLines) {
      style = {
        ...style,
        ...{
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: cssTextAlign(this.props.data.attributes.textAlign),
          display: "-webkit-box",
          WebkitLineClamp: this.props.data.attributes.maxLines.toString(),
          WebkitBoxOrient: "vertical",
          fontSize: "11px",
          overflowWrap: "anywhere",
          wordBreak: "break-all",
          wordWrap: "break-word",
          whiteSpace: "pre-line",
          inlineSize:
            this.props.data.attributes.inline === true
              ? "max-content"
              : undefined,
        },
      };
    } else {
      style = {
        ...style,
        ...{
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: cssTextAlign(this.props.data.attributes.textAlign),
          display: "-webkit-box",
          WebkitLineClamp: "1",
          WebkitBoxOrient: "vertical",
          fontSize: "11px",
          overflowWrap: "anywhere",
          wordBreak: "break-all",
          wordWrap: "break-word",
          whiteSpace: "pre-line",
          inlineSize: "max-content",
        },
      };
    }
    return (
      <DivContextConsumer style={style}>
        {this.props.data.children?.map((it, idx) => {
          return jsxComponentFromSpan(it, idx);
        })}
      </DivContextConsumer>
    );
  }
}

const jsxComponentFromSpan = (it: any, idx: number) => {
  if (it.name === "text_span") {
    return <TextSpan key={`idx_${idx}`} data={it} />;
  } else {
    return null;
  }
};

export class TextSpan extends Component<any> {
  render() {
    return (
      <span style={cssTextStyle(this.props.data.attributes.style)}>
        {this.props.data.attributes.text ??
          this.props.data.children?.map((it: any, idx: number) => {
            return jsxComponentFromSpan(it, idx);
          })}
      </span>
    );
  }
}
