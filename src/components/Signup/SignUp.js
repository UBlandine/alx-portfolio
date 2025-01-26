import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    Telphone: "",
  });

  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-portfolio-3-vroc.onrender.com/api/users/signup",
        formData
      );

      // If signup is successful, navigate to the login page
      alert("Signup Successful! Redirecting to login...");
      navigate("/login"); 
    } catch (err) {
      // Handle errors
      const errorMessage =
        err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="signup-container" id="signup">
      <div className="signup-box">
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
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
          <input
            type="text"
            name="Telphone"
            placeholder="Telphone"
            value={formData.Telphone}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        {/* Login link for users who already have an account */}
        <p className="login-redirect">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
