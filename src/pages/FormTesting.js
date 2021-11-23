import React from 'react'
import Footer from '../components/Footer';

export default function FormTesting () {
  return (
    <div className='container p-1 poppins' 
    style={{marginTop:'75px',marginBottom:'70px'}}>
      <iframe
        title='form UAT'
        src='https://docs.google.com/forms/d/e/1FAIpQLSfMfIO_wa6TJKg5SrgadHuwDWlnNFDpk1P-PX1_vwHjumbLVg/viewform?embedded=true'
        height='3150' 
        frameborder='0'
        className='mx-auto my-2 card border shadow-sm w-100'
        style={{maxWidth:'640px'}}
      >Loading…
      </iframe>
      <Footer/>
    </div>
  )
}