import { PureComponent } from "react";
import React from "react";
import { App } from "../../app";
import { MPComponentsProps } from "../component";

export class GestureDetector extends PureComponent<{ data: MPComponentsProps }> {
  state = { touching: false };

  render() {
    return (
      <div
        className={this.state.touching ? "gesture_detector_hover" : ""}
        onTouchStart={() => {
          this.setState({ touching: true });
        }}
        onTouchMove={() => {
          this.setState({ touching: false });
        }}
        onTouchEnd={() => {
          setTimeout(() => {
            this.setState({ touching: false });
          }, 150);
        }}
        onTouchCancel={() => {
          this.setState({ touching: false });
        }}
        onClick={
          this.props.data.attributes.onTap
            ? (e: any) => {
                App.callbackChannel(
                  JSON.stringify({
                    type: "gesture_detector",
                    message: {
                      event: "onTap",
                      target: this.props.data.attributes.onTap,
                    },
                  })
                );
                e.stopPropagation();
              }
            : undefined
        }
      >
        {this.props.children}
      </div>
    );
  }
}
