import React from "react";
import imgfront from "../assets/Frontend.svg";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import pdfFile from "../../public/cv/guillezdev-cv.pdf";
function Home() {
  return (
    <header className="max-w-7xl mx-auto mb-10 text-black" id="home">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 px-4 lg:text-left w-full md:w-1/2">
          <h4 className="text-2xl font-bold mb-2">¡Hey!</h4>
          <h1 className="text-4xl font-bold pb-1">
           Soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900">Guillermo Gonzalez</span>
          </h1>
          <div className="loader mb-4">
            <div className="scanner">
              <span className="select-none italic rounded-lg px-[130px]"></span>
            </div>
          </div>
          <p className="text-lg text-justify mb-8">
            Tengo experiencia en el <span className="font-semibold">desarrollo de aplicaciones web</span> con <span className="font-semibold">React y
            Next.js</span>, así como habilidades en la integración con <span className="font-semibold">servicios web</span> y
            <span className="font-semibold"> APIs</span>. Me enfoco en crear interfaces de usuario
            atractivas y accesibles. Me gusta el minimalismo y encontrar nuevas
            formas de simplificarlo que parece difícil.
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
              href={pdfFile}
              download="guillezdev-cv.pdf"
              className="flex items-center w-40 gap-2 btn-home cursor-pointer"
            >
              <FaDownload />
              CV.pdf
            </a>
          </div>
        </div>
        <img className="w-1/2 md:flex-1" src={imgfront} alt="img" />
      </div>
    </header>
  );
}

export default Home;
