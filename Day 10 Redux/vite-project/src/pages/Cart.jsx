import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center gap-6 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                {/* Product Image */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
                  <img
                    src={cartItem.images[0]}
                    alt={cartItem.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                    {cartItem.brand}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-gray-800">
                    {cartItem.title}
                  </h2>

                  <p className="mt-2 text-xl font-bold text-gray-900">
                    ${cartItem.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                    -
                  </button>

                  <span className="font-semibold">1</span>

                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
                    +
                  </button>
                </div>

                {/* Remove */}
                <button className="rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-end">
            <div className="w-full rounded-xl bg-white p-6 shadow-sm sm:w-96">
              <h2 className="text-xl font-bold text-gray-800">Cart Summary</h2>

              <div className="my-4 border-t border-gray-200" />

              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="mt-3 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>
                  $
                  {cartItems
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </div>

              <button className="mt-6 w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
