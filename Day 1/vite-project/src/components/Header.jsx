import React, { useContext } from "react";
import { DataContext } from "../context/CartContext";

const Header = () => {

      const data = useContext(DataContext);
      console.log(data);

  return (
    <div className="border h-20 px-10 flex items-center justify-between bg-white shadow">
      <h1 className="text-2xl font-bold text-cyan-600">ShopApp</h1>

      <div className="flex gap-8 font-medium text-gray-700">
        <p className="cursor-pointer hover:text-cyan-600">Home</p>
        <p className="cursor-pointer hover:text-cyan-600">Products</p>
        <p className="cursor-pointer hover:text-cyan-600">About</p>
      </div>

      <div className="relative cursor-pointer">
        User : <span className="font-bold text-xl"> {data}</span>
        <span
          className="absolute -top-2 -right-3 
          text-xl px-1 py-0.5 rounded-full"
        ></span>
      </div>
    </div>
  );
};

export default Header;
