import { PureComponent } from "react";
import { MPComponentsProps } from "../component";
import { cssConstraints } from "../utils/geometry";

export class MPVideoView extends PureComponent<{ data: MPComponentsProps }> {
  render() {
    return (
      <video
        src={this.props.data.attributes.url}
        controls={this.props.data.attributes.controls}
        autoPlay={this.props.data.attributes.autoplay}
        loop={this.props.data.attributes.loop}
        muted={this.props.data.attributes.muted}
        poster={this.props.data.attributes.poster}
        style={{
          ...cssConstraints(this.props.data.constraints),
        }}
      ></video>
    );
  }
}
