import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import proyect from '../assets/ProyectoGZD.jpg'
import proyectLogin from '../assets/proyectLogin.jpg'
import proyectNotas from '../assets/proyectNotas.png'
function ProjectCard(props) {
  const { title, description, imageSrc, githubLink, liveLink, tags } = props;

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden'>
      <img src={imageSrc} alt={title} className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h2 className='text-lg font-bold text-gray-800 mb-2 select-none'>{title}</h2>
        <div className='flex items-center mb-4'>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-800 mr-2'
          >
            <FaGithub size={50}/>
          </a>
          <a
            href={liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-800'
          >
            <FaGlobe size={50}/>
          </a>
        </div>
        <p className='text-gray-500 mb-4 select-none'>{description}</p>
        <div className='flex flex-wrap select-none'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='px-2 py-1 bg-gray-200 text-gray-700 rounded-full mr-2 mb-2'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Mi Web GZD",
      description: "Portafolio personal con ejemplos de trabajos y experiencia en diseño y desarrollo web.",
      imageSrc: proyect,
      githubLink: "https://github.com/guillezdev/Mi-Web",
      liveLink: "https://serene-paletas-d769fd.netlify.app/",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Login UI",
      description: "Estos son fragmentos del Login para una tienda online",
      imageSrc: proyectLogin,
      githubLink: "https://github.com/guillezdev/UI-Login",
      liveLink: "https://genuine-fairy-bfc3fb.netlify.app/",
      tags: ["React", "CSS-BEM",],
    },
    {
      title: "Mis Notas",
      description: "Aplicación para guardar notas, estas pueden ser editadas y eliminadas fácilmente , también se guardan en LocalStorage para no perderlas al recargar la pagina",
      imageSrc: proyectNotas,
      githubLink: "https://github.com/guillezdev/Mis-Notas",
      liveLink: "https://comfy-meerkat-c6443d.netlify.app/",
      tags: ["React", "Material UI",],
    },
  ];

  return (
    <div className='py-20' id='projects'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4 select-none'>Proyectos</h2>
          <p  className='mb-4 max-w-2xl mx-auto' >Explora los proyectos en los que he trabajado y su implementación en producción. También podrás conocer el Stack tecnológico con el que fueron construidos. ¡Espero que lo disfrutes!</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
