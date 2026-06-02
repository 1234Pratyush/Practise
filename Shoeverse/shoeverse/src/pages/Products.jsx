import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  useProducts();

  const products = useSelector((store) => store.products.items) || [];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Premium  Collection
        </h1>

        <p className="text-gray-500 text-lg mb-8">Find your perfect pair</p>

        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full border border-gray-300 bg-white rounded-full py-4 px-6 pr-14 shadow-md focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button className="absolute right-2 top-2 bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
