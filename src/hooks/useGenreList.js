import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGenreList } from "../utils/genreSlice";

const useGenreList =  () =>
{
    const dispatch = useDispatch();
    const genreSelector = useSelector((store)=> store?.GenreSlice?.genreList);
    useEffect(()=>
    {
        !genreSelector && fetchGenre();
    },[])
    const fetchGenre = async () =>
    {
        const data = await fetch("https://api.themoviedb.org/3/genre/movie/list", OPTIONS);
        const result = await data.json();
        dispatch(addGenreList(result.genres));
    
    }
};

export default useGenreList