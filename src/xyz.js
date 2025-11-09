import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/product">Product</Link> |{" "}
        <Link to="/cart">Cart {cart.length}</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Welcome to Book Store</h2>
      <p>Find your favorite books here!</p>
      <Link to="/product">Go to Products</Link>
    </div>
  );
}

export default Home;
import React from "react";

const books = [
  { id: 1, name: "A", price: 350 },
  { id: 2, name: "B", price: 350 },
  { id: 3, name: "C", price: 350 },
];

function Product({ cart, setCart }) {
  const add = (book) => {
    setCart([...cart, book]);
  };

  return (
    <div>
      <h2>📚 Books</h2>
      {books.map((book) => (
        <div key={book.id}>
          {book.name} - ₹{book.price}
          <br />
          <button onClick={() => add(book)}>Add to Cart</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Product;
import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) return <h2>No items in cart</h2>;

  return (
    <div>
      <h2>🛒 Cart</h2>
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
