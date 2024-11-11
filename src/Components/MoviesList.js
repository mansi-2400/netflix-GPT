import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="  ">
      <p className="text-lg md:pt-6 p-2  font-normal md:font-semibold text-white">{title}</p>
      <div className="flex ">
        <div className="flex overflow-x-auto mr-2 p-1 bg-black">
          {" "}
          {movies?.map((movie) => (
            <MovieCard key = {movie.poster_path} name={movie.title} poster={movie.poster_path} id = {movie.id} 
              background = {movie.backdrop_path}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
