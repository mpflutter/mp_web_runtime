import { Component } from "react";
import { MPComponentsProps } from "../component";
import { MPCore } from "../mpcore";
import { cssColor } from "../utils/color";
import { cssWidth } from "../utils/geometry";

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
          <FloatingBody data={this.props.data.attributes?.floatingBody} />
        ) : null}
      </div>
    );
  }
}

export class FloatingBody extends Component<{
  data: MPComponentsProps;
}> {
  render() {
    let positioned = this.props.data;
    if (!positioned || positioned.name !== "positioned") {
      return null;
    }
    return (
      <div
        style={{
          position: "fixed",
          left: cssWidth(positioned.attributes.left),
          top: cssWidth(positioned.attributes.top),
          right: cssWidth(positioned.attributes.right),
          bottom: cssWidth(positioned.attributes.bottom),
          width: cssWidth(positioned.attributes.width),
          height: cssWidth(positioned.attributes.height),
          backgroundColor: cssColor(this.props.data.attributes.backgroundColor),
        }}
      >
        {this.props.data.children?.map((it) => MPCore.render(it))}
      </div>
    );
  }
}
