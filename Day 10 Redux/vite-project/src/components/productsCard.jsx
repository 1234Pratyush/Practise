import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";

const ProductsCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.items);

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => navigate("/cart")}
        className="fixed right-6 top-6 z-50 cursor-pointer rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Cart
      </button>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-700 shadow">
                {product.category}
              </span>
            </div>

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1">
                  <span className="text-sm text-yellow-500">★</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {product.rating}
                  </span>
                </div>
              </div>

              <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                {product.title}
              </h2>

              <p className="line-clamp-2 text-sm leading-6 text-gray-500">
                {product.description}
              </p>

              <div className="flex items-end justify-between pt-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Price
                  </p>
                  <p className="text-3xl font-extrabold text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="cursor-pointer rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsCard;
