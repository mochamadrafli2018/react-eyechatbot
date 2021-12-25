import React from 'react'
import Footer from '../tailwindcss-components/Footer';

export default function FormTesting () {
  return (
    <div>
      <div 
        className='container p-1 poppins w-100 mb-2 border rounded shadow-sm '
        style={{maxWidth:'640px',marginTop:'60px'}}
      >
        <iframe
          title='form UAT'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfMfIO_wa6TJKg5SrgadHuwDWlnNFDpk1P-PX1_vwHjumbLVg/viewform?embedded=true'
          height='3150' 
          frameborder='0'
          className='mx-auto w-100'
        >Loading…
        </iframe>
      </div>
      <Footer styleFooter={{position:'relative'}}/>
    </div>
  )
}