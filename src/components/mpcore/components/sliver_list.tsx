import { PureComponent } from "react";
import React from "react";

export class SliverList extends PureComponent {
    render() {
        return <div>{this.props.children}</div>;
    }
}
