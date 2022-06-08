import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ChatbotNavbar from '../../components/ChatbotNavbar';
import InferenceMachine from '../../components/InferenceMachine';

export default function UserDashboard() {
  // authorization
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    // get token from local storage when browser reload
    const token = localStorage.getItem('token');
    if(!token) { 
      navigate('/login'); 
    }
    getUserData(token);
  }, [navigate]);
  
  const getUserData = async (token) => {
    // set axios header with type Authorization + Bearer token
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`
    await axios.get('https://express-mongoose-validator.herokuapp.com/api/verify')
    .then((response) => {
      setUser(response.data);
    })
    .catch((error) => {
      // setErrorGetUserData(error.message);
    })
  }
  return (
    <div className='bg-sky-100 h-screen m-0 pt-16'>  
      <ChatbotNavbar/>

      <main className='border-2 border-blue-400 max-w-3xl mx-auto overflow-hidden rounded shadow-lg w-full'>
        <div className='bg-primary roboto text-center text-white w-full'>
          Hallo, {user.name}
        </div>
        <InferenceMachine/>
      </main>
    </div>
  )
}
