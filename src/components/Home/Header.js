import React from "react";
import { Link } from "react-router-dom"; 
import "./Home.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>

          <li className="dropdown-container">
            <Link to="#dropdown" className="dropdown-toggle">Dropdown</Link>
            <ul className="dropdown">
              <li><Link to="#option1">Option 1</Link></li>
              <li><Link to="#option2">Option 2</Link></li>
            </ul>
          </li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;