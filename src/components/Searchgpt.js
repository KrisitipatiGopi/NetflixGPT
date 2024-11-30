import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { api_options, translations } from '../utils/constants';
import { addSearchMovies } from '../utils/movieSlice';
import SearchResults from './SearchResults';

const Searchgpt = () => {
    const selectedLanguage = useSelector((store) => store.lang?.currentLanguage);
    const showGPT = useSelector((store) => store.gpt?.showGptSearch);
    const searchText = useRef();
    const dispatch = useDispatch();
    const moviesSearchList = useSelector((store) => store.movies?.searchedMovies)

    const handleGPT = async(e) => {
      e.preventDefault();
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}`, api_options);
      const json = await data.json();
      dispatch(addSearchMovies(json.results));
    }

  return (
    <div className="flex flex-col justify-center items-center mt-32 bg-gray-50">
      <div className="flex justify-center font-bold space-x-4 bg-black p-4 rounded-lg">
        <input 
          ref={searchText}
          type="text" 
          placeholder={translations[selectedLanguage].whatToWatch} 
          className="px-4 py-2 border rounded-md w-36 md:w-96 focus:outline-none focus:ring-2 text-black"
        />
        <button className="px-4 py-2 bg-transparent border border-white text-white rounded-md transition duration-200" onClick={handleGPT}>
          {translations[selectedLanguage].search}
        </button>
      </div>
      <div className='w-full'>
        <SearchResults movies={moviesSearchList}/>
      </div>
    </div>
  );
}

export default Searchgpt;
