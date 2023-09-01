import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Cart from './components/Cart';
import CheckoutForm from './components/Checkout';
import ContactForm from "./components/Contact";
import RegisterForm from "./components/Register";

function App() {

  return (
    <>
<div className="App">    
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Register" element={<RegisterForm />} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/checkout" element={<CheckoutForm/>}/> 
      <Route path="/Contact" element={<ContactForm/>}/>
      <Route path="/Register" element={<RegisterForm/>}/>
    </Routes>
    
  </div>
    </>
  );   

}

export default App;
