import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app";
require('./polyfills/object_values');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
