import "./App.css";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}`s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
    </section>
  );
}

function Footer() {
  return <p>It`s true</p>;
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy" />
      <Main adjective="amazing" />
      <Footer />
    </div>
  );
}

export default App;
