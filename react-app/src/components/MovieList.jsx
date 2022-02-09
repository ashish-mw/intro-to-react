const MovieList = (props) => {
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
};

export default MovieList;
