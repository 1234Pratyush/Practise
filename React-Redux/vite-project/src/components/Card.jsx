const Card = ({ image, category, title, description, price, rating }) => {
  return (
    <div className="cursor-pointer group flex h-[520px] flex-col overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-800 shadow-lg transition-all duration-300 hover:border-violet-500 hover:shadow-violet-500/20">
      <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-b-3xl bg-gradient-to-b from-zinc-900 to-zinc-800 p-8">
        <img
          src={image}
          alt={title}
          className="h-40 object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute left-5 top-5 rounded-full bg-violet-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
          {category}
        </span>

        <button className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/80 text-xl backdrop-blur">
          🤍
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="line-clamp-2 min-h-[64px] text-xl font-bold leading-8 text-white">
          {title}
        </h2>

        <p className="mt-3 line-clamp-2 min-h-[52px] text-sm leading-6 text-zinc-400">
          {description}
        </p>

        <div className="mt-5 flex items-end justify-end">
          <span className="rounded-full bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-300">
            ⭐ {rating}
          </span>
        </div>

        <div className="my-6 h-px bg-zinc-700"></div>

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[4px] text-zinc-500">
              PRICE
            </p>

            <div className="mt-1 flex items-end gap-1">
              <span className="pb-1 text-lg font-semibold text-violet-400">
                $
              </span>

              <span className="text-4xl font-extrabold text-white">
                {price}
              </span>
            </div>
          </div>

          <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:from-violet-500 hover:to-purple-500">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
