import { useEffect } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { setProducts } from "../redux/slices/productSlice";


export const useProducts = ()=>{
 const dispatch = useDispatch();

    useEffect(()=>{
        const getProducts = async()=>{
            try{
          const response = await axios.get("https://dummyjson.com/products");
          console.log(response.data.products);
          dispatch(setProducts(response.data.products))
            }
            catch(error){
                console.log(error.message);
            }
        };getProducts();
    },[dispatch])
}