

import { Link } from "react-router-dom";
import {useProducts} from '../hooks/useProducts.js'

const Home = () => {
    useProducts()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
        <div className="max-w-4xl text-center text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-gray-400">
            Welcome to ShopVerse
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Everything You Need,
            <span className="block text-gray-400">All in One Place.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Discover amazing products, explore the latest collections, and find
            everything you need at prices you'll love.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/products">
              <button className="cursor-pointer rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-gray-200">
                Shop Now
              </button>
            </Link>

            <button className="rounded-xl border border-gray-600 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Explore
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Shop by Category
            </h2>

            <p className="mt-3 text-gray-500">
              Find products from your favorite categories.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Electronics", "Beauty", "Fashion", "Home & Living"].map(
              (category) => (
                <div
                  key={category}
                  className="group cursor-pointer rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl transition group-hover:bg-black group-hover:text-white">
                    +
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {category}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Explore our collection
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black px-8 py-16 text-center text-white md:px-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
            New Collection
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Upgrade Your Lifestyle
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Browse our latest products and discover something you'll love.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-gray-200">
            View Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
