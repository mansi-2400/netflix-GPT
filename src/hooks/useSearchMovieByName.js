import { OPTIONS } from "../utils/constants";
const searchMovieByName = async (movieName) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
      "&include_adult=false&language=en-US&page=1",
    OPTIONS
  );
  const json = await data.json();
  const filteredMovies = json.results.filter(
    (movie) => movie.original_title === movieName || movie.title === movieName
  );
  return filteredMovies;
};
export default searchMovieByName;
