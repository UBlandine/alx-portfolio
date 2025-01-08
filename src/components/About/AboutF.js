import React from "react";
import { Link } from 'react-router-dom';

import "./About.css";
import image from "../../image/Blando.jpg";
import cvFile from "../../assets/CV-2024.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Section: Image */}
        <div className="about-image">
          <img
            src={image}
            alt="Profile"
          />
        </div>

        {/* Right Section: Text */}
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <br />
          <div className="about-buttons">
            {/* Use ScrollLink for smooth scrolling */}
            <Link to="/signup">
    <button className="btn hire-me">Hire Me</button>
  </Link>

            {/* Download CV link */}
            <a href={cvFile} download="CV-2024.pdf" className="btn download-cv">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
