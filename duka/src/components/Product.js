import React, { useState } from 'react';
import '../styles/product.css';

function Product({ product, addToCart }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 4000); // Hide the notification after 2 seconds
  };

  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {addedToCart && <p>Product added to cart</p>}
    </div>
  );
}

export default Product;
