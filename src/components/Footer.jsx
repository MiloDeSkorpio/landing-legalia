import React from 'react'
//import data
import { footer } from '../data.js'
// import components
import Copyright from './Copyright.jsx'

const Footer = () => {
  const { title, logo, social } = footer
  return (
    <footer className='py-16 bg-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/** logo **/}
          <div
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='200'
            className='aspect-ratio aspect-ratio-16/9'
          >
            <img
              src={logo}
              alt='logof'
              className='w-40 h-20 object-cover'
            />
          </div>
          {/** social icons **/}
          <div>
            <h2 className='text-xl font-semibold mb-4'>{title}</h2>
            <ul className='flex gap-x-[20px]'>
              {social.map((item, index) => {
                //destrucuture icon
                const { href, icon } = item
                return (
                  <li key={index}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <img src={icon} alt='social' className='h-12 w-12' />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer