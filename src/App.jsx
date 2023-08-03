import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <main className="bg-fondo">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
