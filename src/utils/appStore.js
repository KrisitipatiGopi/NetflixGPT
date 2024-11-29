import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import languageReducer from "./languageSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        lang: languageReducer,
    }
})
export default appStore;