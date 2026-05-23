import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {

   const movies = useSelector((store)=>store.movies.nowPlayingMovies);
   const firstMovie = movies?.[0]
   console.log(firstMovie);
    
  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${firstMovie?.backdrop_path}`}
        alt="Movie Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Jurassic World
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
          A thrilling adventure where dinosaurs once again rule the earth.
          Action, suspense, and survival come together in this epic blockbuster.
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition duration-300">
            ▶ Play
          </button>

          <button className="flex items-center gap-2 bg-gray-700/70 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-600 transition duration-300">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
