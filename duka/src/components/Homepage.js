import { useState,useEffect } from "react";
import './Homepage.css'

function Home() {

  const [products, setProducts] = useState([])
    
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
console.log(products)
    return (
      <div className="Home">
        {products.map(product=>(
            <div className= "productdiv" key= {product.id}>

          
            <div>
              <h3 className="titlediv">{product.title}</h3>
            </div>

            <div>
              <img  className="imagediv"
              src = {product.images[1]} alt={product.title}/>
            </div>

            {/* <div>
              <p className="descdiv">{product.description}</p>
              </div> */}
          
            <div>
              <h3 className="pricediv">{product.price} USD</h3>
            </div>

            <div>
                <button className="cartButton">Add to Cart</button>
            </div>

          </div>
         
      ))}
      </div>
    );
  }
    
  export default Home;
  
