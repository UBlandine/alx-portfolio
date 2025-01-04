import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
