import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello() {
  return <h1> Welcome to React!</h1>;
}

ReactDOM.render(
  // React.createElement("h1", null, "Hello!"),
  <Hello></Hello>,
  document.getElementById("root")
);
