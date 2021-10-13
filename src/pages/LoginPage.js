import React, {useState, useEffect} from 'react'
import useHistory from 'react-router'
import axios from 'axios'

import { makeStyles } from '@mui/styles';
// import FormControl from '@mui/material/FormControl';
// import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

const LoginPageStyles = makeStyles({
  formLoginTitle:{
    fontSize: '18',
    fontWeight: 'bold',
    margin: '5px auto',
    padding: '0',
    textAlign: 'center'
  },
});

export default function Login () {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validation, setValidation] = useState([])
  const history = useHistory()

  useEffect(() => {
    // check token
    if(localStorage.getItem('token')) {
      // redirect page dashboard
      history.push('/dashboard');
    }
  }, [])
  
  const LoginHandler = async(e) => {
    e.preventDefault();
    
    //initialize formData
    const formData = new FormData();
    //append data to formData
    formData.append('email', email);
    formData.append('password', password);
    await axios.post('http://localhost:8000/api/login', formData)
    .then((response) => {
      //set token on localStorage
      localStorage.setItem('token', response.data.token);
      //redirect to dashboard
      history.push('/dashboard');
    })
    .catch((error) => {
      //assign error to state "validation"
        setValidation(error.response.data);
    })
  }
  // styling
  const classes = LoginPageStyles()
  
  return (
      <Box
        component="form"
        sx={{
          boxShadow: '0 0 7px 0 rgba(0, 0, 0, 0.4)',
          color: theme.palette.primary.main,
          mx: "auto", 
          my: 1, 
          p: 1,
          width: '90%',
          maxWidth: '300px',
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={LoginHandler}>
          <p className={classes.formLoginTitle}>
            Silahkan Login Terlebih Dahulu
          </p>
          <Box sx={{mx: 'auto', my: 1, p: 1, width: '90%'}}>
            <TextField 
              fullWidth
              required
              id="outlined-password-input"
              label="Nama"
              value={nama}
            />
          </Box>
          <Box sx={{mx: 'auto', my: 1, p: 1, width: '90%' }}>
            <TextField
              fullWidth
              required
              id="outlined-password-input"
              label="Email"
              value={email}
            />
          </Box>
          <Box sx={{mx: 'auto', my: 1, p: 1, width: '90%' }}>
            <TextField
              fullWidth
              required
              id="outlined-password-input"
              label="Password"
              value={password}
            />
          </Box>
          <Box sx={{mx: 'auto', my: 1, p: 1, width: '90%'}}>
            <Button 
            fullWidth
            variant="contained"
              onClick={() => {}}
            >Daftar</Button>
          </Box>
          <button type="submit" className="btn btn-primary">REGISTER</button>
        </form>
      </Box>
  )
}

/*
if (document.getElementById('login')) {
    ReactDOM.render(<LoginPage />, document.getElementById('login'));
}*/