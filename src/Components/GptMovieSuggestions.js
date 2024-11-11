import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.GptToggle);

  if (!movieNames) return;
  return (
    <div className="bg-black pl-6 m-5 bg-opacity-80 pr-6 pb-6">
      {movieNames.map((movie, index) => 
        (<MoviesList key={index} title={movie} movies={movieResults[index]}/>)
      )}
    </div>
  );
};

export default GptMovieSuggestions;
