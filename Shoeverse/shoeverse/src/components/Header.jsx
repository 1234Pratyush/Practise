import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
          Shoe<span className="text-yellow-400">Verse</span>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex items-center gap-8 text-lg font-medium">
            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              All Products
            </li>

            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              Cart
            </li>

            <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
