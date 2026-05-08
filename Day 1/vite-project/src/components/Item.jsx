import React, { useEffect, useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/CartContext";

const Item = () => {

  const [data,setData] = useState(null);
  const {id} = useParams();

   const { addToCart } = useContext(DataContext);
   console.log(addToCart)


 useEffect(()=>{
        
    const getData = async()=>{
        try{
           const value = await fetch(`https://fakestoreapi.com/products/${id}`)
           const response = await value.json();
           console.log(response);
           setData(response);
        }
        catch(error){
            console.log(error.message);
        }
    };getData();


 },[id])

 if(!data){
    return <h1>

        Data is loading
    </h1>
 }
   


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" bg-white shadow-lg rounded-lg w-[700px] h-[400px] flex overflow-hidden">
       
        <div className="w-1/2">
          <img
            src={data.image}
            alt="product"
            className="w-full h-full object-cover"
          />
        </div>

      
        <div className="w-1/2 p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{data.title}</h1>

          <p className="text-gray-600">This is a sample product description.</p>

          <p className="text-xl font-semibold">{data.price}</p>

          <button className="bg-black text-white px-4 py-2 rounded cursor-pointer" onClick={()=>addToCart(data)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
