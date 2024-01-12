import React from "react";
import {
  FaReact,
  FaExternalLinkAlt,
  FaCss3Alt
} from "react-icons/fa";
import { SiRedux, SiReactrouter } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs, SiSupabase } from "react-icons/si";
import Danet from "../assets/danetproject.webp";
import LogoYadel from '../assets/yadel.webp'
import numeria from "../assets/numeriaa.webp";
import superletter from "../assets/superletter.webp";
import movie from "../assets/buscarpelis.webp";

function ProjectCard(props) {
  const { title, description, imageSrc, githubLink, liveLink, tags, index } = props;

  return (
    <section className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative gap-8 text-white items-center w-full`}>
      <img
        height='360'
        width='640'
        src={imageSrc}
        alt={title}
        className='w-full md:w-1/2 rounded-lg' />
      <div className="absolute -m-6 flex gap-2 items-center bg-fondo/60 backdrop-blur-sm p-2 rounded-xl w-fit text-lg">
        {tags.map((Tag, index) => {
          return <Tag key={index} className='hover:text-primary' hover={`primary`} size={35} />
        })}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h1 className="text-5xl border-b-2 border-r-2 py-4 border-primary">{title}</h1>
        <p className="text-secundary text-2xl">{description}</p>
        <div className="flex gap-4">
          {/* <div className="flex items-center gap-2 hover:underline hover:text-primary pb-1 hover:border-primary cursor-pointer">
            <a className="text-2xl font-extralight text-primary" target="_blank" href={githubLink}>Github</a>
            <FaGithub size={25} />
          </div> */}
          <div className="flex items-center gap-2 hover:underline hover:text-primary pb-1 hover:border-primary cursor-pointer">
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
      title: "SuperLetter",
      description: "SuperLetter es mi proyecto personal, creado con la intención de ofrecer un espacio dedicado a los amantes de la literatura. En SuperLetter, todo es gratuito. La plataforma te permite encontrar tus libros favoritos y publicar tus propias obras literarias.",
      imageSrc: superletter,
      githubLink: "",
      liveLink: "https://superletter.netlify.app/",
      tags: [FaReact, SiTailwindcss, SiSupabase],
    },
    {
      title: "Danet",
      description: "Salón de belleza que ofrece una variedad de servicios.",
      imageSrc: Danet,
      githubLink: "https://github.com/guillezdev/Salon-de-Belleza-Danet",
      liveLink: "https://danetdelatorre.vercel.app/",
      tags: [FaReact, SiTailwindcss, SiReactrouter],
    },
    {
      title: "L&RAlteration",
      description: "Servicios de confección y modificaciones de prendas.",
      imageSrc: LogoYadel,
      githubLink: "https://github.com/guillezdev/Costura-Alteraciones",
      liveLink: "https://alteration.netlify.app/",
      tags: [SiNextdotjs, SiTailwindcss],
    },
    {
      title: "Search-muvie",
      description: "Descubre tus películas y series favoritas.",
      imageSrc: movie,
      githubLink: "#",
      liveLink: "https://search-muvie.netlify.app",
      tags: [FaReact, SiRedux, FaCss3Alt],
    },
    {
      title: "Numeria",
      description: "Realiza cálculos en el ámbito de las matemáticas numéricas.",
      imageSrc: numeria,
      githubLink: "https://github.com/wolfsoul01/Proyecto-Numeria-Web",
      liveLink: "https://numeria.netlify.app/",
      tags: [FaReact, SiTailwindcss, SiReactrouter],
    },
  ];

  return (
    <div className='bg-black/50 py-16' id='projects'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col'>
          <h2 className='text-7xl md:text-9xl font-bold text-primary/20 pb-5 mb-4 select-none '>
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
