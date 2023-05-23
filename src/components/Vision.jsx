import React from 'react'
//import data
import { vision } from '../data'
//
const Vision = () => {
  const { title, subtitle, btnLink, btnIcon, image } = vision
  return (
    <section className='bg-white section' id='vision'>
      <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          {/** image **/}
          <div
            className='flex-1 aspect-ratio aspect-ratio-16/9'
            data-aos='fade-right'
            data-aos-offset='500'
          >
            <img className='rounded-md object-cover' src={image} alt='Imagen de Visión' />
          </div>
          {/** text **/}
          <div
            className='flex-1'
            data-aos='fade-left'
            data-aos-offset='600'
          >
            <h2 className='title'>{title}</h2>
            <p className='lead'>{subtitle}</p>
            <a className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all' href='#servicios'>
              {btnLink}<img
                src={btnIcon}
                alt='icon'
                className='text-[#d1ae6c]'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision