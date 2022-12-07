import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import ProductPage from "./Pages/ProductPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import { CartContext } from "./CartContext";
// import { getByPlaceholderText } from "@testing-library/react";
// import Admin from "./Components/Admin";
// import { getCart,storeCart } from './helpers'

const App = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
    // console.log(JSON.parse(cart))
  }, []);

 
  useEffect(() => {
    if(!! cart ){
    window.localStorage.setItem("cart", JSON.stringify(cart))};
  }, [cart]);

 
  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            {/* <Route path="/about" element={About}></Route> */}
            {/* <Route path="/products" element={<ProductPage />}></Route> */}
            <Route
              exact
              path="/products/:_id"
              element={<SingleProduct />}
            ></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            {/* <Route path="/admin" element={<Admin />}></Route> */}
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
