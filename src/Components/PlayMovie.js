import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentWatchingTrailer } from "../utils/movieSlice";

const PlayMovie = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const selector = useSelector(
    (store) => store.MoviesSlice.currentWatchingTrailer
  );

  useEffect(() => {
    findTrailer();
  }, [movieId]);

  const findTrailer = async () => {
    console.log("Clicked", movieId);
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      OPTIONS
    );
    const json = await data.json();
    console.log("Vds found data:", json.results);
    const trailer = json.results?.filter(
      (trailer) => trailer.name === "Trailer" || "Official Trailer"
    );
    dispatch(addCurrentWatchingTrailer(trailer[0]?.key));
    console.log(trailer);
  };
  if (!selector) return;

  return (
    <div>

      <div className="w-screen ">
        <iframe
          title={movieId}
          className="w-screen aspect-video relative overscroll-none"
          src={
            "https://www.youtube.com/embed/" +
            selector +
            "?&autoplay=1&mute=0&showinfo=0&loop=1&rel=0"
          }
          allow="accelerometer; autoplay; clipboard-write;encrypted-media; 
        gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default PlayMovie;
