import React from "react";
import imgcont from "../assets/Contact.svg";
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
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
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-secundary'>
            Enviame un <span className="text-primary">mensaje</span> directo.
          </h1>
        </div>
        contenido
      </div>
    </div>
  );
}

export default Contact;
