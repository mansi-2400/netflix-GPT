import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.MoviesSlice?.nowPlayingMovies);

  if (!movies) return;
  // console.log(movies);

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  const desc = overview?.split(" ");
  return (
    <div>
      <div className="md:pt-0 pt-[30%] bg-black">
        <VideoTitle
          title={original_title}
          description={
            desc.length > 15
              ? desc.slice(0, 15).join(" ") + "..."
              : desc.join(" ")
          }
        />
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
