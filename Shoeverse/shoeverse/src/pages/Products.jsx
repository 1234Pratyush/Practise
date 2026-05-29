import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useProducts } from "../hooks/useProducts";
import ShoeCard from "../components/ShoeCard";


const Products = () => {
    useProducts()

   
  const [search, setSearch] = useState("");

  const products = useSelector((store) => store.products.items);
  

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );    

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Premium Footwear Collection
        </h1>

        <p className="text-gray-500 text-lg mb-8">Find your perfect pair</p>

        
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search your favorite shoes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 bg-white rounded-full py-4 px-6 pr-14 shadow-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button className="absolute right-2 top-2 bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Search
          </button>
        </div>

        <p className="mt-4 text-gray-500">
          {filteredProducts.length} Products Found
        </p>
      </div>

 
     <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ShoeCard key={product.id} product={product} />
        ))}
        </div>
     

      {filteredProducts.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-gray-600">
            No shoes found
          </h2>
        </div>
      )}
    </div>
  );
};

export default Products;
