import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addTrailers:(state, action)=>{
            state.trailers = action.payload
        }
    }
})

export const  {addNowPlayingMovies, addMovieDetails, addTrailers} = movieSlice.actions;

export default movieSlice.reducer;