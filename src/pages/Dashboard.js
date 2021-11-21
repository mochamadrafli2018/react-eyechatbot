import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router';
import axios from 'axios';
import AppBar from './AppBar';
import Footer from './Footer'
import {Card} from 'react-bootstrap';
import image1 from '../img/Image-1.jpg';
import image2 from '../img/Image-2.jpg';

export default function Dashboard () {
  const [user, setUser] = useState({})
  const history = useHistory();
  const token = localStorage.getItem('token')

  const fetchData = async () => {
    //set axios header with Authorization type + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://localhost:8000/api/user')
    .then((response) => {
      setUser(response.data);
    })
  }
  // to run some side effects in component
  useEffect(() => {
    if(!token) {            // hook useEffect to check if token was not empty
      history.push('/');    // redirect to login page
    }
    fetchData();            //call function 'fetchData'
  }, []);

  const logoutHandler = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    await axios.post('http://localhost:8000/api/logout')
    .then(() => {
      localStorage.removeItem('token'); //remove token from localStorage
      history.push('/login');           //redirect halaman login
    });
  };
  // redirect to chatbot dashboard
  const toChatbotDashboard = () => {
    history.push('/chatbot');
  };

  return (
    <div className='poppins'>
      {/*AppBar*/}
      <AppBar/>
      {/*Main Menu*/}
      <div
        className='container p-2 mx-auto mw-75 border-5px rounded shadow-lg' 
        style={{marginTop:'70px',marginBottom:'50px',width:'98%'}}
      >
        <strong className='text-uppercase'>{user.name}</strong>
        <h4 className='text-center text-primary'>
          Selamat Datang di Web App EyeScreening
        </h4>
        <hr />
        <div className='row'>
          <div className='col'>
            <Card style={{
              width:'97%',
              minWidth:'200px',
              maxWidth:'400px'}} 
              className='card mx-auto mb-2 rounded shadow-hover'
            >
              <div className='bg-image hover-zoom' 
                style={{ maxWidth: '105%' }}
              >
                <Card.Img variant='top' src={image1} className='w-100'/>
              </div>
              <Card.Body>
                <Card.Title className='text-primary'>
                  Sistem Pakar Skrining Penyakit Mata berbasis <strong>Form</strong>
                </Card.Title>
                <Card.Text>
                  Diprogram dengan framework Vue.js, Vuetify dan Hapi
                </Card.Text>
                <a className='btn btn-outline-primary' 
                  href='https://vue-eyescreening.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >Klik untuk Coba</a>
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <Card style={{
              width:'97%',
              minWidth:'200px',
              maxWidth:'400px'}} 
              className='card mx-auto mb-2 rounded shadow-hover'
            >
              <div className='bg-image hover-zoom' 
                style={{ maxWidth: '105%' }}
              >
                <Card.Img variant='top' src={image2} className='w-100'/>
              </div>
              <Card.Body>
                <Card.Title className='text-primary'>
                  Sistem Pakar Skrining Penyakit Mata berbasis <strong>Chatbot</strong>
                </Card.Title>
                <Card.Text>
                  Diprogram dengan library React.js dan React-Bootstrap
                </Card.Text>
                <button 
                  onClick={toChatbotDashboard} 
                  className='btn btn-outline-primary'
                >Klik untuk Coba
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}