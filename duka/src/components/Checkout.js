import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = () => {
const { register, handleSubmit, errors } = useForm();

const onSubmit = (data) => {
    console.log(data); // Simulate a successful submission
};

return (
    <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
<h2>Checkout</h2>
    <div>
        <label>Name</label>
        <input type="text" name="name" ref={register({ required: true })} />
        {errors.name && <span className="error">Name is required</span>}
    </div>
    <div>
        <label>Email</label>
        <input
        type="email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span className="error">Enter a valid email</span>}
    </div>
    <div>
        <label>Shipping Address</label>
        <textarea name="address" ref={register({ required: true })} />
        {errors.address && <span className="error">Address is required</span>}
    </div>
    <div>
        <label>Credit Card Number</label>
        <input type="text" name="creditCard" ref={register({ required: true })} />
        {errors.creditCard && <span className="error">Credit card is required</span>}
    </div>
    <button type="submit">Place Order</button>
    </form>
);
};

export default CheckoutForm;
