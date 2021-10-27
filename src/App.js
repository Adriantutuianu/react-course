import "./App.css";
import restaurant from "./restaurant.jpg";

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
      <img
        src={restaurant}
        height={200}
        alt="napkin and fork at a restaurant table"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
        ;
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ["Macaroni and Cheese", "Salmon", "Tofu with veggie"];

function App() {
  return (
    <>
      <Header name="Cindy" />
      <Main adjective="amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}

export default App;
