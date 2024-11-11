import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useFindTrailerVideo = (movieId) =>
{
    const dispatch = useDispatch();
    const findTrailer = useSelector((store)=> store.MoviesSlice.trailerVideo);

    const getMovieVideos = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          OPTIONS
        );
        const data = await response.json();
    
        const filterTrailer = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
        dispatch(addTrailerVideo(trailer?.key));
      };
      useEffect(() => {
       !findTrailer &&  getMovieVideos();
      }, []);
}
export default useFindTrailerVideo;