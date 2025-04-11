import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userAuth.css";

const UserAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", confirmPassword: "" });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Email and Password are required.");
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Simulate login/signup and redirect

    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="toggle" onClick={toggleMode}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserAuth;
