import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
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

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validation, setValidation] = useState([]);
  const history = useHistory();

  const registerHandler = async (e) => {
    e.preventDefault();    
    const formData = new FormData();      //initialize formData
    //append data to formData
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);
    //send data to server
    await axios.post('http://localhost:8000/api/register', formData)
    .then(() => {
      history.push('/');                  //redirect to login page
    })
    .catch((error) => {
      setValidation(error.response.data); //assign error to state "validation"
    })
  };

  const toLoginPage = () => {
    history.push('/login');                    // redirect to login page
  };

  return (
    <div className="container poppins" style={{ marginTop: "80px" }}>
      <h4 className='fw-bold text-center primary' style={{color: theme.palette.primary.main}}>EyeScreening</h4>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-5px rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">Daftar sebagai Pengguna Baru</h4>
              <hr/>
                        
                <form onSubmit={registerHandler}>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Nama Panggilan</label>
                        <input type="text" className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Masukkan Nama Panggilan"/>
                      </div>
                      {validation.name && (
                        <div className="alert alert-danger">
                          {validation.name[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Alamat Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                      </div>
                      {validation.email && (
                        <div className="alert alert-danger">
                          {validation.email[0]}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                      </div>
                      {validation.password && (
                        <div className="alert alert-danger">
                          {validation.password[0]}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Konfirmasi Password</label>
                        <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">DAFTAR</button>
                  </div>

                  <div className="mt-3">
                    <p>Sudah daftar? Silahkan masukkan akun anda dengan klik tombol berikut</p>
                  </div>

                  <div className="d-grid gap-2">
                    <button onClick={toLoginPage} className="btn btn-outline-primary">MASUK</button>
                  </div>

                </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;