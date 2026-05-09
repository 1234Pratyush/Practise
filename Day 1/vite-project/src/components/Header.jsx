import React, { useContext } from "react";
import { DataContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {

      const data = useContext(DataContext);
      const {cart} = useContext(DataContext);
      

     
      

  return (
    <div className="border h-20 px-10 flex items-center justify-between bg-white shadow">
      <h1 className="text-2xl font-bold text-cyan-600">ShopApp</h1>

      <div className="flex gap-8 font-medium text-gray-700">
        <p className="cursor-pointer hover:text-cyan-600">Home</p>
        <p className="cursor-pointer hover:text-cyan-600">Products</p>
        <p className="cursor-pointer hover:text-cyan-600">About</p>
        <p className="cursor-pointer hover:text-cyan-600">{data.name}</p>
        <p className="cursor-pointer hover:text-cyan-600">{data.age}</p>
      </div>

      <div className="relative cursor-pointer flex items-center gap-6">
         <span className="font-bold"> {data.name}</span>
        <span
          className="absolute -top-2 -right-3 
          text-xl px-1 py-0.5 rounded-full"
        ></span>
        {"    "}
        <Link to="/cart">
          <span className="font-bold text-xl">🛒 <span>{cart.length}</span></span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
