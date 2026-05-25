import { IMG_CDN } from "@/utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div
      className="
    min-w-[250px] md:min-w-[280px]
    rounded-md overflow-hidden cursor-pointer
    transition duration-300 hover:scale-105
  "
    >
      <img
        src={IMG_CDN + posterPath}
        alt="movie"
        className="w-full h-[150px] object-cover"
      />
    </div>
  );
};

export default MovieCard;
