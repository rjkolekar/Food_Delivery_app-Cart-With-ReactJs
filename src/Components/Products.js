import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <div className="container mx-auto pb-24 items-center justify-between">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-2 my-8 gap-24 lg:grid-cols-5">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
