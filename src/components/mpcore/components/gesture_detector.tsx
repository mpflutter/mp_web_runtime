import { Component, FunctionComponentElement } from "react";
import { App } from "../../app";
import { MPComponentsProps } from "../component";
import { DeliverContext } from "../deliver_context";

export class GestureDetector extends Component<{
  data: MPComponentsProps;
  deliverContext: DeliverContext;
}> {
  render(): FunctionComponentElement<any> {
    const nextContext = this.props.deliverContext.clone();
    nextContext.onClick = this.props.data.attributes.onTap
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
      : undefined;
    return this.props.deliverContext.singleChildElement(this, nextContext);
  }
}
