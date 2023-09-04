import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemoveFromCart, onEmptyCart, onUpdateCartQty }) => {
  const handleEmptyCart = () => {
    onEmptyCart();
  };

  const renderEmptyMessage = () => {
    if (!cartItems || cartItems.length === 0) {
      return (
        <p className="cart__none">
          You have no items in your shopping cart, start adding some!
        </p>
      );
    }
    return null;
  };
  const renderItems = () => {
    return cartItems.map((item, index) => (
      <CartItem
        item={item}
        onUpdateCartQty={onUpdateCartQty}
        onRemoveFromCart={onRemoveFromCart}
        key={`${item.id}-${index}`}
      />
    ));
  };
  

  const renderTotal = () => {
    if (!cartItems || cartItems.length === 0) {
      return null;
    }

    const total = cartItems.reduce((acc, item) => {
      if (item.line_total && item.line_total.raw) {
        return acc + item.line_total.raw;
      }
      return acc;
    }, 0);

    return (
      <div className="cart__total">
        <p className="cart__total-title">Subtotal:</p>
        <p className="cart__total-price">{total} USD</p>
      </div>
    );
  };

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      {renderEmptyMessage()}
      {renderItems()}
      {renderTotal()}
      <div className="cart__footer">
        <button className="cart__btn-empty" onClick={handleEmptyCart}>Empty cart</button>
        <button className="cart__btn-checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.array,
  onRemoveFromCart: PropTypes.func,
  onUpdateCartQty: PropTypes.func,
  onEmptyCart: PropTypes.func,
};