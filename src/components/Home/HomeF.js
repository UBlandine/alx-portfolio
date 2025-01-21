import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import About from "../About/AboutF";
import Resume from "../Resume/ResumeF";
import Services from "../Services/ServicesF";
import Contact from "../Contact/ContactF";
import "./Home.css";

const Home = () => {
  const [currentText, setCurrentText] = useState(0); // State yo kubika amagambo ya `p`
  const texts = [
    "Software Engineer & a Mentor",
    "Innovative Thinker",
    "Full-Stack Developer",
    "Tech Enthusiast",
  ]; // Ijambo rihinduka buri gihe

  const colors = ["#6bb0f0", "#f76c6c", "#48c774", "#fcd34d"]; // Amabara atandukanye

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length); // Hindura ijambo buri masegonda
    }, 3000); // Amasegonda 3

    return () => clearInterval(interval); // Gusiba igihe niba component ikuweho
  }, [texts.length]);

  return (
    <div>
      <Header />

      <div className="home" id="home">
        <div className="content">
          <h1>
            Hello, I am <span>Blandine UGIRIHIRWE,</span>
          </h1>
          <p style={{ color: colors[currentText] }}>{texts[currentText]}</p> {/* Hindura ibara hashingiwe ku index */}
        </div>
      </div>
      <About />
      <Resume />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
