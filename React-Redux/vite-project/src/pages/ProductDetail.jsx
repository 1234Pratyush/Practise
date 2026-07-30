import { useParams } from "react-router-dom";
import axios from "axios";
import {  useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        console.log(response.data);

        setProductDetails(response.data);
      } catch (error) {
        console.log("ERROR", error.message);
      }
    };
    getProductDetails();
  }, [id]);

  return (
    <div className="min-h-screen bg-zinc-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex h-[550px] items-center justify-center rounded-3xl bg-zinc-800 p-10">
              <img
                src={productDetails.images?.[0]}
                alt=""
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

        

          <div className="space-y-6">
            <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold uppercase">
              {productDetails.category}
            </span>

            <h1 className="text-5xl font-bold leading-tight">
              {productDetails.title}
            </h1>

         

            <div className="flex items-center gap-3">
              <span className="text-zinc-400">⭐ {productDetails.rating}</span>
            </div>

       

            <div>
              <p className="text-sm uppercase tracking-[5px] text-zinc-500">
                Price
              </p>

              <h2 className="mt-2 text-6xl font-bold text-violet-400">
                {productDetails.price}
              </h2>
            </div>

     

            <div className="inline-block rounded-full bg-green-600 px-4 py-2 font-semibold">
              {productDetails.availabilityStatus}
            </div>

        

            <div>
              <h3 className="mb-2 text-xl font-semibold">Description</h3>

              <p className="leading-8 text-zinc-400">
                {productDetails.description}
              </p>
            </div>

         

            <div>
              <h3 className="mb-3 text-lg font-semibold">Quantity</h3>

              <div className="flex w-fit items-center rounded-xl border border-zinc-700">
                <button className="px-5 py-3 text-xl">-</button>

                <span className="border-x border-zinc-700 px-8 py-3">1</span>

                <button className="px-5 py-3 text-xl">+</button>
              </div>
            </div>


            <div className="flex gap-5">
              <button className="rounded-2xl bg-violet-600 px-10 py-4 font-semibold transition hover:bg-violet-500">
                Add to Cart
              </button>

              <button className="rounded-2xl border border-zinc-600 bg-zinc-800 px-10 py-4 font-semibold transition hover:bg-zinc-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="my-14 h-px bg-zinc-700"></div>

        <div>
          <h2 className="mb-8 text-3xl font-bold">Product Information</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-zinc-800 p-6">
              <p className="text-sm text-zinc-400">Brand</p>

              <h3 className="mt-2 text-xl font-semibold">
                {productDetails.brand}
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-800 p-6">
              <p className="text-sm text-zinc-400">Category</p>

              <h3 className="mt-2 text-xl font-semibold">
                {productDetails.category}
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-800 p-6">
              <p className="text-sm text-zinc-400">SKU</p>

              <h3 className="mt-2 text-xl font-semibold">
                {productDetails.brand}
              </h3>
            </div>

            <div className="rounded-2xl bg-zinc-800 p-6">
              <p className="text-sm text-zinc-400">Warranty</p>

              <h3 className="mt-2 text-xl font-semibold">
                {productDetails.warrantyInformation}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
