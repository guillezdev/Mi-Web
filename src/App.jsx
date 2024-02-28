import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experiencia from "./components/Experiencia";
import Servicios from "./components/Servicios";


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    {/*   <Experiencia />  */}
      <Projects />
      <Skills />
     {/*  <Servicios />
      */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
