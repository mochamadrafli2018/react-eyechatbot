import React from 'react';
import '../App.css';
import '../index.css';

export default function Footer () {
  const year= new Date().getFullYear();
  const lastUpdated = new Date(document.lastModified);
  const dayName = lastUpdated.getDay();
  const weekDaysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentDate = weekDaysArr[dayName] + ', ' 
      + lastUpdated.getDate()        + '/' 
      + (lastUpdated.getMonth() + 1) + '/' 
      + lastUpdated.getFullYear()    + ', ' 
      + lastUpdated.getHours()       + ':' 
      + lastUpdated.getMinutes()     + ':' 
      + lastUpdated.getSeconds();

  return (
    <footer class='bg-slate-900 footer-2-3 h-full poppins px-4 py-2 transition-all duration-500 linear'>
      <div class='font-medium text-center my-1 mb-0 space-x-8'
        style={{'cursor': 'pointer'}}
      >
        <p className='my-1 text-gray-400'>
          Released under{' '}
          <a href="https://mit-license.org/" 
            class="text-gray-400 hover:text-white"
            target='_blank' rel='noreferrer'
          >MIT License</a> and Deployed on{' '}
          <a href='https://www.heroku.com' 
            target='_blank' rel='noreferrer' 
            className='text-gray-400 hover:text-white'
          >Heroku</a>
        </p>

        <p className='my-1 text-gray-400'>
          Contact Me :
        </p>
        <a 
          href='https://www.github.com/mochamadrafli2018' 
          className='text-lg text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-github fa-lg' role='img' aria-label='GitHub'></i>
        </a>
        <a 
          href='https://www.instagram.com/rafli.r.rmdhn'
          className='text-lg text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-instagram' role='img' aria-label='Instagram'></i>
        </a>
        <a 
          href='https://www.linkedin.com/in/mochamad-rafli-ramadhan'
          className='text-lg text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-linkedin' role='img' aria-label='Linkedin'></i>
        </a>
        <a 
          href='http://wa.me/088227867544'
          className='text-lg text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i class='bi bi-whatsapp' role='img' aria-label='Whatsup'></i>
        </a>
      </div>
      <p class='my-2 text-center text-gray-400'>
        &copy; { year } - Mochamad Rafli Ramadhan
      </p>
      <p className='my-1 text-center text-gray-400'>
        <i class="bi bi-clock-history"></i> 
        {' '}Last Updated : {currentDate}
      </p>
    </footer>
  )
}