import { Component } from "react";
import { MPComponentsProps } from "../component";
import { MPCore } from "../mpcore";
import { cssColor } from "../utils/color";

export class MPScaffold extends Component<{ data: MPComponentsProps }> {
  componentDidMount() {
    this.setupDocumentTitle();
  }

  componentDidUpdate() {
    this.setupDocumentTitle();
  }

  setupDocumentTitle() {
    if (this.props.data.attributes?.name) {
      document.title = this.props.data.attributes.name;
    } else {
      document.title = "";
    }
  }

  render() {
    const appBarHeight = this.props.data.attributes.appBarHeight;
    return (
      <div
        id="mp_scaffold"
        style={{
          marginTop: appBarHeight + "px",
          height:
            this.props.data.attributes.isListBody === true
              ? "unset"
              : `calc(100% - ${appBarHeight}px)`,
          backgroundColor: this.props.data.attributes.backgroundColor
            ? cssColor(this.props.data.attributes.backgroundColor)
            : "unset",
          overflow:
            this.props.data.attributes.isListBody === true ? "unset" : "hidden",
        }}
      >
        {this.props.data.attributes.appBar ? (
          <div
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              right: "0px",
              zIndex: 2,
            }}
          >
            {MPCore.render(this.props.data.attributes.appBar)}
          </div>
        ) : null}
        {this.props.data.attributes.header
          ? MPCore.render(this.props.data.attributes.header)
          : null}
        {this.props.data.attributes.tabBar ? (
          <div
            style={{
              position:
                this.props.data.attributes.isListBody === true
                  ? "sticky"
                  : "unset",
              top: -1 + appBarHeight + "px",
              zIndex: 1,
            }}
          >
            {MPCore.render(this.props.data.attributes.tabBar)}
          </div>
        ) : null}
        {MPCore.render(this.props.data.attributes.body)}
        {this.props.data.attributes?.bottomBar ? (
          <div
            style={{
              position: "sticky",
              bottom: "-1px",
              zIndex: 2,
            }}
          >
            {MPCore.render(this.props.data.attributes.bottomBar)}
          </div>
        ) : null}
        {this.props.data.attributes?.floatingBody ? (
          <div
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
            }}
          >
            {MPCore.render(this.props.data.attributes.floatingBody)}
          </div>
        ) : null}
      </div>
    );
  }
}
