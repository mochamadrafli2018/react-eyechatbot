import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function FormTesting () {
  return (
    <div>
      <Navbar/>
      <div 
        className='border-2 container p-1 poppins mb-2 rounded shadow-sm w-full'
        style={{maxWidth:'640px',marginTop:'60px'}}
      >
        <iframe
          title='form UAT'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfMfIO_wa6TJKg5SrgadHuwDWlnNFDpk1P-PX1_vwHjumbLVg/viewform?embedded=true'
          height='3150' 
          frameborder='0'
          className='mx-auto w-full'
        >Loading…
        </iframe>
      </div>
      <Footer styleFooter={{position:'relative'}}/>
    </div>
  )
}