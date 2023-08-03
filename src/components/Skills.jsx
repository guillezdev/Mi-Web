import React from "react";
import { skills } from "../data/skillsData";

const Skills = () => {
  return (
    <section id='skills' className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
      <div className='flex flex-col items-start sm:items-end'>
          <h2 className='text-6xl md:text-9xl font-bold text-primary/20 pb-5 mb-4 select-none '>
            Habilidades
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-secundary'>
            Descubre como puedo <span className="text-primary">contribuir</span> en tu equipo.
          </h1>
        </div>
        <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 justify-stretch gap-10'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='rounded-lg shadow-md shadow-primary p-5 bg-fondoclaro flex flex-col items-center transform hover:scale-105 hover:rotate-2 hover:shadow-xl'
            >
              <skill.icon size="50" className='mb-2 select-none text-white' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
