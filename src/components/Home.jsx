import React from "react";
import imgfront from "../assets/Frontend.svg";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import pdfFile from "../../public/cv/guillezdev-cv.pdf";
function Home() {
  return (
    <header className="max-w-7xl mx-auto mb-10" id="home">
      <div className="flex flex-row justify-center items-center">
        <div className="flex-1 px-4 lg:text-left">
          <h4 className="text-2xl font-bold mb-4">¡Hey!</h4>
          <h1 className="text-4xl font-bold mb-4">
            {"Soy Guillermo Gonzalez"}
          </h1>
          <div className="loader">
            <div className="scanner">
              <span className="select-none">Desarrollador_Frontend....</span>
            </div>
          </div>
          <p className="text-lg text-justify mb-8">
            Como desarrollador web me apasiona encontrar formas de simplificar
            lo que parece difícil. Me esfuerzo por completar cada proyecto que
            emprendo, con la calidad y atención que se merece. La constancia es
            mi principal virtud. Si tienes un Proyecto en mente no dudes en
            contactar conmigo para hacerlo realidad!
          </p>
          <div className="flex gap-7">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex items-center w-40 gap-2 btn-home cursor-pointer"
            >
              <FaPhoneAlt />
              Contactar
            </Link>
            <a
             href={pdfFile} download="guillezdev-cv.pdf"
              className="flex items-center w-40 gap-2 btn-home cursor-pointer"
            >
              <FaDownload />
             CV.pdf
            </a>
          </div>
        </div>
        <div className="w-full hidden md:block flex-1">
          <img src={imgfront} alt="img" />
        </div>
      </div>
    </header>
  );
}

export default Home;
