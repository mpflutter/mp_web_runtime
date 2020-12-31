import { Component } from "react";
import { MPComponentsProps } from "../component";

export class SliverPersistentHeader extends Component<{
  data: MPComponentsProps;
}> {
  render() {
    return (
      <div
        style={{
          position: "sticky",
          top: "-1px",
          zIndex: 1,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
