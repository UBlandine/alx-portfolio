import React from "react";
import Header from "../Home/Header";

import About from "../About/AboutF";

import Services from "../Services/ServicesF";

import Client from "../Client/ClientTes";
import Resume from "../Resume/ResumeF";
import Contact from "../Contact/ContactF";
import "./Home.css";

const Home = () => {
  return (
    <div> 
      <Header />
     
    <div className="home" id="home">
      <div className="content">
        <h1>I am <span>Blandine UGIRIHIRWE,</span></h1>
        <p>  Software Engineer & a Mentor</p>
      </div>
    </div>
    <About/>
    <Services/>
    <Client/>
    <Resume/>
    <Contact/>
    </div>
   
   
  );
};

export default Home;
