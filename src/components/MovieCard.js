import React, { useState } from "react";

const MovieCard = ({ poster, movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!poster) return null;

  const handlePosterClick = () => {
    setShowDetails(true); // Show modal with movie details
  };

  const handleCloseDetails = (e) => {
    if (e.target.id === "modal-background") {
      setShowDetails(false); // Close modal if clicking outside
    }
  };

  return (
    <>
      {/* Movie Card */}
      <div
        key={movie.id}
        className="w-36 md:w-44 lg:w-56 flex-shrink-0 hover:scale-105 transform transition duration-300"
        onClick={handlePosterClick}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt={movie.title}
          className="w-full rounded-md shadow-lg cursor-pointer"
        />
      </div>

      {/* Modal for Movie Details */}
      {showDetails && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseDetails}
        >
          <div className="bg-black text-white border border-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={movie.title}
              className="h-64 w-full rounded-md mb-4"
            />

            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average}/10</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
