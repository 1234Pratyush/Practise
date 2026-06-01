const ShoeCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-3xl 
          overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <div className="bg-gray-100">
        <img
          src={product.image}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>

        <p className="text-gray-500 mt-2 line-clamp-2">products.description</p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-black">{product.price}</span>

          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
