import { IMG_CDN } from "@/utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
    flex-shrink-0
    min-w-[250px] md:min-w-[280px]
    rounded-2xl overflow-hidden cursor-pointer
    transition duration-300 hover:scale-105
  "
    >
      <img
        src={IMG_CDN + posterPath}
        alt="movie"
        className="w-full h-[350px] object-cover"
      />
    </div>
  );
};

export default MovieCard;
