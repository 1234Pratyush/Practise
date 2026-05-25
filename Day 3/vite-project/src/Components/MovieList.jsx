import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null);

  if (!movies) return null;

  return (
    <div className="relative bg-black px-6 py-8">
      <h1 className="text-white text-3xl font-bold mb-6">{title}</h1>

      <div
        ref={sliderRef}
        className="
    flex gap-5
    overflow-x-scroll
    overflow-y-hidden
    scroll-smooth
    no-scrollbar
    pb-3
    whitespace-nowrap
  "
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
