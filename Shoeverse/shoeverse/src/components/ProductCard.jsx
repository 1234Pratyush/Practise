import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = ({ product }) => {

 
const dispatch = useDispatch();

const handleAddToCart = ()=>{
     dispatch(addToCart(product))
     console.log("Item added to cart")
}

  const shortTitle =
    product.title.length > 35
      ? product.title.substring(0, 35) + "..."
      : product.title;

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden
      shadow-lg hover:shadow-2xl hover:-translate-y-2
      transition-all duration-300 flex flex-col"
    >
      <div className="bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-56 object-contain hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 min-h-[56px]">
          {shortTitle}
        </h2>

        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-extrabold text-blue-600">
            ${product.price}
          </span>
        </div>

        <div className="flex gap-3 mt-6 ">
          <button
            className="flex-1 bg-black text-white py-3 rounded-xl
            hover:bg-gray-800 transition font-semibold cursor-pointer"
          >
            View
          </button>

          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl
            hover:bg-blue-700 transition font-semibold cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
