import * as React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import '../App.css'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'
import {Container,Nav,Navbar} from 'react-bootstrap'

// material-ui theme
const theme = createTheme({
  palette:{
    primary:{main: blue[700]},
  },
})

export default function AppBar({logoutHandler}) {
  return (
    <div>
      <Navbar 
        bg='' 
        expand='lg' 
        fixed='top' 
        color='transparent' 
        className='shadow-sm'
      >
        <Container>
          <Navbar.Brand 
            href='#home' 
            className='fw-bold poppins'
            style={{color: theme.palette.primary.main}}
          >EyeScreening</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
            </Nav>
            <Nav>
              <button 
                onClick={logoutHandler} 
                className='btn btn-md btn-outline-danger justify-content-end'
              >
                <LogoutIcon /> KELUAR
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}