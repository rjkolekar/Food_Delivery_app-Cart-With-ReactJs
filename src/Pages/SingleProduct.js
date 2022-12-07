import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        // console.log(product)
      });
  }, [params._id]);

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold">Back</button>
      <div className="flex">
        <img className="border border-red-300 p-16" src={product.image} alt="Product " />
        <div className="ml-16 border border-red-300 p-10 ">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
