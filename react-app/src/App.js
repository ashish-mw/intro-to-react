import { useState } from "react";

// components
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";

function App() {
  const initialMovieList = [
    { id: 1, name: "The Matrix" },
    { id: 2, name: "The Matrix Reloaded" },
    { id: 3, name: "Ironman" },
  ];

  const [movieList, setMovieList] = useState(initialMovieList);

  function handleDelete(id) {
    setMovieList((prev) => prev.filter((m) => m.id !== id));
  }

  function handleMovieAdd(movieName) {
    const newMovie = {
      name: movieName,
      id: new Date().getTime(),
    };
    const newMovieList = [...movieList];
    newMovieList.push(newMovie);
    setMovieList(newMovieList);
  }

  return (
    <div className="App">
      <AddMovieForm onAdd={handleMovieAdd} />
      <MovieList movies={movieList} onDelete={handleDelete} />
    </div>
  );
}

export default App;
