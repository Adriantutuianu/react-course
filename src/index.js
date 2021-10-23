import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return <h1>Lake</h1>;
}

function SkiResort() {
  return <h1>Ski Resort</h1>;
}

function App() {
  return (
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

const [first, second, third] = ["popcorn", "pretzel", "pineapple"];

console.log(first);
console.log(second);
console.log(third);
