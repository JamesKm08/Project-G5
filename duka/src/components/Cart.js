import React, { useState } from 'react';
import '../styles/cart.css';

function Cart({ cartItems, removeFromCart }) {
  const [removedItem, setRemovedItem] = useState(null);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    setRemovedItem(itemId);
    setTimeout(() => {
      setRemovedItem(null);
    }, 4000); // Hide the notification after 2 seconds
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {removedItem && <p>Product removed from cart</p>}
    </div>
  );
}

export default Cart;

