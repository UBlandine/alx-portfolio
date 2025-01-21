import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./SignUp.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup Successful!");
    // Add your backend API call here
  };

  return (
    <div className="signup-container" id="signup">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
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
