import React from "react";
import { App } from "../app";

export class ScrollListener extends React.Component {
  _scrollListener: any;
  _scrollToBottomLastCall: any;

  componentDidMount() {
    if (window) {
      this._scrollListener = () => {
        if (
          window.pageYOffset + window.innerHeight >=
          window.document.body.scrollHeight - 200
        ) {
          if (this._scrollToBottomLastCall > new Date().getTime()) {
            return;
          }
          this._scrollToBottomLastCall = new Date().getTime() + 2000;
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
    return null;
  }
}
