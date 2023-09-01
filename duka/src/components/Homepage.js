import { useState,useEffect } from "react";
import './Homepage.css'

function Home({ product, addToCart }) {

  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(products);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 4000); // Hide the notification after 2 seconds
  };

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
<<<<<<< HEAD
=======
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
>>>>>>> 16dea5a1fcf01648a809234971d8d50db1fbd9c9

  return (
    <div className="Home">
      {products.map(product => (
        <div
          className="productdiv"
          key={product.id}
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          <div>
            <h3 className="titlediv">{product.title}</h3>
          </div>

          <div>
            <img className="imagediv" src={product.images[1]} alt={product.title} height= "200px"/>
          </div>

          {hoveredProductId === product.id && (
            <>
            <div>
              <p className="descdiv">{product.description}</p>
            </div>
          
          <div>
            <h3 className="pricediv">{product.price} USD</h3>
          </div>
          </>)}

          <div>
            <button className="cartButton" onClick={handleAddToCart}>Add to Cart</button>
            {addedToCart && <p>Product added to cart</p>}
          </div>
        </div>
      ))}
<<<<<<< HEAD
    </div>
  );
}

export default Home;
=======

      </div>
    );
  }
    
  export default Home;
  
>>>>>>> 16dea5a1fcf01648a809234971d8d50db1fbd9c9
