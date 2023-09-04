import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import CheckoutForm from './components/Checkout';
import ContactForm from "./components/Contact";
import RegisterForm from "./components/Register";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCartHandler = (product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const updatedCart = [
        ...cartItems,
        {
          id: product.id,
          name: product.name,
          quantity: 1,
          line_total: product.line_total,
          image: product.image,
        },
      ];
      setCartItems(updatedCart);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Function to empty the cart
  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home addToCartHandler={addToCartHandler} />}
          />
          <Route path="/Register" element={<RegisterForm />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Cart"
            element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} onEmptyCart={emptyCart} />}
          />

          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;