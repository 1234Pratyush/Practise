import React from "react";

export interface items {
  id: number;
  price: number;
  title: string;
  images: string[];
}

const Card = ({images,title,price}:items) => {
  return (
    <div className=" ">
      <div className="  max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Product Image */}
        <div className="relative">
          <img
            src={images}
            alt="Nike Shoes"
            className="w-full h-64 object-cover"
          />

          {/* Discount Badge */}
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            20% OFF
          </span>

          {/* Wishlist */}
          <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-100">
            ❤️
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Running Shoes
          </p>

          {/* Product Name */}
          <h2 className="text-2xl font-bold text-gray-800 mt-1">{title}</h2>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-gray-600 text-sm">(4.8)</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-3">
            Premium lightweight running shoes designed for maximum comfort and
            everyday performance.
          </p>

          {/* Price */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-indigo-600">{price}</span>
            <span className="text-lg text-gray-400 line-through">$150</span>
          </div>

          {/* Stock */}
          <p className="mt-2 text-green-600 font-medium">✔ In Stock</p>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <button className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition font-semibold">
              Add to Cart
            </button>

            <button className="px-4 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Card;
