function App() {
  const initialMovieList = [
    { id: 1, name: "The Matrix" },
    { id: 2, name: "The Matrix Reloaded" },
    { id: 3, name: "Ironman" },
  ];

  const [movieList, setMovieList] = React.useState(initialMovieList);
  const [newMovieName, setNewMovieName] = React.useState("");

  function handleDelete(id) {
    setMovieList((prev) => prev.filter((m) => m.id != id));
  }

  function handleInputChange(e) {
    setNewMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      name: newMovieName,
      id: new Date().getTime(),
    };

    const newMovieList = [...movieList];
    newMovieList.push(newMovie);

    setMovieList(newMovieList);

    setNewMovieName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMovieName} onChange={handleInputChange} />
        <input type="submit" value="Add new movie" />
      </form>

      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <span>{movie.name}</span>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
