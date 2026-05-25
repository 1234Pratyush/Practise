import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <VideoBackground movie={mainMovie} />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0"></div>

      {/* Title Section */}
      <div className="relative z-10">
        <VideoTitle movie={mainMovie} />
      </div>
    </div>
  );
};

export default MainContainer;
