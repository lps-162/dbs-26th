import Counter from "./Counter";
import MovieDetails from "./movies/MovieDetails";
import CounterHook from "./CounterHook";
import MovieList from "./movies/MovieList";

function App(props) {
  const movie = {
    id: 1,
    name: "Thalapathy",
    director: "Mani Rathnam",
    artist: "Rajinikanth, Mamooty"
  }

  const productionHouse = {
    name: "Manirathnam Productions",
    location: "Chennai"
  }


  return (
    <div>
      <h2>Musicality in React</h2>
      {/* <Counter />
      <MovieDetails movie={movie} productionHouse={productionHouse} />
      <CounterHook /> */}
      <MovieList />
    </div>
  );
}

export default App;

