import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../components/ChatbotNavbar';
import Footer from '../../components/Footer';
import InferenceMachine from '../../components/InferenceMachine';

export default function UserDashboard() {
  // const navigate = useNavigate();
  
  // authorization
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUserData = async (token) => {
      //set axios header with type Authorization + Bearer token
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`
      await axios.get('https://express-mongoose-validator.herokuapp.com/api/verify')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        // setErrorGetUserData(error.message);
      })
    }
    //get token from local storage when browser reload
    const token = localStorage.getItem('token');
    if(!token) { 
      // navigate('/login'); 
    }
    getUserData(token);
  }, []);

  return (
    <div className='lg:h-full md:h-screen h-full bg-blue-300 m-0 opensans'>
      
      <div className='bg-blue-500 roboto text-center text-white w-full'>
        Hallo, {user.name}
      </div>
      
      <Navbar/>

      <main className='flex flex-row justify-center mt-3 mb-3'>
        <InferenceMachine/>
      </main>

      <Footer/>
    </div>
  )
}
