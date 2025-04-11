import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const mockBooks = [
  {
    id: 1,
    title: "Higher Engineering Mathematics",
    author: "B.S. Grewal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN05s98Po882PLNtqYo_xddt784owcGLvG9Q&s",
  },
  {
    id: 2,
    title: "Engineering Chemistry",
    author: "P.C. Jain and M. Jain",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzISaKuOTpBG6mQi9QrYs2nx0KX5MQr4Oq5Q&s",
  },
  {
    id: 3,
    title: " Problem solving and Program Design in C 7th Edition",
    author: "Jeri R. Hanly and Elliot B. Koffman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiinYHxRrDSAVjQwAhT1BmNS8XH_ldMfsZwQ&s",
  },
  {
    id: 4,
    title: "Basic Electrical Engineering",
    author: "D.P. Kothari and I.J. Nagrath",
    image:
      "https://m.media-amazon.com/images/I/71jsy2yEHwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: " Engineering Drawing",
    author: "N.D. Bhatt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNilwOPkyBlsNzoo4OXeklUk-PHexReEeCmw&s",
  },
  {
    id: 6,
    title: " A Text book of Engineering Physics",
    author: "R.K. Gaur and S.L. Gupta",
    image:
      "https://m.media-amazon.com/images/I/51hQx7ERoZL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 7,
    title: "Digital Design ",
    author: "M. Morris Mano",
    image:
      "https://m.media-amazon.com/images/I/41N0CyVNuwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 8,
    title: "Fundamentals of Data Structures in C",
    author: "Ellis Horowitz and Sartaj Sahni",
    image: "https://m.media-amazon.com/images/I/91QvuTCZ0vL.jpg",
  },
  {
    id: 9,
    title: "Fundamentals of Mathematical statistics",
    author: "S C Gupta and V K Kapoor",
    image:
      "https://m.media-amazon.com/images/I/91CwrqpL3KL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    title: "Computer System Architecture",
    author: "M. Morris Mano",
    image: "https://m.media-amazon.com/images/I/81Ve58ZJLEL.jpg",
  },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
    navigate("/cart", { state: { cart: updatedCart } });
  };

  const filteredBooks = mockBooks.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>📚 SmartLib</h1>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
            <button className="cart-btn" onClick={() => handleAddToCart(book)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
