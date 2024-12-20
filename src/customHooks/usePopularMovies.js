import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addPopularMovies(json.results))
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies(); 
  }, []);
};

export default usePopularMovies;
