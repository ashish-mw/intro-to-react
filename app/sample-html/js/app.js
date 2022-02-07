function AddMovieForm(props) {
  const [name, setName] = React.useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <input type="submit" value="Add item" />
    </form>
  );
}

function MovieList(props) {
  function handleDelete(id) {
    props.onDelete(id);
  }

  return (
    <div>
      <ul>
        {props.movies.map(function (movie) {
          return (
            <li key={movie.id}>
              {movie.text}{" "}
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  const initialState = [
    { id: 1, text: "The Matrix" },
    { id: 2, text: "The Dark Knight" },
    { id: 3, text: "Ironman" },
  ];
  const [movies, setMovies] = React.useState(initialState);

  function handleDelete(id) {
    setMovies((prev) => {
      const items = prev.filter((i) => i.id != id);
      return items;
    });
  }

  function handleMovieAdd(name) {
    const movie = {
      id: new Date().getTime(),
      text: name,
    };

    const movieList = [...initialState];
    movieList.push(movie);

    setMovies(movieList);
  }

  return (
    <div>
      <AddMovieForm onAdd={handleMovieAdd} />
      <MovieList movies={movies} onDelete={handleDelete} />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
