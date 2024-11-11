import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from './userInfoSlice';
import  movieReducer from "./movieSlice";
import gptToggleReducer from "./gptToggleSlice";
import langReducer from "./langSlice";
import genreReducer from "./genreSlice";

export const appStore = configureStore({
    reducer:{
        UserInfo : userInfoReducer,
        MoviesSlice : movieReducer,
        GptToggle : gptToggleReducer,
        Lang : langReducer,
        GenreSlice : genreReducer,
    }
});