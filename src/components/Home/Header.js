import React from "react";
import "./Home.css";
 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Blafolio</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        
          <li>
            <a href="#dropdown">Dropdown</a>
            <ul className="dropdown">
              <li><a href="#option1">Option 1</a></li>
              <li><a href="#option2">Option 2</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
