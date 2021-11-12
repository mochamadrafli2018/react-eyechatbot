import * as React from 'react'
import OverlayButton from './Overlay'
import {Container,Nav,Navbar} from 'react-bootstrap'

export default function AppBar({logoutHandler}) {
  return (
    <div className='poppins'>
      <div className='shadow-sm'>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand>
              EyeScreening
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <OverlayButton 
                explanation={'Tentang Sistem Pakar ?'} 
                text={`
                  Sistem pakar merupakan sistem yang bekerja dengan menirukan proses pemikiran seorang pakar.
                `} 
              />
              <Nav.Link>
                <a href='https://www.github.com/mochamadrafli2018' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-github mx-2' role='img' aria-label='GitHub'></i>
                </a>
                <a href='https://www.instagram.com/rafli.r.rmdhn' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-instagram mx-2' role='img' aria-label='Instagram'></i>
                </a>
                <a href='https://www.linkedin.com/in/mochamad-rafli-ramadhan' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-linkedin mx-2' role='img' aria-label='Linkedin'></i>
                </a>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={logoutHandler} className=''
              ><i className="bi bi-box-arrow-left"></i> KELUAR</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}