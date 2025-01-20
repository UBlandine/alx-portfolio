import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="#about" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="#resume" onClick={toggleMenu}>Resume</Link>
          </li>
          <li>
            <Link to="#services" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="#contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
