import { Component } from "react";
import { App } from "../../app";
import { MPComponentsProps } from "../component";
import { cssTextAlign, cssTextStyle } from "../utils/text";
import { MPCore } from "../mpcore";
import { DeliverContext } from "../deliver_context";

export class RichText extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
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
          WebkitLineClamp: "99999",
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
    }
    const nextContext = this.props.deliverContext.clone();
    nextContext.style = { ...nextContext.style, ...style };
    return (
      <div style={nextContext.style}>
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
        {this.props.data.attributes.text ??
          this.props.data.children?.map((it: any, idx: number) => {
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
          MPCore.render(it, new DeliverContext(), `ws_child_${idx}`)
        )}
      </div>
    );
  }
}
