import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1> Visit {name}</h1>
    </div>
  );
}

// if (props.season === "summer") {
//   return <Lake name="Jenny Lake" />;
// } else if (props.season === "winter") {
//   return <SkiResort name="JHMR" />;
// }

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : (
        <SkiResort name="JHMR" />
      )}
    </div>
  );
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
