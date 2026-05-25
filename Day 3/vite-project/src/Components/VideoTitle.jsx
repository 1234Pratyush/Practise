import React from "react";

const VideoTitle = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-2xl pt-40">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
        {movie.title}
      </h1>

      <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
        {movie.overview}
      </p>

      <div className="flex gap-4">
        <button
          className="bg-white text-black px-6 py-3 rounded-md cursor-pointer
         font-semibold text-lg hover:bg-gray-200 transition duration-300"
        >
          ▶ Play
        </button>

        <button
          className="bg-gray-700/70 cursor-pointer
         text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-600 transition duration-300"
        >
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
