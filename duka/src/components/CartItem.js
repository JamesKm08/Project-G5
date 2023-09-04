import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, quantity) => {
    onUpdateCartQty(lineItemId, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
  };

  // Calculate the subtotal for the item if item.line_total exists
  const subtotal = item.line_total && item.line_total.raw ? item.quantity * item.line_total.raw : 0;

  return (
    <div className="cart-item">
      {item.image && item.image.url && (
        <img className="cart-item__image" src={item.image.url} alt={item.name} />
      )}
      <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
          <button
            type="button"
            onClick={() =>
              item.quantity > 1
                ? handleUpdateCartQty(item.id, item.quantity - 1)
                : handleRemoveFromCart()
            }
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
        {item.line_total && item.line_total.formatted_with_symbol ? (
          <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
        ) : null}
        {/* Display the subtotal for the item */}
        <div className="cart-item__details-subtotal">Subtotal: {subtotal} USD</div>
      </div>
      <button
        type="button"
        className="cart-item__remove"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  onUpdateCartQty: PropTypes.func,
  onRemoveFromCart: PropTypes.func,
};

export default CartItem;
