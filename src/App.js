import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import TopBrand from "./components/TopBrand";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <TopBrand />
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
