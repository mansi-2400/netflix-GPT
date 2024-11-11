import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { nowPlayingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const useNowPlayingMovies = () =>
{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=> store.MoviesSlice?.nowPlayingMovies);


  const getMoviesList = async () =>
    {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing", OPTIONS);
      const data = await response.json();
      dispatch(nowPlayingMovie(data.results));
  
    }
    useEffect(()=>
    {
      !nowPlayingMovies && getMoviesList();
    },[]);
}
export default useNowPlayingMovies;