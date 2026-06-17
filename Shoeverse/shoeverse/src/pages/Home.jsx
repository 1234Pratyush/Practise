import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner1 from "../assets/banners/banner1.jpg";
import banner2 from "../assets/banners/banner2.jpg";
import banner3 from "../assets/banners/banner3.jpg";
// import banner4 from "../assets/banners/banner4.jpg";

const banners = [banner1, banner2, banner3];

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section
        className="relative h-[90vh] bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${banners[currentBanner]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-6xl font-bold text-center">
            Shop Smart, Live Better
          </h1>

          <p className="mt-4 text-xl text-center max-w-2xl">
            Discover products from fashion, electronics,
            accessories, and more.
          </p>

          <Link to="/products">
            <button className="mt-8 px-8 py-4 bg-blue-600 rounded-full hover:bg-blue-700 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
