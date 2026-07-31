import { useEffect } from "react"
import axios  from 'axios';
import { PRODUCT_API } from "../utils/constant";
import {useDispatch} from 'react-redux'
import { setProduct } from "../redux/slices/productSlice";


export const useProducts = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        const getProducts = async()=>{
            try{
            const products = await axios.get(PRODUCT_API)
            console.log(products.data)
            dispatch(setProduct(products.data));
            }
            catch(error){
                console.log("ERROR",error.message);
            }
        };getProducts();
    },[dispatch])
}

