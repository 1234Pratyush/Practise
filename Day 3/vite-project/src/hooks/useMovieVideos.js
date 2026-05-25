import { useEffect } from "react";
import { GET_OPTIONS } from "@/utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTrailerVideo } from "@/utils/moviesSlice";

export const useMovieVideos = (movie) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) return;

    const getMovieVideo = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          GET_OPTIONS,
        );

        const videos = response.data.results;

        const trailer =
          videos.find((video) => video.type === "Trailer") || videos[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.log(error.message);
      }
    };

    getMovieVideo();
  }, [movie, dispatch]);
};
