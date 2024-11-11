import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { muteTrailerVideo } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, description }) => {
  const [info, setInfo] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.MoviesSlice.muteTrailer);
  const handleAudio = () => {
    dispatch(muteTrailerVideo());
  };

  const playVideo = () => {
    setInfo(!info);
    dispatch(muteTrailerVideo());
  };
  return (
    // <></>
    <div
      className="absolute py-[35%] md:pt-[20%] md:pb-0
     text-white z-10 w-screen aspect-video bg-gradient-to-r from-black p-1"
    >
      {info && (
        <>
          <h2 className="text-2xl md:text-3xl font-bold text-white md:px-8 mx-3 ">
            {title}
          </h2>
          <h4 className="hidden md:inline-block text-white w-1/3 px-8 mx-3 ">
            {description}
          </h4>

          <div className="px-2 py-1 md:px-11">
            <button
              onClick={playVideo}
              className="text-black px-2 m-1 bg-white md:px-6 md:py-2 md:m-0 
              rounded-md md:text-lg font-sans hover:bg-opacity-80"
            >
              ▶️ Play
            </button>
            <button
              onClick={handleAudio}
              className=" text-black bg-white px-2 md:px-6 md:py-2 
              rounded-md md:text-lg font-sans m-2 hover:bg-opacity-80"
            >
              {selector ? " 🔊 Unmute" : "🔇Mute"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoTitle;
