import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>Let`s build something cool.</p>
    </div>
  );
}

ReactDOM.render(
  // React.createElement("h1", null, "Hello!"),
  <Hello library="React" />,
  document.getElementById("root")
);
