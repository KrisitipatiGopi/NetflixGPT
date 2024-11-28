import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailers } from "../utils/movieSlice";

const useBannerVedio = (movieId) => {
    const dispatch = useDispatch();
  const getVideos = async () => {
    if (!movieId) return; 

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        api_options
      );
      const json = await data.json();
      const trailers = json.results.filter((each) => each.type === "Trailer");
      dispatch(addTrailers(trailers));
      
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, [movieId]); 
};

export default useBannerVedio;
