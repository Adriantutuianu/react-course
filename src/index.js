import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  // React.createElement("h1", null, "Hello!"),
  React.createElement(
    "ul",
    { style: { color: "blue" } },
    React.createElement("li", null, "hot dogs"),
    React.createElement("li", null, "hamburger"),
    React.createElement("li", null, "pizza")
  ),
  document.getElementById("root")
);
