import React from 'react'
//import dara
import { copyright } from '../data'

const Copyright = () => {
  const {  copyText} = copyright
  return (
    <div
    data-aos='fade-left'
    data-aos-delay='200'
    >
      {/** links **/}
      <div
        className='flex flex-col items-center gap-y-4 lg:flex-row justify-between'
      >
      {/** copyright **/}
      <div>{copyText}</div>
      </div>
    </div>
  )
}

export default Copyright