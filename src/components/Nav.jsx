import React from 'react'
//import data
import { nav } from '../data.js'

const Nav = () => {
  return (
    <div className='bg-blue-600 w-full h-full'>
    <ul className='h-full flex flex-col justify-center items-center gap-y-8'>
      {nav.map((item, index) => {
        //destrucure item
        const { href, name } = item
        return (
          <li key={index}>
            <a className='link text-white text-xl' href={href}>
              {name}
            </a>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default Nav