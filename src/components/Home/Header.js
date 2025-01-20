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

          <li> <Link to="#resume">Resume</Link> </li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;