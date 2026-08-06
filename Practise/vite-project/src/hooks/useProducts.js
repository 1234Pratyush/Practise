import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/slice/productSlice";

export const useProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
         
        dispatch(setProduct(response.data.products));

      
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, [dispatch]);
};
