import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import VideoContainer from "./VedioContainer";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <VideoContainer />
    </div>
  );
};

export default Browse;
