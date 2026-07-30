import  { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log("ERROR :", error.message);
      }
    };
    fetchProducts();
  }, []);

 return (
   <div className="mx-auto max-w-7xl px-8">
     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {products.map((product) => (
         <Link to={`/product/${product.id}`}>
           <Card
             key={product.id}
             image={product.images[0]}
             category={product.category}
             price={product.price}
             rating={product.rating}
             title={product.title}
             description={product.description}
           />
         </Link>
       ))}
     </div>
   </div>
 );
  ;
};

export default Products;
