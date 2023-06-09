import React from 'react'
//import data
import { footer } from '../data.js'
// import components
import Copyright from './Copyright.jsx'

const Footer = () => {
  const { title, address, social, telefono } = footer
  return (
    <footer className='py-8 bg-[#e7d4b1]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/** logo **/}
          <div
            className='text-center'
          >
            <div className='pb-4'>
            <h2 className='text-black text-xl font-semibold'>{address}</h2>
            <p>{telefono}</p>

            </div>
          {/** social icons **/}
          <h2 className='text-xl font-semibold mb-4'>{title}</h2>
          <div 
            className='text-center '
          >
            <ul className='flex justify-center gap-4'>
              {social.map((item, index) => {
                //destrucuture icon
                const { href, icon, name } = item
                return (
                  <li key={index} className='items-center w-[48px] h-[80px]'>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <img src={icon} alt='social' className='h-12 w-12' loading="lazy"/>
                    </a>
                    <p className='text-xs text-center'>{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer