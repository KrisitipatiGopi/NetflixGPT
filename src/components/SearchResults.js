import React from 'react';
import MoviesList from './MoviesList';

const SearchResults = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center mt-8 text-gray-500">
        Try searching for the required movies.
      </div>
    );
  }

  return (
    <div className="mt-12 w-auto">
      <MoviesList title="Search Results" movies={movies} />
    </div>
  );
};

export default SearchResults;
