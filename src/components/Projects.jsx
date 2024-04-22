import React from "react";
import {
  FaReact,
  FaExternalLinkAlt,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaGithub
} from "react-icons/fa";
import { SiRedux, SiReactrouter, SiJavascript, SiTypescript, SiStorybook } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs, SiSupabase } from "react-icons/si";
import acuavia from "../assets/acuavia.webp";
import superletter from "../assets/superletter.webp";
import apeteat from "../assets/apeteat.webp";

function ProjectCard(props) {
  const { title, description, imageSrc, githubLink, liveLink, tags, index, coworkerLink, coworker_name } = props;

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
        <p className="text-secundary text-xl">{description}</p>
        <div className="flex gap-4">
          {
            githubLink && <div className="flex items-center gap-2 hover:underline hover:text-primary pb-1 hover:border-primary cursor-pointer">
              <a className="text-2xl font-extralight text-primary" target="_blank" href={githubLink}>Github</a>
              <FaGithub size={25} />
            </div>
          }
          <a target="_blank" href={liveLink} className="flex items-center gap-2 hover:underline hover:text-primary pb-1 hover:border-primary cursor-pointer">
            <span className="text-2xl font-extralight text-primary">Ver</span>
            <FaExternalLinkAlt size={25} />
          </a>


        </div>
        {
          coworkerLink && <div className="flex items-center gap-2 hover:underline hover:text-primary pb-1 hover:border-primary cursor-pointer">
            <a className="text-2xl font-extralight text-primary" target="_blank" href={coworkerLink}>Coworker: {'@' + coworker_name}</a>
          </div>
        }
      </div>
    </section>

  );
}

function Projects() {

  const projects = [
    {
      title: "SuperLetter",
      description: "SuperLetter es un proyecto personal, creado con la intención de ofrecer un espacio dedicado a los amantes de la literatura. En SuperLetter, todo es gratuito. La plataforma te permite encontrar tus libros favoritos y publicar tus propias obras literarias.",
      imageSrc: superletter,
      githubLink: "",
      liveLink: "https://superletter.netlify.app/",
      tags: [FaReact, SiTailwindcss, SiSupabase],
    },
    {
      title: "Apeteat",
      description: "Contribuí a Apeteat transformando diseños en realidad funcional. Como especialista en maquetación, aseguré que la calidad y frescura de sus servicios de alimentación en Barcelona y Madrid se tradujeran en una experiencia de usuario impecable y técnicamente sólida.",
      imageSrc: apeteat,
      liveLink: "https://www.apeteat.com/",
      coworkerLink: 'https://fgbyte.com/project/aquavia',
      coworker_name: 'fgbyte',  
      tags: [FaHtml5, SiTailwindcss, FaJs],
    },
    {
      title: "Acuavia Spa",
      description: "Desarrollé un sistema de diseño para Acuavia Spa con StoryBook, enfocado en diseño responsivo y compatibilidad entre dispositivos, potenciando la mantenibilidad y escalabilidad de los componentes visuales",
      imageSrc: acuavia,
      liveLink: "https://www.aquaviaspa.es/",
      coworkerLink: 'https://fgbyte.com/project/aquavia',
      coworker_name: 'fgbyte',   
      tags: [FaHtml5, FaBootstrap, SiTypescript, SiStorybook],
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
            Una selección de mis <span className="text-primary">proyectos</span> favoritos, puede ver más en mi <a className="hover:text-primary hover:underline underline-offset-4" target="_blank" href="https://github.com/guillezdev" aria-label="Enlace a guithub">GitHub</a>
          </h1>
        </div>
        <div className='flex flex-col gap-16 justify-center items-center py-16 md:py-32 p-2'>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
