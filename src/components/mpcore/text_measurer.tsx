import React from "react";
import { App } from "../app";
import { MPComponentsProps } from "./component";
import { MPCore } from "./mpcore";

export class TextMeasurer extends React.Component<
  {
    scaffold: MPComponentsProps;
    overlays: MPComponentsProps[];
  },
  { targetTexts: MPComponentsProps[] }
> {
  static scanRichText(data: MPComponentsProps, result: MPComponentsProps[]) {
    if (!data) return;
    if (data.name === "rich_text" && data.attributes.measureId) {
      result.push(data);
    } else {
      data.children?.forEach((it) => {
        this.scanRichText(it, result);
      });
    }
  }

  state: { targetTexts: MPComponentsProps[] } = { targetTexts: [] };

  componentDidMount() {
    this.doScan(this.props);
  }

  componentWillReceiveProps(newProps: any) {
    this.doScan(newProps);
  }

  componentDidUpdate() {
    if (!this.state.targetTexts.length) return;
    App.callbackChannel(
      JSON.stringify({
        type: "rich_text",
        message: {
          event: "onMeasured",
          data: this.state.targetTexts.map((it) => {
            const bounds = document
              .getElementById(`text_measurer_${it.attributes.measureId}`)
              ?.getBoundingClientRect();
            if (!bounds) {
              return {
                measureId: it.attributes.measureId,
                size: { width: 0, height: 0 },
              };
            } else {
              return {
                measureId: it.attributes.measureId,
                size: { width: bounds.width, height: bounds.height },
              };
            }
          }),
        },
      })
    );
  }

  doScan(props: {
    scaffold: MPComponentsProps;
    overlays: MPComponentsProps[];
  }) {
    let result: MPComponentsProps[] = [];
    let scanner = (scaffold: MPComponentsProps) => {
      if (scaffold.children) {
        for (let index = 0; index < scaffold.children.length; index++) {
          TextMeasurer.scanRichText(scaffold.children[index], result);
        }
      }
      TextMeasurer.scanRichText(scaffold.attributes?.body, result);
      TextMeasurer.scanRichText(scaffold.attributes?.tabBar, result);
      TextMeasurer.scanRichText(scaffold.attributes?.header, result);
      TextMeasurer.scanRichText(scaffold.attributes?.appBar, result);
      TextMeasurer.scanRichText(scaffold.attributes?.bottomBar, result);
    };
    if (props?.scaffold) {
      scanner(props.scaffold);
    }
    if (props?.overlays) {
      for (let index = 0; index < props?.overlays.length; index++) {
        const element = props?.overlays[index];
        if (element?.children?.[0]) {
          scanner(element);
        }
      }
    }
    this.setState({
      targetTexts: result,
    });
  }

  render() {
    if (!this.state.targetTexts.length) {
      return null;
    }
    return (
      <div
        style={{
          display: "contents",
        }}
      >
        {this.state.targetTexts.map((it) => {
          if (it.constraints) {
            it.constraints.measuring = true;
          }
          return (
            <div
              key={`text_measurer_${it.attributes.measureId}_${it.constraints?.maxWidth}_${it.constraints?.maxHeight}`}
              id={`text_measurer_${it.attributes.measureId}`}
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                opacity: 0,
                zIndex: -9999,
                pointerEvents: "none",
              }}
            >
              {MPCore.render(it)}
            </div>
          );
        })}
      </div>
    );
  }
}
