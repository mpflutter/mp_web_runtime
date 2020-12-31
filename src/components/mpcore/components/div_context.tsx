import { Component, createContext, createElement } from "react";
import { MPComponentsProps } from "../component";
import React from "react";

export const DivContext = createContext<{ style: any }>({ style: {} });

export class DivContextProvider extends Component<{
  data?: MPComponentsProps;
  style?: any;
}> {
  render() {
    if (!this.props.children || (this.props.children as any[]).length <= 0) {
      return (
        <DivContext.Consumer>
          {(divContext) => (
            <DivContext.Provider
              value={{
                style: {
                  ...divContext.style,
                  ...this.props.style,
                },
              }}
            >
              <DivContextConsumer
                style={{
                  minWidth: "-webkit-fill-available",
                  minHeight: "100%",
                }}
              ></DivContextConsumer>
            </DivContext.Provider>
          )}
        </DivContext.Consumer>
      );
    }
    return (
      <DivContext.Consumer>
        {(divContext) => {
          return (
            <DivContext.Provider
              value={{
                style: {
                  ...divContext.style,
                  ...this.props.style,
                },
              }}
            >
              {this.props.children}
            </DivContext.Provider>
          );
        }}
      </DivContext.Consumer>
    );
  }
}

export class DivContextConsumer extends Component<any> {
  render() {
    return (
      <DivContext.Consumer>
        {(divContext) => (
          <DivContext.Provider
            value={{
              style: {},
            }}
          >
            {createElement(
              (this.props.el ?? "div") as any,
              {
                ...this.props,
                style: (() => {
                  let style = {
                    ...divContext.style,
                    ...this.props.style,
                  };
                  if (divContext.style.overflow === "hidden") {
                    style.overflow = "hidden";
                  }
                  return style;
                })(),
              },
              this.props.children
            )}
          </DivContext.Provider>
        )}
      </DivContext.Consumer>
    );
  }
}
