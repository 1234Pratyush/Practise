import MovieList from './MovieList'
import { useSelector } from "react-redux";
import { useTrendingMovies } from '@/hooks/useTrendingMovies';
import { useUpcomingMovies } from '@/hooks/useUpcomingMovies';
import { useTopRatedMovies } from '@/hooks/useTopRatedMovies';


const SecondaryContainer = () => {

const movies = useSelector((store) => store.movies);
useTrendingMovies();
useUpcomingMovies();
useTopRatedMovies();
   
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

      {/* {
      
        popular ,trending videos ,now playing 
        horixontal rows of cards
      
      } */}
    </div>
  );
}

export default SecondaryContainer
