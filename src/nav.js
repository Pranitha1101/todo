import React from "react";
import "./nav.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Product() {
  return <h2>Product Page</h2>;
}

function Nav() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Example</h1>
        <nav className="navb">
          <Link to="/">Home</Link>  {" "}
          <Link to="/about">About</Link>  {" "}
          <Link to="/contact">Contact</Link>  {" "}
          <Link to="/product">Product</Link> 
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Nav;
