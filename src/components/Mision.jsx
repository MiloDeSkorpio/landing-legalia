import React from 'react'
//import data
import { mision } from '../data.js'
//import icons
import { HiOutlineChevronDown } from 'react-icons/hi'
const Mision = () => {
  //destructure mision data
  const {title, subtitle, btnLink, image, btnText, compText } = mision
  return (
    <section className='bg-white section' id='mision'>
      <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
        <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
          <div className='flex-1'>
            <h1
              className='title mb-2 lg:mb-5'
              data-aos="fade-down"
              data-aos-delay='500'
            >
              {title}
            </h1>
            <p
              className='text-gray-500 text-2xl mb-5 lg:mb-10'
              data-aos="fade-down"
              data-aos-delay='600'
            >
              {subtitle}
            </p>
            <div
              className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'
              data-aos="fade-down"
              data-aos-delay='700'
            >
              <a className='btn btn-md lg:btn-lg btn-accent flex justify-center lg:gap-x-4 w-52' href={btnLink}>
                {btnText}
                <HiOutlineChevronDown />
              </a>
              <span className='text-gray-500 lg:mb-0'>{compText}</span>
            </div>
          </div>
          <div
            className='flex-1'
            data-aos="fade-up"
            data-aos-delay='800'
          >
            <img className='rounded-xl' src={image} alt="Imagen de Mision" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mision