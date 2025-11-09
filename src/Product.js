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
