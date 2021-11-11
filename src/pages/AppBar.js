import * as React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
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
    <Navbar bg='' expand='lg' fixed='top' color='transparent' className='shadow-sm'>
      <Container>
        <Navbar.Brand href='#home' className='fw-bold poppins'
          style={{color: theme.palette.primary.main}}
        >EyeScreening</Navbar.Brand>
        <Nav className='me-auto'></Nav>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <button onClick={logoutHandler}
              className='btn btn-md btn-outline-danger mt-2'
            ><LogoutIcon/>KELUAR</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}