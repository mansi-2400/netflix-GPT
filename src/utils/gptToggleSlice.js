import { createSlice } from "@reduxjs/toolkit";

const gptToggleSlice = createSlice({
    name: "GptToggle",
    initialState: {
        showGptView: false,
        movieNames: null,
        movieResults: null,

    },
    reducers:{
        gptToggleView:(state, action) =>
        {
            state.showGptView = !state.showGptView;
        },
        addRcmdMovieResult : (state, action) =>
        {
            const {movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames
        }
    }
});


export const {gptToggleView, addRcmdMovieResult} = gptToggleSlice.actions;
export default gptToggleSlice.reducer;