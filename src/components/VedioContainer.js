import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import useBannerVedio from "../customHooks/useBannerVedio";
import Header from "./Header";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies?.[0]);
  const movieId = movieData?.id;

  useEffect(() => {
    if (movieData) {
      dispatch(addMovieDetails(movieData));
    }
  }, [movieData, dispatch]);

  useBannerVedio(movieId);

  if (!movieData) return null;

  return (
    <div className="relative w-full h-screen">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/FKBN1qAzW3s?autoplay=1&mute=1&controls=0&loop=1&playlist=FKBN1qAzW3s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="object-cover w-full h-full"
        ></iframe>
      </div>

      {/* Content (movie title, overview, buttons) */}
      <div className="relative z-10 ml-20 py-[14%] gap-4 p-2 space-y-4 text-white">
        <h1 className="text-3xl font-bold">{movieData.title}</h1>
        <p className="w-1/4">{movieData.overview}</p>
        <div className="flex space-x-5">
          <button className="px-4 py-2 bg-black text-white rounded-md hover:opacity-60">
            ⯈ Play
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:opacity-60">
            🛈 More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
