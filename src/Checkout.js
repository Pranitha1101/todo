import React from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🧾 Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button onClick={() => window.print()}>Print Invoice</button>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Checkout;
