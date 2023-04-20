import React from "react";
import imgFE from "../assets/Frontend.svg";
function Home() {
  return (
    <div className='relative' id='home'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='pt-20 lg:pt-32 lg:flex'>
          <div className='w-full lg:w-1/2 pt-20 lg:pt-0 px-4 sm:px-6 lg:px-8 lg:text-left'>
            <h4 className='text-2xl font-bold mb-4'>{"¡Hey!"}</h4>
            <h1 className='text-4xl font-bold mb-4'>
              {"Soy Guillermo Gonzalez"}
            </h1>
            <p className='text-lg mb-8'>
              Desarrollador web especializado en el frontend
            </p>
            <p className='text-lg mb-8'>
              Como desarrollador web, disfruto cada etapa de mi carrera. Me
              apasiona el minimalismo y encontrar formas de simplificar lo que
              parece difícil. Me esfuerzo por completar cada proyecto que
              emprendo y dejarlo listo para su uso, con la calidad y atención al
              detalle que se merece. La constancia es una de mis principales
              virtudes y siempre estoy buscando nuevos retos para superarme a mí
              mismo. ¡Siempre estoy listo para enfrentar desafíos y seguir
              aprendiendo!
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <img
              className='hidden sm:block md:block w-full h-auto lg:max-w-none mx-auto lg:mx-0'
              src={imgFE}
              alt='Front-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
