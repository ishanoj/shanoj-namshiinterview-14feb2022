import React from "react";

const Cart= ({ cartItems }) => {
    return (
    <div className="cart-items">
        <div className="cart-header">My Cart</div>

        {cartItems.lenght === 0 && (
        <div className="cart-empty">Cart is empty</div>
        )}
    </div>
    );
};

export default Cart;