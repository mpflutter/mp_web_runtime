import { Component } from "react";
import { MPComponentsProps } from "../component";
import { MPCore } from "../mpcore";
import { cssColor } from "../utils/color";
import { cssWidth } from "../utils/geometry";

export class MPScaffold extends Component<{ data: MPComponentsProps }> {
  componentDidMount() {
    this.setupDocumentTitle();
    this.setupDocumentMetaData();
  }

  componentDidUpdate() {
    this.setupDocumentTitle();
    this.setupDocumentMetaData();
  }

  setupDocumentTitle() {
    if (this.props.data.attributes?.name) {
      document.title = this.props.data.attributes.name;
    } else {
      document.title = "";
    }
  }

  setupDocumentMetaData() {
    let metaElements: { [key: string]: HTMLMetaElement } = {};
    for (let index = 0; index < document.head.children.length; index++) {
      const element = document.head.children[index];
      if (element.tagName === "META") {
        const name = element.attributes.getNamedItem("name")?.value;
        if (!name || name === "viewport" || name === "theme-color") {
          continue;
        }
        metaElements[name] = element as HTMLMetaElement;
        (element as HTMLMetaElement).content = "";
      }
    }
    if (this.props.data.attributes?.metaData) {
      for (const key in this.props.data.attributes?.metaData) {
        const value = this.props.data.attributes?.metaData[key];
        const element = metaElements[key] ?? document.createElement("meta");
        element.name = key;
        element.content = value;
        document.head.appendChild(element);
      }
    }
  }

  render() {
    const appBarHeight = this.props.data.attributes.appBarHeight;
    return (
      <div
        id="mp_scaffold"
        style={{
          paddingTop: appBarHeight + "px",
          height:
            this.props.data.attributes.isListBody === true
              ? "unset"
              : `calc(100% - ${appBarHeight}px)`,
          backgroundColor: this.props.data.attributes.backgroundColor
            ? cssColor(this.props.data.attributes.backgroundColor)
            : "unset",
          overflow:
            this.props.data.attributes.isListBody === true ? "unset" : "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {this.props.data.attributes.appBar ? (
          <div
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              right: "0px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
        {this.props.data.children?.map((it, idx) =>
          MPCore.render(it, `item_${idx}`)
        )}
      </div>
    );
  }
}
