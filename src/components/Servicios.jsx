import React, { useState } from 'react'
//import data
import { servicios } from '../data'
//import images
import ArrowImg from '../assets/img/arrow-right-2.svg'
const Servicios = () => {
  //set index
  const [index, setIndex] = useState(1)
  //destructure Servicios
  const { cards, title, img, subtitle } = servicios
  return (
    <section className='bg-white section' id='servicios'>
    <div className='container mx-auto'>
      {/** title **/}
      <h2
        className='h2 mb-10 lg:mb-15 text-center'
        data-aos='fade-up'
        data-aos-delay='200'
      >{title}</h2>
      <div className='flex flex-col lg:grid lg:grid-cols-3'>
        <div
          data-aos='fade-right'
          data-aos-offset='300'
          className='flex-1 aspect-ratio aspect-ratio-16/9'
        >
        {/** subtitle **/}
        <h3
          className='text-3xl lg:text-5xl font-semibold mb-15 lg:mb-2 text-center'
          data-aos='fade-up'
          data-aos-delay='300'
        >{subtitle}</h3>
          <img
            src={img}
            alt='logof'
            className='rounded-md object-cover'
            loading="lazy"
          />
        </div>
        {/** cards **/}
        <div className='flex flex-col mb-1 md:grid md:col-span-2 md:grid-cols-3 gap-2'>
          {cards.map((card, cardIndex) => {
            //destructure card
            const { name, delay } = card
            //card
            return (
              <div
                key={cardIndex}
                data-aos='fade-up'
                data-aos-delay={delay}
                data-aos-offset='300'
              >
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${cardIndex === index
                    ? 'bg-[#dabe8b] shadow-xl'
                    : 'border border-[#eddfc5]'
                    }  w-[220px] h-[140px] rounded-[15px] md:w-[220px] bg-[#d1ae6c] flex flex-col items-center justify-center mx-auto p-[10px] text-center cursor-pointer transition-all                  
                `}
                >
                  {/** card name **/}
                  <div className='text-[20px] font-semibold mb-3'>{name}</div>
                  {/** card img **/}
                  {index === cardIndex && <a href='#contacto'><img src={ArrowImg} alt='rowcard' loading="lazy" /></a>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Servicios