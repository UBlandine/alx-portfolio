import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you still want to use react-router for routing
import "./Home.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header>
      <nav className="navbar">
        {/* Hamburger menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation links */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link> {/* Keep the Home link */}
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#resume" onClick={toggleMenu}>Resume</a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
