import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const usePopularMovies = () =>
{
    const dispatch = useDispatch();

  const getMoviesList = async () =>
    {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular", OPTIONS);
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
  
    }
    useEffect(()=>
    {
      getMoviesList();
    },[]);
}
export default usePopularMovies;