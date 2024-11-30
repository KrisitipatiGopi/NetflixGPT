import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import VideoContainer from "./VedioContainer";
import { useSelector } from "react-redux";
import Searchgpt from "./Searchgpt";
const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black text-white">
      <Header />
      {showGPT ? (
        <Searchgpt/>
      ) : (
        <>
          {" "}
          <VideoContainer />
          <MainContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
