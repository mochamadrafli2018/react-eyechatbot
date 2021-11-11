import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AppBar from './AppBar';
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
  const toChatbot = async() => {
    history.push('/chatbot')
  }

  return (
    <div class='poppins'>
      {/*AppBar*/}
      <AppBar logoutHandler={logoutHandler} />
      {/*Main Menu*/}
      <div 
        class='container p-3 mx-auto border rounded shadow-lg' 
        style={{marginTop:'80px',maxWidth:'800px',width:'98%'}}
      >
        Hallo <strong className='text-uppercase'>{user.name}</strong>
        <hr />
        <div class='row'>
          <div class='col'>
            <Card 
              style={{width:'98%'}} 
              class='card mx-auto rounded shadow'
            >
              <Card.Img variant='top' src={image1} />
              <Card.Body>
                <Card.Title>
                  Sistem Pakar Skrining Penyakit Mata berbasis Form
                </Card.Title>
                <Card.Text>
                  Diprogram dengan Vue.js, Vuetify dan Hapi
                </Card.Text>
                <a class='btn btn-primary' 
                  href='https://vue-eyescreening.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >Klik untuk Coba</a>
              </Card.Body>
            </Card>
          </div>
          <div class='col'>
            <Card 
              style={{width:'98%'}} 
              class='card mx-auto rounded shadow'
            >
              <Card.Img variant='top' src={image2} />
              <Card.Body>
                <Card.Title>
                  Sistem Pakar Skrining Penyakit Mata berbasis Chatbot
                </Card.Title>
                <Card.Text>
                  Diprogram dengan React.js dan React-Bootstrap
                </Card.Text>
                <Link to={"./chatbot"}>
                  <button class='btn btn-primary'
                  >Klik untuk Coba
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// https://techstacker.com/open-link-ahref-in-new-tab/
// https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html
