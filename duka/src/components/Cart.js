import React, { useState } from 'react';
import '../styles/cart.css';

function Cart({ cartItems, removeFromCart }) {
  const [removedItem, setRemovedItem] = useState({});

  const handleRemoveFromCart = (itemId) => {
        setRemovedItem((prevRemovedItem) => ({
      ...prevRemovedItem,
      [itemId]: true,
    }));

        setTimeout(() => {
      setRemovedItem((prevRemovedItems) => ({
        ...prevRemovedItems,
        [itemId]: false,
      }));
          removeFromCart(itemId);
    }, 4000);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              {removedItem[item.id] && <p>Product removed from cart</p>}
            </li>
          ))
        ) : (
          <li>Your cart is empty</li>
        )}
      </ul>
    </div>
  );
}

export default Cart;
