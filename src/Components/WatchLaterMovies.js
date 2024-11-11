import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import searchMovieByName from "../hooks/useSearchMovieByName";
import { Link } from "react-router-dom";
import { LOGIN_BG_IMG } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";
import Header from "./Header";

const WatchLaterMovies = () => {
  const [watchLater, setWatchLater] = useState([]);
  const watchLaterSelector = useSelector(
    (store) => store.MoviesSlice?.watchLaterMovies
  );

  const fetchMovies = async () => {
    const result = watchLaterSelector.map((movie) =>
      searchMovieByName(movie.trim())
    );

    const gptResult = await Promise.all(result);
    setWatchLater(gptResult);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   console.log(watchLater);
  // }, [watchLater]);

  if (!watchLaterSelector) return;
  return (
    <>
      <Header />
      <div className="">
        <div className="fixed">
          <img
            src={LOGIN_BG_IMG}
            alt="bg-img"
            className="bg-gradient-to-b from-black h-screen object-cover md:w-screen"
          />
        </div>

        <div className="bg-black  bg-opacity-70 md:w-10/12 md:m-24 absolute mt-36 p-6 w-full z-20 ">
        <p className="text-white font-bold md:text-4xl text-2xl md:pt-3 text-center">
        Your Watch Later movies list
          </p>
          <div className="flex flex-row flex-wrap ">
          {watchLater.map((favMovie, index) => (
                <div className="bg-black md:m-3 m-1 mx-auto p-2 md:w-48 w-36 rounded-lg ">
                <Link to={"/watch/" + favMovie[0].id}>
                  {/* <p className="text-white text-center text-xl">
                    {watchLaterSelector[index]}
                  </p> */}
                  <img
                    src={IMG_CDN_URL + favMovie[0]?.poster_path}
                    alt="favMovie"
                    className="w-full p-2"
                    />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchLaterMovies;
