import React from 'react';
import InferenceMachine from './InferenceMachine';
import Footer from './Footer'
import {Container,Nav,Navbar} from 'react-bootstrap';

export default function ChatbotDashboard() {
  return (
    <div className='poppins'>
      <div className='shadow-sm'>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/guide'><i class="bi bi-arrow-bar-right"></i> Panduan</Nav.Link>
            </Nav>
            <Nav className=''>
              <Nav.Link href='/'><i class="bi bi-arrow-bar-left"></i>  Dashboard</Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='container mb-3 p-1 mw-75' style={{marginTop:'70px'}}>
        <div className='row'>
          <div className='card border-5px rounded shadow-lg'>
            <div className='card-body p-2'>
              <p className='mb-0'>Mulai skreening? ketik atau tekan tombol mulai</p>
              <h4 className='border-5px rounded-top d-block mb-0 p-1 bg-primary text-white text-left text-center'>Chatbot</h4>
              {/*Chatbot interface*/}
              <InferenceMachine />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};