import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export interface items{
  id:number
  price:number;
title:string;
images:string[]
}

const Products = () => {
   
    const [products,setProducts] = useState<Product[]>([])

    
      
   useEffect(()=>{
    const fetchProducts = async()=>{
        try{
         const response = await axios.get("https://dummyjson.com/products")
         setProducts(response.data.products)
         console.log(response.data.products)
        }
        catch(error){
            console.log(error.response?.data?.message);
        }
    };fetchProducts()
   },[])


  return (
    <div className="">
      {products.map((product: items) => (
        <div className="max-w-7xl mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  </div>
      ))}
    </div>
  );
}

export default Products
