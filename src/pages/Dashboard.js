import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import AppBar from '../main-components/AppBar';

export default function Dashboard() {

  const [user, setUser] = useState({});
  const history = useHistory();
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch user from Rest API
    await axios.get('http://localhost:8000/api/user')
    .then((response) => {
      //set response user to state
      setUser(response.data);
    })
  }

  // function fetchData di atas dapat dijalankan saat component telah di mount / pasang, maka kita akan panggil di dalam hook useEffect.
  // hook useEffect
  useEffect(() => {
    // check if token was mpty
    if(!token) {
      // redirect to login page
      history.push('/');
    }
    //call function "fetchData"
    fetchData();
  }, []);

  // logout
  const logoutHandler = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //fetch Rest API
    await axios.post('http://localhost:8000/api/logout')
    .then(() => {
      //remove token from localStorage
      localStorage.removeItem("token");
      //redirect halaman login
      history.push('/');
    });
  };

  return (
    <div>
      <AppBar/>
      <div className="container poppins" style={{ marginTop: "100px" }}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                Selamat Datang <strong className="text-uppercase">{user.name}</strong>
                <hr />
                <button onClick={logoutHandler} className="btn btn-md btn-danger">Keluar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}