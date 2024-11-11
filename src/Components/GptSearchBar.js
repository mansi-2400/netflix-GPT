import React, { useRef, useState } from "react";
import { langConfig } from "../utils/langConfig";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/geminiAIConfig";
import { OPTIONS } from "../utils/constants";
import searchMovieByName from "../hooks/useSearchMovieByName";
import { addRcmdMovieResult } from "../utils/gptToggleSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const langSelector = useSelector((store) => store.Lang.lang);
  const rcmdMoviesSelector = useSelector(
    (store) => store.GptToggle?.movieResult
  );
  const inputRef = useRef();

  // const fetchMovies = async (movieName) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movieName +
  //       "&include_adult=false&language=en-US&page=1",
  //     OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   const filteredMovies = json.results.filter(
  //     (movie) => movie.original_title === movieName || movie.title === movieName
  //   );

  //   setLoading(false);
  //   return filteredMovies;
  // };

  const handleSearch = async () => {

    setLoading(true);
    const gptQuery =
      "Act as an Movie Recommedation System for the " +
      inputRef.current.value +
      " s. Give me 5 names of the movies comma separated like the given example ahead. Example : Golmaal, Welcome, Don, Hero, Baby. Do not add any special characters in the beginning or ending of the result";

    // console.log(gptQuery);

    const result = await model.generateContent(gptQuery);

    const recommenededMovies = result.response?.text();
    // console.log(recommenededMovies);

    const rcmdMoviesArray = recommenededMovies.split(",");
    // console.log("Array: ", rcmdMoviesArray);

    if (!recommenededMovies) {
      alert("Please add genre ");
    }

    // fetchMovies(rcmdMoviesArray[1]);
    const fetchPromises = rcmdMoviesArray.map((movie) =>
      searchMovieByName(movie.trim())
    );


    const gptResult = await Promise.all(fetchPromises);
    console.log(gptResult);

    dispatch(
      addRcmdMovieResult({
        movieNames: rcmdMoviesArray,
        movieResults: gptResult,
      })
    );
    setLoading(false);
  };
  return (
    <div>
    <div className=" w-full md:w-1/2 m-auto pt-[40%] md:pt-0">
      <div className=" pt-[20%]">
        <form
          className="bg-black text-white  grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            className="m-2 p-2 col-span-9 text-black"
            type="text"
            placeholder={langConfig[langSelector].input_placeholder}
          />
          <button
            className="m-2 p-1 md:p-3 bg-red-800 rounded-md col-span-3"
            onClick={handleSearch}
          >
            {langConfig[langSelector].search}
          </button>
        </form>
      </div>

    </div>
    {loading ? <Shimmer/> :<></>}

    </div>
  );
};

export default GptSearchBar;
