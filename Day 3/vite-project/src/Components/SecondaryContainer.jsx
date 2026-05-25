import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
    
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />

      {/* {
      
        popular ,trending videos ,now playing 
        horixontal rows of cards
      
      } */}
    </div>
  );
}

export default SecondaryContainer
