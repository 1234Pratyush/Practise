import CartAnimation from "../components/CartAnimation";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const handleClearCart = () => {

     dispatch(clearCart())
  };
  
  
  const products = useSelector((store) => store.cart.items);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800">Shopping Cart</h1>

        <button
          onClick={handleClearCart}
          className="cursor-pointer bg-red-500 hover:bg-red-600
          text-white font-semibold px-8 py-3 rounded-xl
          shadow-lg transition-all duration-300"
        >
          Clear Cart
        </button>
      </div>

      
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="w-80">
            <CartAnimation />
          </div>

          <h2 className="text-3xl font-bold text-slate-700 mt-4">
            Your Cart is Empty
          </h2>

          <p className="text-slate-500 mt-2">
            Add some amazing products to your cart.
          </p>
        </div>
      ) : (
        <>
      
          <div className="max-w-7xl mx-auto mb-6">
            <p className="text-lg font-medium text-slate-600">
              {products.length} Items in Cart
            </p>
          </div>

    
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-lg
                hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 overflow-hidden"
              >
                <div className="bg-slate-50 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-contain"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-bold text-lg text-slate-800 line-clamp-2 min-h-[56px]">
                    {product.title}
                  </h2>

                  <div className="flex justify-between items-center mt-5">
                    <span className="text-3xl font-bold text-blue-600">
                      ${product.price}
                    </span>

                    <button
                      className="bg-black hover:bg-slate-800
                      text-white px-5 py-2 rounded-xl
                      transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
