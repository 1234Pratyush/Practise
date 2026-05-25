import { useMovieVideos } from "@/hooks/useMovieVideos";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie }) => {
  useMovieVideos(movie);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  if (!trailerVideo) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        tabIndex="-1"
        className="w-full h-full scale-[1.7] pointer-events-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0&loop=1&playlist=" +
          trailerVideo.key
        }
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
