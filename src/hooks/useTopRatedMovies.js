import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addPopularMovies, addTopRatedMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";


const useTopRatedMovies = () =>
{
    const dispatch = useDispatch();
    const topRated = useSelector((store)=> store.MoviesSlice.topRatedMovies);

  const getMoviesList = async () =>
    {
      const response = await fetch("https://api.themoviedb.org/3/movie/top_rated", OPTIONS);
      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
  
    }
    useEffect(()=>
    {
      !topRated && getMoviesList();
    },[]);
}
export default useTopRatedMovies;