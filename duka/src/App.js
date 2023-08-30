import Home from "./components/Homepage";
import Login from "./components/Login";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {

  return (
    <>
<div className="App">
      
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    
  </div>
    </>
  );   
}

export default App;
