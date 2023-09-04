import React, { useState, useEffect } from "react";
import './Homepage.css'

function Home({ addToCartHandler }) {
  const [products, setProducts] = useState([]);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="Home">
      {products.map((product) => (
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
            <img
              className="imagediv"
              src={product.images[1]}
              alt={product.title}
              height="200px"
            />
          </div>

          {hoveredProductId === product.id && (
            <>
              <div>
                <p className="descdiv">{product.description}</p>
              </div>

              <div>
                <h3 className="pricediv">{product.price} USD</h3>
              </div>
            </>
          )}

          <div>
            {/* Add to Cart button */}
            <button
              className="cartButton"
              onClick={() => addToCartHandler(product)} 
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
