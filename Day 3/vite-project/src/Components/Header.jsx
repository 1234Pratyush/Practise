const Header = () => {
  return (
    <div className="flex items-center justify-between px-14 py-6">
      <h1
        className="
          text-red-600
          text-6xl
          font-extrabold
          tracking-tight
          cursor-pointer
          transition-all
          duration-300
          drop-shadow-lg
        "
      >
        CINEVO
      </h1>

      <button className="border py-2 px-2 rounded cursor-pointer bg-purple-500 hover:bg-purple-600 text-white">GPT Search</button>
    </div>
  );
};

export default Header;
