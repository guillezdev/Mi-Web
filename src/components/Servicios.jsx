import React from 'react'

function Servicios() {
  return (
    <section className='bg-black/50'>
      <div className='max-w-7xl mx-auto h-fit py-16'>
      <div className='flex flex-col px-4'>
          <h2 className='text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-primary/10 pb-5 mb-4 select-none '>
          Servicios
          </h2>
          <h1 className='text-4xl mb-10 -mt-16 max-w-2xl ml-6 text-secundary'>
           Algunos de los <span className="text-primary">servicios</span> que presto.
          </h1>
        </div>
        <div className='w-full h-fit flex flex-col md:flex-row justify-between px-4 text-white'>
          contenido

        </div>
      </div>
    </section>
  )
}

export default Servicios