import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
    
export const DataContext =createContext();
const username = "coalition";
const password = "skills-test";
const auth = btoa(`${username}:${password}`);

const CartContext = (props) => {

const [data,setData] = useState([]);
const [cart,setCart] = useState([]);

 const [increment,setIncrement] = useState(0);

 const addValue = ()=>{
     setIncrement(increment + 1);
 }

 useEffect(()=>{
 const getData = async()=>{
  try{
        const result = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",{

             headers: {
        Authorization: `Basic ${auth}`,
             }  
          }
        );
        console.log(result.data);
        setData(result.data);
    }
    catch(error){
      console.log(error.message);
    }
  };getData();

  },[])

  const addToCart = (product)=>{
setCart((prev)=>[...prev,product])
  }

  const removeFromCart = (id)=>{
          const filterData = cart.filter((item)=>item.id !== id);
          setCart(filterData)
  }


  return (
    <DataContext.Provider
      value={{ data, cart, addToCart, removeFromCart, addValue, increment }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default CartContext
