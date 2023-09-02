import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import CheckoutForm from './components/Checkout';
import ContactForm from "./components/Contact";
import RegisterForm from "./components/Register";
import React, { useState } from "react";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
  };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <NavBar />

      <Routes>
        {/* Pass addToCart and cart as props to the Home component */}
        <Route path="/" element={<Home addToCart={addToCart} cart={cart} />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Login" element={<Login />} />
        
        {/* Pass cart and removeFromCart as props to the Cart component */}
        <Route path="/Cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />

        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
