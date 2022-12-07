import React from "react";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
// import { renderIntoDocument } from "react-dom/test-utils";

const Product = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  
  const { product } = props;

  const addToCart = (event, product) => {
    event.preventDefault();
    let _cart = { ...cart }; // { items: {}}
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
    //
    // const cart = {
    //     items: {
    //         '608c2960e165f6137f02b552': 2,
    //         '608c28e8e165f6137f02b550': 3
    //     },
    //     totalItems: 5
    // }
  };

  return (

    <Link to={`/products/${product._id}`}>
      <div className="items-center justify-center ">
        <div className="border border-purple-300 shadow-lg 	">
          <div className="h-60 w-40">
            <img src={product.image} alt="Product" />
          </div>
        </div>
        <div className="">
          {/* <div></div> */}
          <div className="items-center justify-center flex">
            <h2 className="font-semibold">{product.name}</h2>
          </div>
          <div className="flex items-center justify-center font-extralight ">
            {product.size}
          </div>
          <div className="flex justify-between font-semibold ">
            {" "}
            Rs {product.price}
            <button
              onClick={(e) => {
                addToCart(e, product);
              }}
              className={`${
                isAdding ? "bg-green-500 text-black" : "bg-red-700 text-white"
              } px-4 py-1  rounded-full `}
            >
              <div>Add{isAdding ? "ed" : ""}</div>
            </button>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Product;
