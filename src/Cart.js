import React from "react";
import { Link } from "react-router-dom";
function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (cart.length === 0) return <h2>No items in cart</h2>;
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <p key={item.id}>
          {item.name} - ₹{item.price}
        </p>
      ))}
      <h2>Total: ₹{total}</h2>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
export default Cart;
