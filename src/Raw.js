import { useState, useEffect } from 'react';
import {useHistory} from 'react-router';
import axios from 'axios';

// This was unused file Program
// But can be used if it neccessary 

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
    return (
      <div>
        <strong className='text-uppercase'>{user.name}</strong>
        <button className='btn btn-primary' onClick={logoutHandler}></button>
      </div>
    )
}  