import { Component } from "react";
import React from "react";
import { App } from "../../app";
import { MPComponentsProps } from "../component";
import { cssTextAlign, cssTextStyle } from "../utils/text";
import { MPCore } from "../mpcore";
import { cssConstraints } from "../utils/geometry";

export class RichText extends Component<{ data: MPComponentsProps }> {

  render() {
    let style = {};
    let constraints = cssConstraints(this.props.data.constraints);
    if (constraints.minWidth === "100%") {
      constraints.minWidth = "unset";
    }
    if (constraints.minHeight === "100%") {
      constraints.minHeight = "unset";
    }
    if (this.props.data.constraints?.measuring) {
      constraints.minWidth = "unset";
      constraints.minHeight = "unset";
    }
    if (this.props.data.attributes.maxLines) {
      style = {
        ...constraints,
        ...style,
        ...{
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: cssTextAlign(this.props.data.attributes.textAlign),
          display: "-webkit-box",
          WebkitLineClamp: this.props.data.attributes.maxLines.toString(),
          WebkitBoxOrient: "vertical",
          fontSize: "11px",
          lineHeight: this.props.data.attributes.height?.toString(),
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
        ...constraints,
        ...style,
        ...{
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: cssTextAlign(this.props.data.attributes.textAlign),
          display: "-webkit-box",
          WebkitLineClamp: "99999",
          WebkitBoxOrient: "vertical",
          fontSize: "11px",
          lineHeight: this.props.data.attributes.height?.toString(),
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
    }
    return (
      <div style={style}>
        {this.props.data.children?.map((it, idx) => {
          return jsxComponentFromSpan(it, idx);
        })}
      </div>
    );
  }
}

const jsxComponentFromSpan = (it: any, idx: number) => {
  if (it.name === "text_span") {
    return <TextSpan key={`idx_${idx}`} data={it} />;
  } else if (it.name === "widget_span") {
    return <WidgetSpan key={`idx_${idx}`} data={it} />;
  } else {
    return null;
  }
};

export class TextSpan extends Component<any> {
  render() {
    return (
      <span
        style={cssTextStyle(this.props.data.attributes.style)}
        onClick={(() => {
          if (this.props.data.attributes.onTap_el) {
            return () => {
              App.callbackChannel(
                JSON.stringify({
                  type: "rich_text",
                  message: {
                    event: "onTap",
                    target: this.props.data.attributes.onTap_el,
                    subTarget: this.props.data.attributes.onTap_span,
                  },
                })
              );
            };
          }
        })()}
      >
        {this.props.data.attributes.text}
        {this.props.data.children?.map((it: any, idx: number) => {
          return jsxComponentFromSpan(it, idx);
        })}
      </span>
    );
  }
}

export class WidgetSpan extends Component<any> {
  render() {
    return (
      <div style={{ display: "inline-flex" }}>
        {this.props.data.children.map((it: any, idx: number) =>
          MPCore.render(it, `ws_child_${idx}`)
        )}
      </div>
    );
  }
}
