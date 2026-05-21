import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviesDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGE4ZGFkMzVlMzI0OTkyNzAzZmFkN2RhYjc2YTk0MCIsIm5iZiI6MTc3OTE3MTE5NS43MTgwMDAyLCJzdWIiOiI2YTBiZmY3YjhlZmY5MmNhZTE0NjZlZDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lo6C60P0EGGfoObVY1M5W2aHpjWXMk9nDZrbVmCJeqA",
            },
          },
        );

        setMovie(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
     
      <div className="absolute inset-0 bg-black/70"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
    
        <div className="w-full lg:w-[320px]">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>

        <div className="flex-1 text-white">
         
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {movie.original_title}
          </h1>

          
          <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>

            <span>📅 {movie.release_date}</span>

            <span>🎬 {movie.runtime} min</span>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-3 mb-8">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 px-4 py-2 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-3">Overview</h2>

            <p className="text-gray-300 leading-8 text-lg">{movie.overview}</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Original Language</h3>

              <p className="text-gray-300 uppercase">
                {movie.original_language}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Popularity</h3>

              <p className="text-gray-300">{movie.popularity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
