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
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-white'>
            Descubre como puedo <span className="text-primary">contribuir</span> en tu equipo.
          </h1>
        </div>
        <div className='grid grid-cols-4 sm:grid-cols-5 justify-stretch gap-10 lg:gap-y-32 py-16 px-4'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='flex flex-col items-center '
            >
              <div className="text-white w-14 h-auto flex flex-col items-center justify-center lg:scale-150 hover:-translate-y-2 hover:rotate-3 cursor-pointer hover:text-primary">
                <h3 className="text-lg flex relative"><span className="absolute -left-2 text-primary font-extrabold">-</span>{skill.name}</h3>
                <skill.icon size={60} className='mb-2 w-full h-full select-none text-white' />
              </div>
            </div>
          ))}
          <div className="text-primary text-[66px] lg:text-8xl select-none">...</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
