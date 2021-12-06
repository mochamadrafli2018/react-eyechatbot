import React from 'react';
// set up tailwind css
import '../index.css';

export default function Contact() {
  return (
    <div 
      className='container bg-primary mx-auto mt-3 p-2 rounded-md text-center  w-100'
      style={{marginBottom:'50px',maxWidth:'600px'}}
    >
      <a 
        href='https://www.github.com/mochamadrafli2018'
        className='text-light text-xl' target='_blank' rel='noreferrer'
      >
        <i className='bi-github fa-lg mx-3 my-1' role='img' aria-label='GitHub'></i>
      </a>
      <a 
        href='https://www.instagram.com/rafli.r.rmdhn'
        className='text-light text-xl' target='_blank' rel='noreferrer'
      >
        <i className='bi-instagram mx-3 my-1' role='img' aria-label='Instagram'></i>
      </a>
      <a 
        href='https://www.linkedin.com/in/mochamad-rafli-ramadhan'
        className='text-light text-xl' target='_blank' rel='noreferrer'
      >
        <i className='bi-linkedin mx-3 my-1' role='img' aria-label='Linkedin'></i>
      </a>
      <a 
        href='http://wa.me/088227867544'
        className='text-light text-xl' target='_blank' rel='noreferrer'
      >
        <i class='bi bi-whatsapp mx-3 my-1' role='img' aria-label='Whatsup'></i>
      </a>
    </div>
  )
}