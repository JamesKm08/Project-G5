import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>Order ID:</strong> {order.id}<br />
            <strong>Date:</strong> {order.date}<br />
            <strong>Total:</strong> ${order.total}<br />
            <strong>Status:</strong> {order.status}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;