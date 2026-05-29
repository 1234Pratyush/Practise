import {useDispatch} from 'react-redux'
import { setProduct } from '../redux/slices/productSlice';
import { useEffect } from 'react';
import axios from 'axios';

 
export const useProducts = ()=>{

  const dispatch = useDispatch();

    useEffect(()=>{

  const getProducts = async()=>{

    try{
  const products = await axios.get('https://fakestoreapi.com/products')
  dispatch(setProduct(products));
  console.log(products)
    }
    catch(error){
        console.log(error.message);
    }
  };getProducts()
    },[dispatch])
}
 