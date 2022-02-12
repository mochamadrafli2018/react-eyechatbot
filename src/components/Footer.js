export default function Footer () {
  const year= new Date().getFullYear();
  return (
    <footer className='bg-slate-900 footer-2-3 h-full poppins px-4 py-2 text-center transition-all duration-500 linear'>
      <p className='mx-auto my-1 text-gray-400'>
        Released under{' '}
        <a href="https://mit-license.org/" 
          className="text-gray-400 hover:text-white"
          target='_blank' rel='noreferrer'
        >MIT License</a> and Deployed on{' '}
        <a href='https://www.heroku.com' 
          target='_blank' rel='noreferrer' 
          className='text-gray-400 hover:text-white'
        >Heroku</a>
      </p>
      <p className='mx-auto my-2 text-gray-400'>
        &copy; { year } - Mochamad Rafli Ramadhan
      </p>
      <p className='mx-auto mt-2 mb-1 text-gray-400'>
        Contact Developer
      </p>
      <div className='font-medium mx-auto my-1 mb-0 space-x-8 text-center'
        style={{'cursor': 'pointer'}}
      >
        <a 
          href='https://www.github.com/mochamadrafli2018' 
          className='lg:text-lg text-md text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-github fa-lg' role='img' aria-label='GitHub'></i>
        </a>
        <a 
          href='https://www.instagram.com/rafli.r.rmdhn'
          className='lg:text-lg text-md text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-instagram' role='img' aria-label='Instagram'></i>
        </a>
        <a 
          href='https://www.linkedin.com/in/mochamad-rafli-ramadhan'
          className='lg:text-lg text-md text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi-linkedin' role='img' aria-label='Linkedin'></i>
        </a>
        <a 
          href='http://wa.me/088227867544'
          className='lg:text-lg text-md text-gray-400 hover:text-white' 
          target='_blank' rel='noreferrer'
        >
          <i className='bi bi-whatsapp' role='img' aria-label='Whatsup'></i>
        </a>
      </div>
    </footer>
  )
}