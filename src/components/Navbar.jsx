import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`sticky py-0 top-0 inset-x-0 z-50 backdrop-filter bg-opacity-10 shadow-sm backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto py-4 px-4">

          <div className="flex justify-between items-center ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              cursor="pointer"
              className="text-xl font-bold text-primary cursor-pointer select-none hover:scale-90"
            >
              Portafolio
            </Link>

            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                  >
                    Habilidades
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    cursor="pointer"
                    className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:hidden">
              <button
                className="flex items-center justify-center h-8 w-8 text-white hover:shadow-xl py-1 px-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {
              <div className=" md:hidden mt-4">
                <ul className="flex flex-col items-center space-y-2">
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Habilidades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      cursor="pointer"
                      className="text-white hover:shadow-xl hover:border-b-2 border-white font-semibold py-1 px-2 cursor-pointer select-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </Transition>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
