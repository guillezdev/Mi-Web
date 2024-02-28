import React from 'react'

const experiencias = [
  {
    id: 1,
    title: "SuperLetter",
    description: "SuperLetter es un proyecto personal, creado con la intención de ofrecer un espacio dedicado a los amantes de la literatura. En SuperLetter, todo es gratuito. La plataforma te permite encontrar tus libros favoritos y publicar tus propias obras literarias.",
    bgColor: "bg-gray-400",
    textColor: "text-gray-800"
  },
  {
    id: 2,
    title: "Search-muvie",
    description: "Descubre tus películas y series favoritas.",
    bgColor: "bg-red-400",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Numeria",
    description: "Realiza cálculos en el ámbito de las matemáticas numéricas.",
    bgColor: "bg-gray-400",
    textColor: "text-gray-800"
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
        <div className='w-full h-fit flex flex-col md:flex-row justify-between px-4 text-secundary'>
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border lg:left-1/2" ></div>
              {experiencias.map((exp, index) => (
                <div key={exp.id} className={`mb-8 flex ${index % 2 === 0 ? "justify-between" : "justify-between lg:flex-row-reverse"} items-center w-full ${index % 2 === 0 ? "right-timeline" : "left-timeline"}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-fondo shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-primary">{exp.id}</h1>
                  </div>
                  <div className={`order-1 bg-fondo rounded-lg shadow-xl w-5/12 px-6 py-4`}>
                    <h3 className={`mb-3 font-bold text-white text-xl`}>{exp.title}</h3>
                    <p className="text-sm leading-snug tracking-wide text-secundary text-opacity-100">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia