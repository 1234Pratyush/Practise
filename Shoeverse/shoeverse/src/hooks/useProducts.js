import {useDispatch} from 'react-redux'
import { setProduct } from '../redux/slices/productSlice';
import { useEffect } from 'react';
import axios from 'axios';
import {SHOES_API} from '../utils/constants'

  const useProducts = ()=>{

  const dispatch = useDispatch();

    useEffect(()=>{

  const getProducts = async()=>{

    try{
  const products = await axios.get(SHOES_API);
  dispatch(setProduct(products.data));
  console.log(products.data,"Data fro hook ")
    }
    catch(error){
        console.log(error.message);
    }
  };getProducts()
    },[dispatch])
}
 

export default useProducts