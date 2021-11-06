import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import AppBar from './AppBar'
import Chatbot from './Chatbot'

export default function Dashboard() {
  const year= new Date().getFullYear()
  const [user, setUser] = useState({})
  //const [isLoading, setIsLoading] = useState(true)
  const history = useHistory();
  const token = localStorage.getItem('token')

  const fetchData = async () => {
    //set axios header with Authorization type + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://localhost:8000/api/user')
    .then((response) => {
      setUser(response.data)
      //setIsLoading(false)
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
      history.push('/');                //redirect halaman login
    });
  };

  let handleScroll = (e) => { //https://kempsterrrr.xyz/articles/handling-scroll-events-in-react
    if (e.target.classList.contains("on-scrollbar") === false) {
        e.target.classList.add("on-scrollbar");
    }
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
    }
  }

  return (
  <div className='poppins'>
    {/*AppBar*/}
    <AppBar logoutHandler={logoutHandler} />
    <div className='container' style={{ marginTop:'70px',marginBottom:'20px'}}>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card border-5px rounded shadow-sm'>
            <div className='card-body'>
              Hallo <strong className='text-uppercase'>{user.name}</strong>
              <hr />
              <p className=''>Ingin coba skreening? coba ketikkan sesuatu atau lihat <a href='#id'>panduan pengguna</a></p>
              <h4 className='border-5px rounded-top d-block mb-0 p-1 bg-primary text-white text-left text-center'>Chatbot</h4>
              {/*Chatbot interface*/}
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer 
      className='d-block p-1 bg-primary text-white text-center' 
      fixed='bottom'
      style={{'width':'100%'}}
      >&copy; { year } - Mochamad Rafli Ramadhan
    </footer>
  </div>
  )
}