import React from "react";
import { useSelector } from "react-redux";
import { translations } from "../utils/constants";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  const selectedLanguage = useSelector((store) => store.lang?.currentLanguage);

  if (!movies || movies.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        {translations[selectedLanguage]?.noMoviesToDisplay ||
          "No movies to display"}
      </div>
    );
  }

  return (
    <div className="mt-10 px-6 w-full">
      <h2 className="text-2xl text-white font-bold mb-4">
        {translations[selectedLanguage][title]}
      </h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-scroll bg-black  bg-opacity-10 p-6 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard poster={movie.poster_path} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
