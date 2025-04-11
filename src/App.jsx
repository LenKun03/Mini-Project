import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "./userAuth";
import Home from "./home";
import Chatbot from "./chatbot";
import CollegeCutoffs from "./collegeCutoff";
import Cart from "./cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />;
        <Route path="/" element={<UserAuth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/cutoffs" element={<CollegeCutoffs />} />
      </Routes>
    </Router>
  );
};

export default App;
