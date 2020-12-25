import { Component } from "react";
import React from "react";
import { App } from "../../app";
import { MPComponentsProps } from "../component";
import {
  renderSliverGridDelegateWithFixedCrossAxisCount,
  renderSliverGridDelegateWithMaxCrossAxisExtent,
  renderSliverWaterfallDelegate,
} from "./grid_waterfall_layout";

export class GridView extends Component<{ data: MPComponentsProps }> {
  _scrollListener: any;
  _scrollToBottomLastCall: any;

  componentDidMount() {
    if (window) {
      this._scrollListener = () => {
        if (
          window.pageYOffset + window.innerHeight >=
          window.document.body.scrollHeight
        ) {
          if (this._scrollToBottomLastCall > new Date().getTime()) {
            return;
          }
          this._scrollToBottomLastCall = new Date().getTime() + 5000;
          App.callbackChannel(
            JSON.stringify({
              type: "scroller",
              message: {
                event: "onScrollToBottom",
              },
            })
          );
        }
      };
      window.document.addEventListener("scroll", this._scrollListener);
    }
  }

  componentWillUnmount() {
    window.document.removeEventListener("scroll", this._scrollListener);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: "100%",
        }}
      >
        {(() => {
          if (
            this.props.data.attributes.gridDelegate?.classname ===
            "SliverGridDelegateWithFixedCrossAxisCount"
          ) {
            return renderSliverGridDelegateWithFixedCrossAxisCount(
              this.props.data.attributes.gridDelegate,
              this.props.children as any[]
            );
          } else if (
            this.props.data.attributes.gridDelegate?.classname ===
            "SliverGridDelegateWithMaxCrossAxisExtent"
          ) {
            return renderSliverGridDelegateWithMaxCrossAxisExtent(
              this.props.data.attributes.gridDelegate,
              this.props.children as any[]
            );
          } else if (
            this.props.data.attributes.gridDelegate?.classname ===
            "SliverWaterfallDelegate"
          ) {
            return renderSliverWaterfallDelegate(
              this.props.data.attributes.gridDelegate,
              this.props.children as any[]
            );
          } else {
            return [];
          }
        })()}
      </div>
    );
  }
}

export class SliverWaterfallItem extends Component<{
  data: MPComponentsProps;
}> {
  render() {
    return this.props.children;
  }
}
