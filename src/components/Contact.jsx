import React from "react";
import imgcont from "../assets/redes.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import CardProfile from "./CardProfile";
function Contact() {
  return (
    <div className="text-secundary bg-black/50" id="contact">
      <div className=" max-w-7xl mx-auto py-16">

        <div className='flex flex-col px-4'>
          <h2 className='text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none '>
            Contactar
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-white'>
            Enviame un <span className="text-primary">mensaje</span> directo.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center px-4">

          <img className="lg:w-1/2 w-full" src={imgcont} alt="redes" />

          <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 py-4">
              <h1 className="text-lg lg:text-2xl inline-block text-center relative"><span className="absolute left-6  peer-hover:text-7xl text-primary font-extrabold">-</span>Actualmente estoy abierto a nuevas oportunidades laborales, si quieres contactarme puedes hacerlo a través de mis redes o enviarme un <a href="mailto:guillezdev@gmail.com" className="text-primary underline decoration-primary">E-mail</a> al siguiente enlace.</h1>
              <a className="flex w-fit text-fondo items-center font-semibold w-30 gap-2 bg-primary hover:shadow-lg hover:shadow-primary hover:bg-primary hover:-translate-y-1 hover:rotate-1 rounded-md py-2 px-4 cursor-pointer" href="mailto:guillezdev@gmail.com"><MdEmail size={40} />Hablemos</a>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h3 className="relative text-xl"><span className="absolute -left-2  peer-hover:text-7xl text-primary font-extrabold">-</span>Redes sociales</h3>
              <div className="flex gap-6">
                <a className="text-primary lg:scale-125 hover:-translate-y-2 hover:rotate-3" href="https://github.com/guillezdev"><FaGithub size={40} /></a>
                <a className="text-primary lg:scale-125 hover:-translate-y-2 hover:rotate-3" href="https://www.linkedin.com/in/guillezdev/"><FaLinkedin size={40} /></a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
