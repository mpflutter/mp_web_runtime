import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
require("./polyfills/object_values");

let rootDOM = document.getElementById("root");
if (!rootDOM) {
  rootDOM = document.createElement("div");
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootDOM
);

const fragments = document.querySelectorAll("[mp-route]");
for (let index = 0; index < fragments.length; index++) {
  const element = fragments[index];
  (window as any).$MPFlutter.App.initFragment({
    element,
    route: element.attributes.getNamedItem("mp-route")?.value,
  });
}
