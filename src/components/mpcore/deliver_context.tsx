import React from "react";
import { Component, FunctionComponentElement, CSSProperties } from "react";

export class DeliverContext {
  style: CSSProperties = {};
  onClick?: (e: any) => void = (e) => undefined;

  singleChildElement(
    component: Component,
    deliverContext: DeliverContext,
    endOfLayer: boolean = false,
    endLayerContext?: DeliverContext
  ): FunctionComponentElement<any> {
    let child = component.props.children
      ? (component.props.children as any[])[0]
      : component;
    if (
      deliverContext.style.flex &&
      deliverContext.style.minWidth === "-webkit-fill-available"
    ) {
      deliverContext.style.minWidth = "unset";
    }
    let isDiv = false;
    if (child === undefined) {
      isDiv = true;
      child = (
        <div
          style={deliverContext.style}
          onClick={deliverContext.onClick}
        ></div>
      );
    }
    if (endOfLayer && endLayerContext) {
      if (Object.keys(deliverContext.style).length === 0) {
        return React.cloneElement(child, {
          deliverContext: endLayerContext,
        });
      } else {
        return (
          <div style={deliverContext.style} onClick={deliverContext.onClick}>
            {React.cloneElement(child, {
              deliverContext: endLayerContext,
            })}
          </div>
        );
      }
    } else {
      if (isDiv) {
        return child;
      } else {
        return React.cloneElement(child, {
          deliverContext,
        });
      }
    }
  }

  multiChildElement(
    component: Component,
    deliverContext: DeliverContext
  ): FunctionComponentElement<any> {
    let children: any[] = component.props.children as any[];
    return (
      <div style={deliverContext.style} onClick={deliverContext.onClick}>
        {children.map((it, idx) =>
          React.cloneElement(it, {
            key: `key_${idx}`,
            deliverContext: new DeliverContext(),
          })
        )}
      </div>
    );
  }

  clone(): DeliverContext {
    let context = new DeliverContext();
    context.style = { ...this.style };
    context.onClick = this.onClick;
    return context;
  }
}
