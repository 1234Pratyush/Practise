import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const products = useSelector((store) => store.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
            Cart<span className="text-yellow-400">Verse</span>
          </div>

        
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-lg font-medium">
              <Link to="/home">
                <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
                  Home
                </li>
              </Link>

              <Link to="/products">
                <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
                  All Products
                </li>
              </Link>

              <Link to="/cart">
                <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
                  Cart (<span>{products.length}</span>)
                </li>
              </Link>

              <Link to="/contact">
                <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>

      
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <Link to="/home" onClick={() => setIsOpen(false)}>
                <li className="hover:text-yellow-400 transition duration-300">
                  Home
                </li>
              </Link>

              <Link to="/products" onClick={() => setIsOpen(false)}>
                <li className="hover:text-yellow-400 transition duration-300">
                  All Products
                </li>
              </Link>

              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <li className="hover:text-yellow-400 transition duration-300">
                  Cart (<span>{products.length}</span>)
                </li>
              </Link>

              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <li className="hover:text-yellow-400 transition duration-300">
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
