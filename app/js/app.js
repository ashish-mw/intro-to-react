function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <span>{movie.name}</span>
          <button onClick={() => props.onDelete(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function AddMovieForm(props) {
  const [newMovieName, setNewMovieName] = React.useState("");

  function handleInputChange(e) {
    setNewMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(newMovieName);
    setNewMovieName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newMovieName} onChange={handleInputChange} />
      <input type="submit" value="Add new movie" />
    </form>
  );
}

function App() {
  const initialMovieList = [
    { id: 1, name: "The Matrix" },
    { id: 2, name: "The Matrix Reloaded" },
    { id: 3, name: "Ironman" },
  ];

  const [movieList, setMovieList] = React.useState(initialMovieList);

  function handleDelete(id) {
    setMovieList((prev) => prev.filter((m) => m.id != id));
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
    <>
      <AddMovieForm onAdd={handleMovieAdd} />
      <MovieList movies={movieList} onDelete={handleDelete} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
