import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "MoviesSlice",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    favouriteMovies: [],
    watchLaterMovies: [],
    muteTrailer : true,
    currentWatchingTrailer : null,
    // popularMovies: {
    //   loading : false,
    //   movies : null,
    // },
    popularMovies : null,
    upcomingMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    nowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    muteTrailerVideo : (state, action) =>
    {
      state.muteTrailer = !state.muteTrailer;
    },
    addToFavouriteMovies : (state, action) =>
    {
      !state.favouriteMovies.includes(action.payload) && 
      state.favouriteMovies.push(action.payload);
    },
    removeFromFavouriteMovies: (state, action) =>
    {
      const index = state.favouriteMovies.indexOf(action.payload);
      state.favouriteMovies.splice(index,1);
    },
    addToWatchLaterMovies : (state, action) =>
    {
      !state.watchLaterMovies.includes(action.payload) && 
      state.watchLaterMovies.push(action.payload);
    },
    removeFromWatchLaterMovies: (state, action) =>
      {
        const index = state.watchLaterMovies.indexOf(action.payload);
        state.watchLaterMovies.splice(index,1);
      },
    addPopularMovies: (state, action) => {
        state.popularMovies = action.payload;
    },
    addUpcomingMovies :(state, action) =>
    {
        state.upcomingMovies = action.payload;
    },
    addTopRatedMovies : (state, action) =>
    {
        state.topRatedMovies = action.payload;
    },
    addCurrentWatchingTrailer : (state, action) =>
    {
      state.currentWatchingTrailer = action.payload;
    }
  },
});

export const { nowPlayingMovie, addTrailerVideo, muteTrailerVideo,
  addPopularMovies, addUpcomingMovies, addTopRatedMovies, removeFromWatchLaterMovies,
  addToFavouriteMovies, addToWatchLaterMovies, removeFromFavouriteMovies,
  addCurrentWatchingTrailer} = movieSlice.actions;
export default movieSlice.reducer;
