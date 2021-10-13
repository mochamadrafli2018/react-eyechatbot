import React from 'react'
import ReactDOM from 'react-dom'
import PrimarySearchAppBar from './AppBar'
// import LoginPage from '../pages/LoginPage'
import '../App.css'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
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

const useStyles = makeStyles({
  form: {
    backgroundColor: 'white',
    borderRadius: '7px',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.4)',
    color: theme.palette.primary.main,
    margin: '0 auto',
    padding: '2px 10px',
    width: '98%',
    maxWidth: '500px',
  },
  formTitle:{
    border: '1px solid black',
    fontWeight: 'bold',
    margin: '5px auto',
    padding: '0',
    textAlign: 'center'
  },
  formSubTitle:{
    border: '1px solid #c4c4c4',
    margin: '5px auto',
    padding: '0'
  },
  main: {
    border: '1px solid black',
    width: '100%'
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    margin: '65px auto 0',
    padding: '0',
    textAlign: 'center',
    width: '100%',
    maxWidth: '615px',
  },
  subtitle: {
    color: 'black',
    margin: '0 auto',
    padding: '0 0',
    textAlign: 'center',
    width: '100%',
    maxWidth: '615px',  
  },
})

const Form = () => {
  const classes = useStyles()
  return (
    <div className={classes.form}>
      <p className={classes.formTitle}>Jawab Pertanyaan Berikut ini</p>
      <p className={classes.formSubTitle}>Apakah mata anda merah ?</p>
    </div>
  )
}

export default function Main() {
  const classes = useStyles()
  return (
    <div className='container poppins'>
      <nav>
        <PrimarySearchAppBar/>
      </nav>
      <main className={classes.main}>
        <h2 className={classes.title}>Chatbot Skreening Penyakit Mata</h2>
        <p className={classes.subtitle}>Ingin coba skreening? jawab pertanyaan berikut</p>
        <Form/>
        
      </main>
    </div>
  )
}
/*
if (document.getElementById('main')) {
  ReactDOM.render(<Main />, document.getElementById('main'))
}*/
