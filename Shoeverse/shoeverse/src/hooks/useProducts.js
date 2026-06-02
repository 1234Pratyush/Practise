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

    }
    catch(error){
        console.error(error.message);
        
    }
  };getProducts()
    },[dispatch])
}
 

export default useProducts