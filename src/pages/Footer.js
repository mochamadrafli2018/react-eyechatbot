import React from 'react'
export default function Footer(){
  const year= new Date().getFullYear()
  return(
    <footer className='p-1 bg-primary text-white text-center' 
      style={{'width':'100%'}}
    >&copy; { year } - Mochamad Rafli Ramadhan</footer>
  )
}