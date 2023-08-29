import Home from "./components/Homepage";
import Login from "./components/Login";


function App() {

  return (
    <div className="App">
      <nav>
          <li>Home</li>
          <li>Login</li>
          <li>Cart</li>
          <li>My Orders</li>
      </nav>
      <Login/>
      <Home/>
    </div>
  );
}

export default App;
