import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap';
import Footer from './Footer';

export default function FormTesting () {
  return (
    <div class='poppins'>
      <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
          <Nav calssName='me-auto'></Nav>
          <Nav className=''>
            <Nav.Link href='/chatbot'>
              <i className='bi bi-box-arrow-left'></i> KEMBALI
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='container mb-3' style={{marginTop:'75px'}}>
        <iframe
          title='form UAT'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfMfIO_wa6TJKg5SrgadHuwDWlnNFDpk1P-PX1_vwHjumbLVg/viewform?embedded=true' 
           
          height='2930' 
          frameborder='0'
          className='mx-auto card border shadow-sm w-100'
          style={{maxWidth:'640px'}}
        >Loading…
        </iframe>
      </div>
      <Footer/>
    </div>
  )
}