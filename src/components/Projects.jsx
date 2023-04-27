import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import proyect from "../assets/ProyectoGZD.jpg";
import proyectLogin from "../assets/proyectLogin.jpg";
import Danet from "../assets/Danet.jpg";

import numeria from "../assets/Numeria.jpg";
function ProjectCard(props) {
  const { title, description, imageSrc, githubLink, liveLink, tags } = props;

  return (
    <div className=' bg-white rounded-lg shadow-xl overflow-hidden'>
      <img
        src={imageSrc}
        alt={title}
        className='w-full h-64 shadow-lg '
      />
      <hr />
      <div className='p-4 h-full'>
        <h2 className='text-lg font-bold text-gray-800 mb-2 select-none'>
          {title}
        </h2>
        <p className='text-gray-500 mb-4 select-none'>{description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-wrap select-none'>
            {tags.map((Tag) => (
              <span
                key={Tag}
                className='px-2 py-1 bg-gray-100 shadow-xl text-gray-900 rounded-md mr-2 mb-2'
              >
                <Tag size={30}></Tag>
              </span>
            ))}
          </div>
          <div className='flex gap-4 shadow-xl p-3 rounded-md'>
            <FaGithub className='cursor-pointer' size={30} />Repo
            <FaExternalLinkAlt className='cursor-pointer' size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Mi Web GZD",
      description:
        "Portafolio personal con ejemplos de trabajos y experiencia en diseño y desarrollo web.",
      imageSrc: proyect,
      githubLink: "https://github.com/guillezdev/Mi-Web",
      liveLink: "https://guillezdev.netlify.app/",
      tags: [FaReact, SiTailwindcss, FaCss3Alt],
    },
    {
      title: "Login UI",
      description: "Estos son fragmentos del Login para una tienda online",
      imageSrc: proyectLogin,
      githubLink: "https://github.com/guillezdev/UI-Login",
      liveLink: "https://e-commers-login.netlify.app/",
      tags: [FaReact],
    },
    {
      title: "Numeria",
      description: "Realiza calculos relacionados con la matemática numérica",
      imageSrc: numeria,
      githubLink: "https://github.com/wolfsoul01/Proyecto-Numeria-Web",
      liveLink: "https://numeria.netlify.app/",
      tags: [FaReact, SiTailwindcss],
    },
    {
      title: "Danet",
      description: "Salón de Belleza con diferentes servicios",
      imageSrc: Danet,
      githubLink: "https://github.com/guillezdev/Salon-de-Belleza-Danet",
      liveLink: "https://danetdelatorre.netlify.app/",
      tags: [FaReact, SiTailwindcss],
    },
  ];

  return (
    <div className='' id='projects'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4 select-none'>
            Proyectos
          </h2>
          <p className='mb-4 max-w-2xl mx-auto'>
            Explora los proyectos en los que he trabajado. ¡Espero que lo
            disfrutes!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
