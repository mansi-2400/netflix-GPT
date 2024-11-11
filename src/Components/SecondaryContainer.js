import React, {useState, useEffect} from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const [loading, setLoading] = useState(true);

  const selector = useSelector((store) => store.MoviesSlice);
  // console.log("Selector: ", selector)

  useEffect(() => {
    if (selector) {
      setLoading(false);
    }
  }, [selector]);
  if (!selector) return;
  return (
    loading ?  <h1 className="text-white "> Loading</h1> :
    <div className="bg-black   ">
      <div className="relative md:-mt-80 z-40 p-4 md:pl-12 mt-0 md:pr-10">
        <MoviesList title="Now Playing" movies={selector?.nowPlayingMovies} />

        <MoviesList title="Popular" movies={selector?.popularMovies} />
        <MoviesList title="Top Rated" movies={selector?.topRatedMovies} />
        <MoviesList title="Upcoming" movies={selector?.upcomingMovies} />
      </div>
    </div>
    
  );
};

export default SecondaryContainer;
