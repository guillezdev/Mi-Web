import React from "react";
import footer from '../assets/footer.svg'
function Footer() {
  return (
    <footer className="bg-black/70 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a target="_blank" href="https://github.com/guillezdev" aria-label="Enlace a guithub" className="w-fit mx-auto hover:text-primary flex gap-2 items-center">
          <img className="w-8 h-auto" src={footer} alt="footer" />Creado por @Guillezdev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
