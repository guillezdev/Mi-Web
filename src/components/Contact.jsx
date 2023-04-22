import React from "react";
import imgcont from "../assets/Contact.svg";
import { FaWhatsapp, FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import CardProfile from "./CardProfile";
function Contact() {
  return (
    <div className='' id='contact'>
      <div className='text-center'>
        <h2 className='text-3xl mb-4 font-bold text-gray-800'>Contáctame</h2>
        <div className='mb-4 max-w-2xl mx-auto'>
          <div class='social-links'>
            <a id='whatsapp' href="https://wa.me/+5358902778" class='social-btn flex-center'>
              <FaWhatsapp size={50} />
              <span>Whatsapp</span>
            </a>

            <a
              id='discord'
              href='https://discord.gg/Guillezdev#3016'
              class='social-btn flex-center'
            >
              <FaDiscord size={50} />
              <span>Discord</span>
            </a>

            <a
              id='github'
              href='https://github.com/guillezdev'
              class='social-btn flex-center'
            >
              <FaGithub size={50} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:pt-6 lg:flex '>
          <div className=' hidden lg:block w-full lg:w-1/2 '>
            <CardProfile img={imgcont} />
          </div>
          <div className='w-full lg:w-1/2 lg:pt-0 px-4  text-center lg:text-left'>
            <div className=' p-4 rounded-lg'>
              <div className='flex items-center justify-center'>
                <MdEmail size={50} />
                <p className='ml-2 text-lg'>guillezdev@gmail.com</p>
              </div>
            </div>
            <form name='contact' method='post' className='mb-4'>
              <input type='hidden' name='form-name' value='contact' />
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  name='name'
                  className='w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Correo electrónico
                </label>
                <input
                  type='email'
                  name='email'
                  className='w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Mensaje
                </label>
                <textarea
                  name='message'
                  rows='4'
                  className='w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
                ></textarea>
              </div>
              <button
                type='submit'
                className='animate-bounce hover:scale-90 bg-black text-gray-50 font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue'
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
