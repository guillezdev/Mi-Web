import React from "react";
import imgcont from "../assets/Contact.svg";
function Contact() {
  return (
    <div className='' id='contact'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-gray-800'>Contáctame</h2>
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
            <form className="mb-4">
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-gray-700 font-medium mb-2'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
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
                  id='email'
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
                  id='message'
                  name='message'
                  rows='4'
                  className='w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue'
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
