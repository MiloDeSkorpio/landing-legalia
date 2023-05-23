import React from 'react'
//import data
import { contacto } from '../data'
//import components
// import emailjs from '@emailjs/browser'
const Contacto = () => {
  // Metodo envio 

  //destrucutre contact 
  const { form, title } = contacto
  return (
    <section className='bg-white section' id='contacto'>
    <div className='container mx-auto max-w-[920px]'>
      {/** title **/}
      <h2
        className='title mb-10 lg:mb-20 text-center  mx-auto'
        data-aos='fade-up'
        data-aos-delay='200'
      >{title}</h2>
      <div className='flex flex-col-reverse gap-4 lg:flex-row justify-center items-center'>
        <div
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='800'
        >
          {/** form   onSubmit={sendEmail} **/}
          <form className='bg-[#e7d4b1] max-w-[550px] rounded-lg mb-[10px] p-2 py-4 shadow-lg lg:w-[450px]' >
            <h2 className='text-4xl font-semibold mb-5 text-center'>Ingresa tus Datos</h2>
            <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
              <label className='font-semibold pr-4' for='nombre'>Nombre</label>
              <input
                type='text'
                className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                placeholder={form.ph1}
                name='nombre'
                id='nombre'
                required
              />
            </div>
            <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
              <label className='font-semibold pr-4' for='email'>Correo</label>
              <input
                type='email'
                className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                placeholder={form.ph2}
                name='email'
                id='email'
                required
              />
            </div>
            <div className='h-[62px] p-[7px] flex flex-col items-center my-4'>
              <label className='font-semibold pr-4' for='asunto'>Asunto</label>
              <input
                type='text'
                className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                placeholder={form.ph3}
                name='asunto'
                id='asunto'
                required
              />
            </div>
            <div className='h-[170px] p-[7px] flex flex-col items-center my-4'>
              <label className='font-semibold pr-4' for='mensaje'>Mensaje</label>
              <textarea
                className='w-full h-full p-6 border-none rounded-lg outline-none placeholder:text-slate-500 '
                placeholder={form.ph4}
                name='mensaje'
                id='mensaje'
                required
              />
            </div>
            <button
              id='buttonForm'
              className='btn btn-sm bg-[#c89e51] hover:bg-[#ae8537] w-full text-white'
            >{form.btnText}</button>
          </form>
          <span className='text-sm text-light'>{form.smallText}</span>
        </div>
        <div
          data-aos='fade-down'
          data-aos-offset='200'
          data-aos-delay='800'
          className='flex-1 aspect-ratio aspect-ratio-16/9'
        >
          <img
            src={form.logo}
            alt='logof'
            className='rounded-md object-cover'
          />
        </div>
      </div>
    </div>

  </section>
  )
}

export default Contacto