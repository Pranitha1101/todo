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
