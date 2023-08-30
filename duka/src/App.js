import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Register/> */}
      <ContactForm />
      
    </div>
  );
}

export default App;
