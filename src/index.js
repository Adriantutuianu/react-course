import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let city = "Madrid";

ReactDOM.render(
  // React.createElement("h1", null, "Hello!"),
  <h1>Hello from {city}!</h1>,
  document.getElementById("root")
);
