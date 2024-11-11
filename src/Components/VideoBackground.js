import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useFindTrailerVideo from "../hooks/useFindTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerSelector = useSelector((store) => store.MoviesSlice?.trailerVideo);
  const selector = useSelector((store) => store.MoviesSlice.muteTrailer);

  useFindTrailerVideo(movieId);

  if (!trailerSelector) return null; 

  return (
    <div className="w-screen">
      <iframe
        title={movieId}
        className="w-screen aspect-video relative overscroll-none"
        src={`https://www.youtube.com/embed/${trailerSelector}?&autoplay=1&mute=${Number(selector)}&showinfo=0&loop=1&rel=0&controls=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  );
};

export default VideoBackground;
