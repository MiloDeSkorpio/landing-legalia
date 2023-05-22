import React from 'react'
//import data
import { vision } from '../data'
//
const Vision = () => {
  const { title, subtitle, btnLink, btnIcon, image } = vision
  return (
    <section className='section bg-white' id='vision'>
      <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          {/** text **/}
          <div
            className='flex-1'
            data-aos='fade-rigth'
            data-aos-offset='400'
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
          {/** image **/}
          <div
            className='flex-1'
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <img src={image} alt='feature' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision