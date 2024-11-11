import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addToFavouriteMovies,
  addToWatchLaterMovies,
  removeFromFavouriteMovies,
  removeFromWatchLaterMovies,
} from "../utils/movieSlice";
import { Link } from "react-router-dom";

const MovieCard = ({ poster, id, name, background }) => {
  const [toggleFavIcon, setToggleFavIcon] = useState(false);
  const [toggleWatchIcon, setToggleWatchIcon] = useState(false);
  const dispatch = useDispatch();

  const handleAddFavMovies = () => {
    // console.log("Movies Added to Favorite: ", name);
    setToggleFavIcon(!toggleFavIcon);

    if(!toggleFavIcon)
    {
      dispatch(addToFavouriteMovies(name));

    }
    else
    {
      console.log("Remove this:", name);
      dispatch(removeFromFavouriteMovies(name));
    }
    console.log("Toggle fav value: ", toggleFavIcon);
  };

  const handleAddWatchLater = () => {
    // console.log("Movies Added to watch Later: ", name);
    setToggleWatchIcon(!toggleWatchIcon);

    if(!toggleWatchIcon)
      {dispatch(addToWatchLaterMovies(name));}
    else
      {console.log("Remove this name: ",name)
        dispatch(removeFromWatchLaterMovies(name));
      }
    console.log("Watch later toggle value: ", toggleWatchIcon)

  };
  if (!poster && !background) return null;
  return (
    <div className="">
      <Link to={"/watch/" + id}>
        {" "}
        <div className="w-36 md:w-44 p-2 ">
          <img
            src={IMG_CDN_URL + poster || IMG_CDN_URL + background}
            id={id}
            className="cursor-pointer md:h-auto h-52"
            alt="movie-poster"
          />
        </div>
      </Link>

      <div className="flex flex-row p-1 m-1 w-20 justify-between ">
        <button
          className="text-white  text-sm font-thin "
          onClick={() => handleAddFavMovies(name)}
        >
          {toggleFavIcon ? (
            <svg
              class="h-8 w-8 text-red-700"
              viewBox="0 0 24 24"
              fill="red"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5
           5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
          ) : (
            <svg
              class="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
        </button>

        <button
          className="text-white   text-sm font-thin "
          onClick={() => handleAddWatchLater(name)}
        >
         {toggleWatchIcon ?  
         <svg
            class="h-8 w-8 text-red-500"
            fill="red"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              color="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          :
          <svg
          class="h-8 w-8 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            color="red"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
          }
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
