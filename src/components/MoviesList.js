import React from "react";
import { image_url } from "../utils/constants";
import { useSelector } from "react-redux";
import { translations } from "../utils/constants";

const MovieSection = ({ title, movies }) => {
  const selectedLanguage = useSelector((store) => store.lang?.currentLanguage)
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl text-white font-bold mb-4">{translations[selectedLanguage][title]}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map((movie) => (
          <div key={movie.id} className="w-36 md:w-44 lg:w-56 flex-shrink-0 hover:scale-105 transform transition duration-300">
            <img
              src={`${image_url}${movie.poster_path}`}
              alt={movie.title || "Movie Poster"}
              className="w-full rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
