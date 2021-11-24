import React from 'react'
export default function Footer({styleFooter}){
  const year= new Date().getFullYear();

  return(
    <footer
      className='w-100 bg-primary text-white text-center'
      style={styleFooter}
    >
      &copy; { year } - Mochamad Rafli Ramadhan
    </footer>
  )
}