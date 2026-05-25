import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[3];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <VideoBackground movie={mainMovie} />

      <div className="absolute inset-0 bg-black/10 z-0"></div>

    
      <div className="absolute inset-0 from-black via-black/40 to-transparent z-0"></div>


      <div className="relative z-10">
        <VideoTitle movie={mainMovie} />
      </div>
    </div>
  );
};

export default MainContainer;
