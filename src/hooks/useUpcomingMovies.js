import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addPopularMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";


const useUpcomingMovies = () =>
{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.MoviesSlice.upcomingMovies);

  const getMoviesList = async () =>
    {
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming", OPTIONS);
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
  
    }
    useEffect(()=>
    {
     !upcomingMovies && getMoviesList();
    },[]);
}
export default useUpcomingMovies;