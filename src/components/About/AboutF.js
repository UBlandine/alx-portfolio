import React from "react";
import { Link } from 'react-router-dom';

import "./About.css";
// import image from "../../image/Blando.jpg";
import cvFile from "../../assets/CV-2024.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left Section: Image */}
        {/* <div className="about-image">
          <img
            src={image}
            alt="Profile"
          />
        </div> */}

        {/* Right Section: Text */}
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>
          
          <p>
    
Blandine UGIRIHIRWE is a passionate and resourceful professional with a strong background in civil 
geotechnical engineering and software engineering. 
She is skilled in backend and frontend development using 
tools like Node.js, TypeScript, PostgreSQL, ReactJS, and Docker. 
With over three years of mentorship experience, Blandine is driven to inspire and uplift others
 through her technical expertise and leadership. 

Beyond her technical prowess, she is a social innovator 
committed to creating impact, exemplified by her project QuickMed Rwanda
, which seeks to improve healthcare accessibility for all, including disabled individuals.
 Blandine is also an alumna of the Aspire Leaders Program, where she honed her leadership
  skills and earned access to a global network for social change. 

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
