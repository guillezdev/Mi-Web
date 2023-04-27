import React from "react";
import CardProfile from "./CardProfile";
import imgfront from "../assets/Frontend.svg";
function Home() {
  return (
    <header className='max-w-7xl mx-auto' id='home'>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex-1 px-4 lg:text-left'>
          <h1 className='text-4xl font-bold mb-4'>{"Guillermo Gonzalez"}</h1>
          <div className='loader'>
            <div className='scanner'>
              <span className='select-none'>Desarrollador_Frontend....</span>
            </div>
          </div>
          <p className='text-lg text-justify mb-8'>
            Como desarrollador web me apasiona encontrar formas de simplificar
            lo que parece difícil. Me esfuerzo por completar cada proyecto que
            emprendo, con la calidad y atención que se merece. La constancia es
            una de mis principal virtud. Si tienes un Proyecto en mente no dudes en contactar conmigo para hacerlo realidad!
          </p>
        </div>
        <div className='w-full hidden md:block flex-1'>
          <img src={imgfront} alt='' />
        </div>
      </div>
    </header>
  );
}

export default Home;
