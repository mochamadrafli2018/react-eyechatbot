import * as React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import {Container,Nav,Navbar} from 'react-bootstrap'

export default function AppBar({logoutHandler}) {
  return (
    <div className='poppins'>
      <div className='shadow-sm'>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <button onClick={logoutHandler} className='btn btn-md btn-outline-danger mt-2 mb-2'
              ><LogoutIcon/>KELUAR</button>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}