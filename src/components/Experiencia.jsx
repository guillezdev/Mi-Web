import React from 'react'
import godjangollc from '../assets/godjangollc.png';
const experiencias = [
  {
    id: 1,
    title: "GoDjango LLC",
    description: "Como parte de mi rol de Desarrollador Front-End en GoDjango LLC, he contribuido al desarrollo de interfaces de usuario modernas y reactivas utilizando React JS. Mis responsabilidades incluyen colaborar en proyectos dinámicos, asegurando una experiencia de usuario óptima y eficiente en aplicaciones web.",
    startDate: "Marzo 2024",
    endDate: "Actualidad",
    img: godjangollc,
    position: "Desarrollador Front-End",
    skills: ["React", "RTK", "Tailwind", "MUI"]
  },
  {
    id: 2,
    title: "Freelancer",
    description: "A lo largo de mi carrera como freelancer, he tenido la oportunidad de colaborar en una diversidad de proyectos, entre los cuales destaco mi contribución en Nuovit, Apeteat y Aquaviaspa. En estos proyectos, puse en práctica y perfeccioné mis habilidades en desarrollo front-end, logrando resultados significativos y recibiendo reconocimientos por mi dedicación y compromiso.",
    startDate: "Octubre 2022",
    endDate: "Marzo 2024",
    img: "",
    position: "Desarrollador Front-End",
    skills: ["Html", "Css", "JavaScript", "Tailwind", "Sass ", "ReactJS"]
  },
]

function Experiencia() {
  return (
    <section className='bg-black/50'>
      <div className='max-w-7xl mx-auto h-fit py-16'>
        <div className='flex flex-col sm:items-end px-4'>
          <h2 className='text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none'>
            Experiencia
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-white'>
            Mi recorrido <span className="text-primary">laboral</span> como desarrollador.
          </h1>
        </div>
        <div className='w-full h-fit flex flex-col md:flex-row justify-between text-secundary px-10'>
          <ol class="relative border-s border-gray-700">
            {experiencias.map((exp) => (
              <li class="mb-10 ml-6 px-3">
                <span class={`absolute flex items-center justify-center w-14 h-14 p-1 bg-fondo rounded-md -start-7 `}>
                  <img className='object-cover rounded-md' src={exp.img} alt=""/>
                </span>
                <h3 class="mb-1 text-2xl md:text-3xl text-white">{exp.title} - <span class="text-secondary-500">{exp.position}</span></h3>
                <time class="block mb-1 text-base md:text-lg font-normal leading-none text-gray-400 ">{exp.startDate} - {exp.endDate}</time>
                <p class="mb-4  text-lg md:text-xl font-normal leading-relaxed text-gray-300 max-w-3xl">{exp.description}</p>
                <ul class="flex flex-row gap-4 flex-wrap">
                  {exp.skills.map(skill => (
                    <li class="bg-gray-700 text-white py-1 px-3 rounded">{skill}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experiencia

