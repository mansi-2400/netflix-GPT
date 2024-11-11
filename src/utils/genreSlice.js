import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name : "GenreSlice",
    initialState : {
        genreList: null,
        movies : []
    },
    reducers : {
        addGenreList :(state, action) =>
        {
            state.genreList = action.payload;
        },
        addMoviesOfGenre : (state, action) =>
        {
            state.movies = action.payload;
        }
    }
});

export const {addGenreList, addMoviesOfGenre} = genreSlice.actions;
export default genreSlice.reducer;