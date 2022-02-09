export const getMoviesFromStorage = () => {
  return localStorage.getItem("movies");
};

export const putMoviesInStorage = (movies) => {
  return localStorage.setItem("movies", movies);
};
