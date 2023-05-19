import React from 'react'
//import data
import { nav } from '../data.js'

const Nav = () => {
  return (
    <div className='bg-white w-full h-full'>
    <ul className='h-full flex flex-row justify-center items-center gap-x-8'>
      {nav.map((item, index) => {
        //destrucure item
        const { href, name } = item
        return (
          <li key={index}>
            <a className='link text-black text-xl' href={href}>
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