import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        }, 
        addTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action) => {
            state.upComingMovies = action.payload;
        },
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        },
        addTrailers:(state, action) => {
            state.trailers = action.payload;
        },
        addSearchMovies:(state,action) => {
            state.searchedMovies = action.payload;
        },
    },
});

export const  {addSearchMovies,addNowPlayingMovies, addMovieDetails, addTrailers, addPopularMovies, addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;