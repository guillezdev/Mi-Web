import React from "react";
import { skills } from "../data/skillsData";

const Skills = () => {
  return (
    <section id='skills' className='py-10'>
      <div className=' text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4 select-none'>Habilidades</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='rounded-lg shadow-md p-5 bg-white flex flex-col items-center transform hover:scale-105 '
            >
              <skill.icon className='w-16 h-16 text-primary mb-2 select-none' />
              <h3 className='text-xl font-semibold mb-1 select-none'>{skill.name}</h3>
              <p className='text-center select-none'>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
