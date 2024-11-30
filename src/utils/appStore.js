import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import languageReducer from "./languageSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        lang: languageReducer,
        gpt: gptReducer,
    }
})
export default appStore;