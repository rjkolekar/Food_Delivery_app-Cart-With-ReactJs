import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Navigation from "./Components/Navigation";
import { CartContext } from "./CartContext";
// import Admin from "./Components/Admin";

const App = () => {
  const [cart, setCart] = useState({});

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            {/* <Route path="/about" element={About}></Route> */}
            <Route path="/products" element={<ProductPage />}></Route>
            <Route exact path="/products/:_id" element={<SingleProduct />}></Route>
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
