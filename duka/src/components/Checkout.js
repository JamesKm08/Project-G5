import React, { useState } from 'react';

const CheckoutForm = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    creditCard: '',
});

const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission and generate receipt
    const orderReceipt = {
      orderID: Math.floor(Math.random() * 100000),
    ...formData,
    };
    console.log('Order Receipt:', orderReceipt);
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
    ...prevData,
    [name]: value,
    
}));
};

return (
    <div className="checkout-form-container">
    <h2>Checkout</h2>
    <form className="checkout-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        />

        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />

        <label htmlFor="address">Shipping Address</label>
        <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        />

        <label htmlFor="creditCard">Credit Card Number</label>
        <input
        type="text"
        id="creditCard"
        name="creditCard"
        value={formData.creditCard}
        onChange={handleChange}
        required
        />

        <button type="submit">Place Order</button>
    </form>
    </div>
);
};

export default CheckoutForm;
