import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
   const items = useSelector((state) => state.cart.items);
   console.log(items)
   




  return (
    <div className="min-h-screen bg-zinc-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8"> Cart</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-zinc-900 text-white rounded-lg shadow-md p-4 flex items-center gap-5"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600 mt-1">${item.price}</p>

                  
                </div>

                <button className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className=" shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Total Items</span>
              <span>{items.length}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>$</span>
            </div>

            <button className="w-full bg-white text-zinc-900  py-3 rounded-lg
              transition cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
