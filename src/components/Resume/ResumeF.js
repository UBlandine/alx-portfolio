import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <h1>My <span>Resume</span></h1>
      <div className="resume-sections">
        {/* Education Section */}
        <Section title="Education">
          <Card 
            date="March 2021 - Present"
            title="Master of Science in Project Management"
            description="Currently pursuing MSc in Project Management, focusing on planning, executing,
             and delivering projects efficiently
             while mastering leadership, risk management, and resource optimization techniques."
            institution="Liverpool John Moores University"
          />
          <Card 
            date="September 2023 - Present"
            title="Software Engineering"
            description="I Joined ALX to develop skills in software engineering
             through hands-on projects, focusing on programming,
             problem-solving, and teamwork to build robust technical expertise."
            institution="African Leadership of Excellence "
          />
          <Card
          date="October 2018 - January 2023"
          title="Bachelor of Science in Geotechnical Engineering"
          description="Studying Geotechnical Engineering in college involves analyzing soil and rock behavior, designing stable foundations, and solving 
          construction challenges to ensure safe and efficient infrastructure development."
            institution="UR/College of Science and Technology"
          
          />
        </Section>

        {/* Experience Section */}
        <Section title="Experience">
          <Card 
            date="March 2021 - Present"
            title="Mentor of AGYWs"
            description="I provide guidance, support, and resources to empower AGYW in personal development, education, and career choices. This mentorship fosters confidence, resilience, 
            and essential life skills, helping them navigate challenges and achieve their goals."
            institution="African Enterprise"
          />
          <Card 
            date="September 2024 - Present"
            title="Backend Intern"
            description="As an intern I am gaining hands-on experience with programming languages, frameworks, and tools, 
            while contributing to the overall functionality and performance of web applications."
            institution="EnerTech Power Solutions"
          />
          <Card 
            date="July 2018 - March 2020"
            title="Digital Officer"
            description=" I managed an organization’s digital presence by creating and maintaining content
             across websites and social media, 
            analyzing performance, and executing online campaigns to enhance engagement and visibility."
            institution="Better Life Achievement Organization "
          />
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="cards-container">
        {children}
      </div>
    </div>
  );
};

const Card = ({ date, title, description, institution }) => {
  return (
    <div className="card">
      <p className="date">{date}</p>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="institution">{institution}</p>
    </div>
  );
};

export default Resume;
