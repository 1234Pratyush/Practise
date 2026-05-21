import Header from "./Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MoviesDetails from "./MoviesDetails";
import { GET_OPTIONS } from "./utils/constants";



const Movies = () => {

    const navigate = useNavigate();

    const [movies,setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            GET_OPTIONS,
          );
    
          console.log(response.data.results,"Now playing data ");
          setMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchMovies();
    }, []);


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-[1500px] mx-auto px-6 py-8">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-10">Popular Movies</h1>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-[320px] bg-white rounded-2xl shadow-md border h-fit overflow-hidden">
            {/* Sort */}
            <div className="p-5 border-b">
              <div className="flex items-center justify-between cursor-pointer">
                <h2 className="text-2xl font-semibold">Sort</h2>
                <span className="text-3xl">{">"}</span>
              </div>
            </div>

            {/* Where To Watch */}
            <div className="p-5 border-b">
              <div className="flex items-center justify-between cursor-pointer">
                <h2 className="text-2xl font-semibold">Where To Watch</h2>

                <div className="flex items-center gap-3">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                    82
                  </span>

                  <span className="text-3xl">{">"}</span>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-8 cursor-pointer">
                <h2 className="text-2xl font-semibold">Filters</h2>
                <span className="text-3xl">⌄</span>
              </div>

              {/* Show Me */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium mb-5">Show Me</h3>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 text-lg cursor-pointer">
                    <input
                      type="radio"
                      name="movies"
                      defaultChecked
                      className="w-5 h-5"
                    />
                    Everything
                  </label>

                  <label className="flex items-center gap-3 text-lg cursor-pointer">
                    <input type="radio" name="movies" className="w-5 h-5" />
                    Movies I Haven't Seen
                  </label>

                  <label className="flex items-center gap-3 text-lg cursor-pointer">
                    <input type="radio" name="movies" className="w-5 h-5" />
                    Movies I Have Seen
                  </label>
                </div>
              </div>

              {/* Availability */}
              <div className="border-b py-6">
                <h3 className="text-xl font-medium mb-5">Availabilities</h3>

                <label className="flex items-center gap-3 text-lg cursor-pointer">
                  <input type="checkbox" className="w-5 h-5" />
                  Search all availabilities?
                </label>
              </div>

              {/* Release Dates */}
              <div className="py-6">
                <h3 className="text-xl font-medium mb-5">Release Dates</h3>

                <label className="flex items-center gap-3 text-lg mb-6 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                  Search all releases?
                </label>

                {/* From */}
                <div className="mb-5">
                  <p className="mb-2 text-gray-600">from</p>

                  <div className="flex items-center border rounded-xl overflow-hidden bg-white">
                    <input
                      type="text"
                      placeholder="undefined"
                      className="w-full px-4 py-3 outline-none"
                    />

                    <button className="px-4 py-3 border-l text-xl">📅</button>
                  </div>
                </div>

                {/* To */}
                <div>
                  <p className="mb-2 text-gray-600">to</p>

                  <div className="flex items-center border rounded-xl overflow-hidden bg-white">
                    <input
                      type="text"
                      placeholder="undefined"
                      className="w-full px-4 py-3 outline-none"
                    />

                    <button className="px-4 py-3 border-l text-xl">📅</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => navigate(`/MoviesDetails/${movie.id}`)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:scale-105 duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="h-95 w-full object-cover"
                  />

                  {/* Three Dots */}
                  {/* <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full text-2xl flex items-center justify-center">
                    ⋯
                  </button> */}
                </div>

                {/* Movie Details */}
                <div className="p-4">
                  <h2 className="font-bold text-xl line-clamp-2">
                    {movie.original_title}
                  </h2>

                  <p className="text-gray-600 mt-2 text-lg">
                    {movie.release_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
