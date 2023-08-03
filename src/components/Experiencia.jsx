import React from 'react'

function Experiencia() {
  return (
    <section className='bg-fondo'>
      <div className='max-w-7xl mx-auto h-fit py-16'>
      <div className='flex flex-col sm:items-end px-4'>
          <h2 className='text-6xl md:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none '>
          Experiencia
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-secundary'>
           Mi recorrido <span className="text-primary">laboral</span> como desarollador.
          </h1>
        </div>
        <div className='w-full h-fit flex flex-col md:flex-row justify-between px-4 text-white'>
          contenido

        </div>
      </div>
    </section>
  )
}

export default Experiencia