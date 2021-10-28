import "./App.css";

function SecretComponent() {
  return <h1>Secret information for authorized users only.</h1>;
}

function Regularcomponent() {
  return <h1>Everyone can see this component.</h1>;
}

function App({ authorized }) {
  return <>{authorized ? <SecretComponent /> : <Regularcomponent />}</>;
}

export default App;
