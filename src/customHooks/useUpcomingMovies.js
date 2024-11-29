import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addUpcomingMovies(json.results))
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getUpComingMovies(); 
  }, []);
};

export default useUpcomingMovies;
