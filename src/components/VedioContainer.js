import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../utils/movieSlice";
import useBannerVedio from "../customHooks/useBannerVedio";
import Header from "./Header";
import { translations } from "../utils/constants";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies?.[0]);
  const movieKey = useSelector((store) => store.movies?.trailers?.[0]?.key);
  const selectedLanguage = useSelector((store) => store.lang?.currentLanguage);
  const movieId = movieData?.id;

  useEffect(() => {
    if (movieData) {
      dispatch(addMovieDetails(movieData));
    }
  }, [movieData, dispatch]);

  useBannerVedio(movieId);
  if (!movieData || !movieKey) return null;

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${movieKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="object-cover w-full h-full"
        ></iframe>
      </div>
      <div className="relative z-10 ml-20 py-[14%] gap-4 p-2 space-y-4 text-white">
        <h1 className="text-3xl font-bold mt-36">{movieData.title}</h1>
        <p className="w-1/4 hidden md:block">{movieData.overview}</p>
        <div className="space-x-5">
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:opacity-60">
            ⯈{translations[selectedLanguage].play}
          </button>
          <button className="px-4 py-2 bg-transparent border border-white text-white rounded-md hover:opacity-60">
            🛈 {translations[selectedLanguage].moreInfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
