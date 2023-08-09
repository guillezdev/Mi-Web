import React, { useState } from "react";
import imgcont from "../assets/redes.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";

function Contact() {
  const [clipboardcheck, setClipboardcheck] = useState(false)

  const handleCopy = async () => {
    if (!clipboardcheck) {
      try {
        await navigator.clipboard.writeText('guillezdev@gmail.com')
        setClipboardcheck(!clipboardcheck);
      }
      catch {
        setClipboardcheck(false);
      }
    }
    else {
      try {
        await navigator.clipboard.writeText('')
        setClipboardcheck(!clipboardcheck);
      }
      catch {
        setClipboardcheck(false);
      }
    }

  }
  return (
    <div className="text-secundary bg-black/50" id="contact">
      <div className=" max-w-7xl mx-auto py-16">

        <div className='flex flex-col px-4'>
          <h2 className='text-7xl md:text-9xl font-bold text-primary/20 pb-5 mb-4 select-none '>
            Contacto
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-white'>
            Enviame un <span className="text-primary">mensaje</span> directo.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center px-4">

          <img className="md:w-1/2 w-full" src={imgcont} alt="redes" />

          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 py-4">
              <h1 className="text-md md:text-2xl inline-block text-center relative"><span className="left-6 text-primary font-extrabold">-</span>Actualmente estoy abierto a nuevas oportunidades laborales, si quieres contactarme puedes hacerlo a través de mis redes o enviarme un <a href="mailto:guillezdev@gmail.com" className="text-primary underline decoration-primary">E-mail</a> al siguiente enlace.</h1>
              <div className="relative">
                <a className="flex w-fit text-fondo items-center font-semibold w-30 gap-2 bg-primary hover:shadow-md hover:shadow-primary hover:bg-primary hover:-translate-y-1 hover:rotate-1 rounded-md py-1 px-1 cursor-pointer" href="mailto:guillezdev@gmail.com"><MdEmail size={25} />guillezdev@gmail.com</a>
                <div className="absolute -right-8 flex justify-start top-[0.3px] cursor-pointer text-primary w-7 rounded-md p-1" onClick={handleCopy}>
                  {clipboardcheck ? <div className="flex gap-1 items-center"><BsClipboardCheck size={20} /><p className="text-[10px]">Copiado</p></div> : <BsClipboard size={20} />}
                </div>
              </div>

            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="relative text-xl"><span className="absolute -left-2  peer-hover:text-7xl text-primary font-extrabold">-</span>Redes sociales</p>
              <div className="flex gap-6 ">
                <a className="text-secundary hover:text-primary md:scale-125 hover:-translate-y-2 hover:rotate-3" target="_blank" href="https://github.com/guillezdev" aria-label="Enlace a guithub"><FaGithub size={40} /></a>
                <a className="text-secundary hover:text-primary md:scale-125 hover:-translate-y-2 hover:rotate-3" target="_blank" href="https://www.linkedin.com/in/guillezdev/" aria-label="Enlace a Linkedin"><FaLinkedin size={40} /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
