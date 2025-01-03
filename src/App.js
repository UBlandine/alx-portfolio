import React from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Header from "./components/Home/Header";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
