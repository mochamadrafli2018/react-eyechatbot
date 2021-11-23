import React from 'react'
export default function Footer(){
  const year= new Date().getFullYear();

  return(
    <footer
      style={{position:'fixed',bottom:'0'}} 
      className='py-0 px-1 w-100 bg-primary text-white text-center'
    >
      <div className='mx-auto'>
        &copy; { year } - Mochamad Rafli Ramadhan - under MIT License
      </div>
    </footer>
  )
}