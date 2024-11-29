import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popular = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const upComing = useSelector((store) => store.movies?.upComingMovies);
  return (
    <div className='bg-black text-white'>
      <MoviesList title={"nowPlaying"} movies={nowPlaying}/>
      <MoviesList title={"popular"} movies={popular}/>
      <MoviesList title={"topRated"} movies={topRated}/>
      <MoviesList title={"upComing"} movies={upComing}/>
    </div>
  )
}

export default MainContainer