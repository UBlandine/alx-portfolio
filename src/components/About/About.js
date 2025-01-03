import React from "react";
import "./About.css";
import image from "../../image/Blando.jpg"

const About = () => {
  return (
    <section className="about">
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
          <div className="about-buttons">
            <button className="btn hire-me">Hire Me</button>
            <button className="btn download-cv">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
