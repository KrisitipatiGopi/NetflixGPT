import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addNowPlayingMovies(json.results))
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies(); 
  }, []);
};

export default useNowPlayingMovies;
