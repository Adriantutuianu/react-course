import "./App.css";

function Header() {
  return (
    <header>
      <h1>Eve`s Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
