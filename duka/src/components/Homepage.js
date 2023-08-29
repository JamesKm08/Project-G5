import { useState,useEffect } from "react";

function Home() {

  const [products, setProducts] = useState([])
    
  useEffect(() =>{
      fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => setProducts(data),[])
  })

    return (
      <div className="Home">
        {products.map(product=>(
          <div key= {product.id}>
          <img src = {product.images[2]} alt={product.title}/>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price} Ksh</p>
          </div>
          
      
      ))}
      </div>
    );
  }
    
  export default Home;
  