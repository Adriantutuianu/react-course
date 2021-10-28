import React, { useState } from "react";
import { useReducer } from "react/cjs/react.development";
import "./App.css";

function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
