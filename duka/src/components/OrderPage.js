import React from 'react';
import OrderList from './OrderList';

const orders = [
    { id: 1, date: '2023-08-28', total: 150.0},
    { id: 2, date: '2023-08-29', total: 300.0},
];

const OrderPage = () => {
  return (
    <div className="order-page">
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderPage;