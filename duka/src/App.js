import Home from "./components/Homepage";

function App() {

  return (
    <div className="App">
      <nav>
          <li>Home</li>
          <li>Login</li>
          <li>Cart</li>
          <li>My Orders</li>
      </nav>
      <Home/>
    </div>
  );
}

export default App;
