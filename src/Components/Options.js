import React from "react";
import useGenreList from "../hooks/useGenreList";
import { useSelector } from "react-redux";
import OptionHeader from "./OptionHeader";

const Options = () => {
  const genreSelector = useSelector((store) => store?.GenreSlice?.genreList);
  useGenreList();

  const generateRandomGlassBorder = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return `4px solid ${randomColor}CC`; // 4px darker semi-transparent border
  };

  const showMovies = (genre) =>
  {
    console.log("You have clicked on: "+genre);
  } 

  if (!genreSelector) return null;

  return (
    <div className="absolute flex items-center justify-center md:mt-[10%] mt-[30%] z-50 ">
      <div className="relative w-2/3 md:w-2/3 h-96 overflow-y-auto mx-8 
       bg-black/90 text-white rounded-lg shadow-xl ">
        <OptionHeader />

        <div className="flex flex-wrap justify-center items-center gap-10">
          {genreSelector.map((genre, index) => (
            <div
              key={index}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full
            cursor-pointer flex items-center justify-center shadow-lg
             backdrop-blur-md transition-transform transform hover:scale-110"
              style={{
                border: generateRandomGlassBorder(),
              }}
            >
              <p className="text-white text-sm md:text-base text-center 
              font-semibold overflow-hidden whitespace-nowrap"
              onClick={()=>showMovies(genre?.name)}
              >
                {genre?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
