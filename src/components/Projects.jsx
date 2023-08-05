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
  const { title, description, imageSrc, githubLink, liveLink, tags, index } = props;

  return (
    <section className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative gap-8 text-white lg:gap-24 items-center w-full`}>
      <img
        height='360'
        width='640'
        src={imageSrc}
        alt={title}
        className='w-full md:w-1/2 rounded-lg' />
      <div className="flex flex-col gap-2 ">
        <h1 className="text-5xl border-b-2 py-4 border-primary">{title}</h1>
        <p className="text-secundary text-2xl">{description}</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 hover:-translate-y-2 hover:rotate-3 border-b-2 border-white pb-1 hover:border-primary cursor-pointer">
            <a className="text-2xl font-extralight text-primary " target="_blank" href={githubLink}>Github</a>
            <FaGithub size={25} />
          </div>
          <div className="flex items-center gap-2 hover:-translate-y-2 hover:rotate-3 border-b-2 border-white pb-1 hover:border-primary cursor-pointer">
            <a className="text-2xl font-extralight text-primary" target="_blank" href={liveLink}>Ver</a>
            <FaExternalLinkAlt size={25} />
          </div>
        </div>
      </div>
    </section>

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
          <h2 className='text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none '>
            Proyectos
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-white'>
            Explora los <span className="text-primary">proyectos</span> en los que he trabajado.
          </h1>
        </div>
        <div className='flex flex-col gap-16 justify-center items-center py-16 md:py-32'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
