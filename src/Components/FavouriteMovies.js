  import React, { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import searchMovieByName from "../hooks/useSearchMovieByName";
  import { Link } from "react-router-dom";
  import { IMG_CDN_URL, LOGIN_BG_IMG } from "../utils/constants";
  import Shimmer from "./Shimmer";
  import Header from "./Header";

  const FavouriteMovies = () => {
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const favSelector = useSelector(
      (store) => store.MoviesSlice?.favouriteMovies
    );

    const fetchMovies = async () => {
      const result = favSelector.map((movie) => searchMovieByName(movie.trim()));

      const gptResult = await Promise.all(result);
      setFavMovies(gptResult);
    };
    useEffect(() => {
      setLoading(true);

      fetchMovies();
      setLoading(false);
    }, []);

    // useEffect(() => {
    //   console.log(favMovies);
    // }, [favMovies]);

    if (!favSelector) return;
    return (
      <>

        <Header />

        {loading ? <Shimmer/> :
        <div className="  ">
        <div className="fixed">
          <img
            src={LOGIN_BG_IMG}
            alt="login-bg-color"
            className="bg-gradient-to-b from-black h-screen object-cover md:w-screen"
          />
        </div>

          <div className="bg-black  bg-opacity-70 md:w-10/12 md:m-24 absolute mt-36 p-6 w-full  ">
            <p className="text-white font-bold md:text-4xl text-2xl md:pt-3 text-center">
              Your Favourite movies list
            </p>
            <div className="flex flex-row flex-wrap ">
              {favMovies.map((favMovie, index) => (
                <div className="bg-black md:m-3 m-1 mx-auto p-2 md:w-48 w-36 rounded-lg ">
                  <Link to={"/watch/" + favMovie[0].id}>
                    {/* <p className="text-white text-center text-xl">
                      {favSelector[index]}
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
        </div>}
      </>
    );
  };

  export default FavouriteMovies;
