import React from 'react'
//import data
import { contacto } from '../data.js'
//import components
import emailjs from '@emailjs/browser'
const Contacto = () => {
  // Metodo envio 
  const sendEmail = (e) => {
    e.preventDefault()
    const serviceID = 'default_service';
    const templateID = 'template_gbz69do';
    emailjs.sendForm(serviceID, templateID, e.target, 'xrACECaswaWqwDxe7')
      .then(() => {
        alert('Mensaje Enviado!');
        window.location.href = '/'
      }, (error) => {
        alert(JSON.stringify(error));
        window.location.href = '/'
      })
  }
  //destrucutre contact 
  const { form, title } = contacto
  return (
    <section className='bg-white section min-h-[900px] ' id='contacto'>
      <div className='container mx-auto p-8'>
        {/** title **/}
        <h2
          className='title mb-10 lg:mb-20 text-center  mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >{title}</h2>
        <div className='flex flex-col-reverse gap-8 lg:flex-row justify-center items-center'>
          <div
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='800'
          >
            {/** form    agregar ak form **/}
            <form onSubmit={sendEmail} className='bg-[#e7d4b1] max-w-[667] min-h-[667] rounded-lg mb-[10px] p-2 py-4 shadow-lg w-[350px] md:w-[500px]' >
              <h2 className='text-4xl font-semibold mb-5 text-center'>Ingresa tus Datos</h2>
              <div className='h-[62px] p-[7px] flex flex-col my-4'>
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
              <div className='h-[62px] p-[7px] flex flex-col my-4'>
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
              <div className='h-[62px] p-[7px] flex flex-col my-4'>
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
              <div className='h-[170px] p-[7px] flex flex-col my-4'>
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
            className='flex-1 aspect-ratio aspect-ratio-16/9 py-0'
          >
            <img
              src={form.logo}
              alt='logof'
              className='rounded-md object-cover'
              loading="lazy"
              height="788"
              width="940"
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contacto