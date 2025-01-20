import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from "./components/Home/HomeF";
import About from "./components/About/AboutF";
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/LogIn";
import Resume from "./components/Resume/ResumeF";

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
       
      </Routes>
    </Router>
  );
}

export default App;
