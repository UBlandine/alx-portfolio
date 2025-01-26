import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogIn.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // State for error handling
  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-portfolio-3-vroc.onrender.com/api/users/login",
        formData
      );

      // Store token or other response data
      const { token } = response.data;
      localStorage.setItem("authToken", token);

      // Navigate to the home/dashboard page
      alert("Login Successful!");
      navigate("/contact"); // Change to the route you want after login
    } catch (err) {
      // Handle errors
      const errorMessage =
        err.response?.data?.message || "Invalid login credentials.";
      setError(errorMessage);
    }
  };

  return (
    <div className="login-container" id="login">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
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
          <button type="submit">Log In</button>
        </form>
        <p className="signup-link">
          Don't have an account?{" "}
          <a href="/signup" className="signup-redirect">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
