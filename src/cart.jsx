import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './cart.css';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  return (
    <div className="cart-container">
      <h2>🛍️ Your Subscribed Books</h2>
      {cart.length === 0 ? (
        <p>No books in your cart yet.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((book, index) => (
            <div className="cart-item" key={index}>
              <img src={book.image} alt={book.title} />
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                {/* <p>Price: ₹{book.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="back-home" onClick={() => navigate('/home')}>← Back to Store</button>
    </div>
  );
};

export default Cart;
