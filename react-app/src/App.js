import { useState, useEffect } from "react";

// utilities
import { getMoviesFromStorage, putMoviesInStorage } from "./utils";

// components
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movies = getMoviesFromStorage();
    if (movies) {
      const moviesJSON = JSON.parse(movies);
      setMovieList(moviesJSON);
    }
  }, []);

  useEffect(() => {
    const movies = JSON.stringify(movieList);
    putMoviesInStorage(movies);
  }, [movieList]);

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
