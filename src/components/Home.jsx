import React from "react";
import CardProfile from "./CardProfile";
import imgfront from "../assets/Frontend.svg";
function Home() {
  return (
    <div className='relative max-w-7xl mx-auto' id='home'>
      <div className='flex flex-row'>
        <div className='flex-1 px-4 lg:text-left'>
          <h4 className='text-4xl font-bold mb-4'>{"¡Hey!"}</h4>
          <h1 className='text-6xl font-bold mb-4'>
            {"Soy Guillermo Gonzalez"}
          </h1>
          <div className='loader'>
            <div className='scanner'>
              <span className="select-none">12312312312313123123123111123</span>
            </div>
          </div>
          <p className='text-lg text-justify mb-8'>
            Como desarrollador web, disfruto cada etapa de mi carrera. Me
            apasion encontrar formas de simplificar lo que parece difícil. Me
            esfuerzo por completar cada proyecto que emprendo, con la calidad y
            atención que se merece. La constancia es una de mis principales
            virtudes y siempre estoy buscando nuevos retos para superarme a mí
            mismo. ¡Siempre estoy listo para enfrentar desafíos y seguir
            aprendiendo!
          </p>
        </div>
        <div className='w-full hidden md:block flex-1'>
          <CardProfile img={imgfront} />
        </div>
      </div>
    </div>
  );
}

export default Home;
