import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);

 

return (
  <>
    <div className="flex justify-end px-10 mt-5">
      <button
        className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        🛒 Cart
      </button>
    </div>

    <div className="flex flex-wrap gap-8 justify-center mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 rounded-2xl overflow-hidden bg-white shadow-lg border"
        >
          <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full object-contain"
            />
          </div>

          <div className="p-4 space-y-3">
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {product.category}
            </span>

            <h2 className="text-lg font-semibold line-clamp-2">
              {product.title}
            </h2>

            <p className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between items-center">
              <span>⭐ {product.rating}</span>
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
            </div>

            <button
              className="w-full bg-black text-white py-2 rounded-xl cursor-pointer"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);
};

export default ProductCard;
