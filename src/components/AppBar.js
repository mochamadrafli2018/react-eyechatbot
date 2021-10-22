import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar, Typography} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import '../App.css'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'

// material-ui theme
const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
})

export default function PrimarySearchAppBar({logoutHandler}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color='transparent' className='shadow-sm'>
        <Toolbar>
          <Typography 
            sx={{ display: { xs: 'none', sm: 'block' } }} 
            style={{color: theme.palette.primary.main}}>
            <h5 className='fw-bold poppins' >EyeScreening</h5>
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />

          <button onClick={logoutHandler} className="btn btn-md btn-outline-danger">
            <LogoutIcon /> KELUAR
          </button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}