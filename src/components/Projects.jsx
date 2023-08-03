import React from "react";
import {
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Danet from "../assets/Danet.jpg";
import LogoYadel from '../assets/LogoYadel.jpg'
import { Nextjs } from "../data/Nextjs";

import numeria from "../assets/Numeria.jpg";
function ProjectCard(props) {
  const { title, description, imageSrc, githubLink, liveLink, tags } = props;

  return (
    <div className='bg-fondoclaro rounded-lg shadow-xl overflow-hidden h-full flex flex-col'>
      <img
        src={imageSrc}
        alt={title}
        className='w-full h-auto '
      />
      <hr />
      <div className='p-4 h-full flex flex-col'>
        <h2 className='text-lg font-bold text-white mb-2 select-none'>
          {title}
        </h2>
        <p className='text-secundary mb-4 select-none'>{description}</p>
        <div className='flex justify-between items-end flex-grow'>
          <div className='flex flex-wrap select-none'>
            {tags.map((Tag) => (
              <span
                key={Tag}
                className='px-2 py-1 bg-transparent shadow-xl text-gray-900 rounded-md mr-2 mb-2'
              >
                <Tag size={30}></Tag>
              </span>
            ))}
          </div>
          <div className='flex gap-4 shadow-xl p-3 rounded-md'>
            <a href={githubLink} className='cursor-pointer hover:text-gray-600' ><FaGithub className='cursor-pointer' size={30} />Code</a>
            <a href={liveLink} target="_blanck" className='cursor-pointer hover:text-gray-600'><FaExternalLinkAlt size={30} />Ver</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
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
      liveLink: "https://danetdelatorre.vercel.app/",
      tags: [FaReact, SiTailwindcss],
    },
    {
      title: "L&RAlteration",
      description: "Servicios de costura y alteraciones",
      imageSrc: LogoYadel,
      githubLink: "https://github.com/guillezdev/Costura-Alteraciones",
      liveLink: "https://alteration.netlify.app/",
      tags: [Nextjs, SiTailwindcss],
    },
  ];

  return (
    <div className='bg-black/50 py-16' id='projects'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col'>
          <h2 className='text-4xl sm:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none '>
            Proyectos
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-secundary'>
            Explora los <span className="text-primary">proyectos</span> en los que he trabajado.
          </h1>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
