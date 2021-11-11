import React from 'react'
import {Link} from 'react-router-dom'
import InferenceMachine from './InferenceMachine'
import {Container,Nav,Navbar} from 'react-bootstrap'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ChatbotDashboard() {
  const year= new Date().getFullYear()
  return (
  <div className='poppins'>
    <div class='shadow-sm'>
      <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/chatbot/'>Chatbot</Nav.Link>
              <Nav.Link href='/chatbot/panduan'>Panduan</Nav.Link>
              <Link to={'./'} class='my-auto text-white'>
                <ArrowBackIcon/>Dashboard
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div className='container' style={{ marginTop:'80px',marginBottom:'20px'}}>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card border-5px rounded shadow-sm'>
            <div className='card-body'>
              <p className=''>Ingin coba skreening? coba ketikkan 'mulai' atau tekan tombol mulai</p>
              <h4 className='border-5px rounded-top d-block mb-0 p-1 bg-primary text-white text-left text-center'>Chatbot</h4>
              {/*Chatbot interface*/}
              <InferenceMachine />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer 
      className='p-1 bg-primary text-white text-center' 
      style={{'width':'100%'}}
      >&copy; { year } - Mochamad Rafli Ramadhan
    </footer>
  </div>
  )
}