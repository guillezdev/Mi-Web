import React from "react";
import imgfront from "../assets/Frontend.svg";
import { FaPhoneAlt, FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import pdfFile from "../../public/cv/guillezdev-cv.pdf";

function Home() {
  return (
    <header className="max-w-7xl mx-auto mb-10 text-white py-16" id="home">
      <div className="flex flex-col md:flex-row justify-center items-center p-2">
        <div className="flex-1 px-4 lg:text-left w-full md:w-1/2">
          <h4 className="text-2xl font-bold mb-2">¡Hola Mundo! soy</h4>
          <h1 className="text-4xl sm:text-6xl font-bold pb-1 text-primary">
            Guillermo González
          </h1>
          <div className="loader mb-4">
            <div className="scanner">
              <span className="select-none italic rounded-lg px-[138px] font-medium text-2xl "></span>
            </div>
          </div>
          <p className="text-xl mb-8 font-extralight tracking-wide">
            Enfocado en el <span className="font-normal">desarrollo de aplicaciones web</span> utilizando <span className="font-normal text-primary">React.js</span>, tengo habilidades sólidas en la integración con <span className="font-normal">servicios web</span> y
            <span className="font-normal"> APIs</span>. Me esfuerzo por crear interfaces de usuario atractivas y accesibles pero con el mejor rendimiento posible para garantizar una experiencia fluida y natural.
          </p>
          <div className="flex gap-7 text-white">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex text-fondo items-center font-semibold w-30 gap-2 bg-primary hover:shadow-lg hover:shadow-primary hover:bg-primary hover:-translate-y-1 hover:rotate-1 rounded-md py-2 px-4 cursor-pointer"
            >
              <FaPhoneAlt />
              Contactar
            </Link>
            <a
              href={pdfFile}
              download="guillezdev-cv.pdf"
              className="flex items-center font-semibold w-32 gap-2 bg-fondo border-[2px] hover:shadow-lg hover:-translate-y-1 hover:rotate-1 hover:shadow-primary border-primary rounded-md py-2 px-4 cursor-pointer"
            >
              <FaDownload />
              CV.pdf
            </a>
          </div>
        </div>
        <img className="w-1/2 md:flex-1 hidden md:block aspect-square" src={imgfront} alt="img" />
      </div>
    </header>
  );
}

export default Home;
