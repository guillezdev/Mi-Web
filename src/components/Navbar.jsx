import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
   /*    setVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10); */
      setPrevScrollpos(currentScrollPos);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <>
      <div className="h-16"></div>
      <nav
        className={`fixed py-0 top-0 inset-x-0 z-50 backdrop-filter bg-fondo bg-opacity-95 shadow-sm backdrop-blur-xl ${visible ? "" : "-translate-y-full"}`}
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
              @guillezdev
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

            <div className="md:hidden scale-75 -translate-y-1">
              <input id="checkbox" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
              <label className="toggle" htmlFor="checkbox">
                <div id="bar1" className="bars"></div>
                <div id="bar2" className="bars"></div>
                <div id="bar3" className="bars"></div>
              </label>
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
export default Navbar
