import React from "react";
import imgcont from "../assets/Contact.svg";
import { FaWhatsapp, FaTelegram, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <div className='' id='contact'>
      <div className='text-center'>
        <h2 className='text-3xl mb-4 font-bold text-gray-800'>Contáctame</h2>
        <p className='mb-4 max-w-2xl mx-auto'>
          {" "}
          En esta sección encontrarás toda la información necesaria para ponerte
          en contacto conmigo.
        </p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:pt-6 lg:flex'>
          <div className='w-full lg:w-1/2'>
            <img
              className='w-full mb-4 h-auto lg:max-w-none mx-auto lg:mx-0'
              src={imgcont}
              alt='Front-img'
            />
          </div>

          <div className='w-full lg:w-1/2 pt-20 lg:pt-0 px-4 sm:px-6 lg:px-8 text-center lg:text-left'>
            <div className=' p-4 rounded-lg'>
              <p className=' text-center mb-2'>
                Puedes escribirme a mis redes!
              </p>
              <div className='flex justify-center space-x-4'>
                <a
                  href='https://wa.me/+5358902778'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaWhatsapp
                    size={50}
                    className='text-green-500 hover:text-green-800'
                  />
                </a>
                <a
                  href='https://t.me/guillezdev'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTelegram
                    size={50}
                    className='text-blue-500 hover:text-blue-800'
                  />
                </a>
                <a
                  href='https://discord.gg/Guillezdev#3016'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaDiscord
                    size={50}
                    className='text-gray-500 hover:text-gray-800'
                  />
                </a>
              </div>
              <p className=' text-center mt-2'>O enviarme un mesaje directo!</p>
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
                className='bg-indigo-400 hover:scale-90 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue'
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
