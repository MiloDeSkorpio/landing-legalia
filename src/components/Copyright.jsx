import React from 'react'
//import dara
import { copyright } from '../data'

const Copyright = () => {
  const { link, copyText} = copyright
  return (
    <div>
      {/** links **/}
      <div
        className='flex flex-col items-center gap-y-4 lg:flex-row justify-between'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-delay='200'
      >
        <a className='hover:text-blue-600 transition' href={link.href}>{link.name}</a>
      </div>
      {/** copyright **/}
      <div>{copyText}</div>
    </div>
  )
}

export default Copyright