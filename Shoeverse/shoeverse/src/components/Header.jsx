import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
 const products = useSelector((store)=>store.cart.items)

  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
          Shoe<span className="text-yellow-400">Verse</span>
        </div>

        <nav>
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
      </div>
    </header>
  );
};

export default Header;
