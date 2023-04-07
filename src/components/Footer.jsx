import React from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">Copyright © 2023 Creado por Guillezdev. Todos los derechos reservados</p>
          <div className="flex items-center">
            <a href="https://github.com/@guillezdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-4">
              <FaGithub size={50} className="inline-block mr-1" />GitHub
            </a>
            <a href="https://wa.me/+5358902778" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaWhatsapp size={50} className="inline-block mr-1" />WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;