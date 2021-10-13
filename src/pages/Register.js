//import hook react
import React, { useState } from 'react';

//import hook useHitory from react router dom
import { useHistory } from 'react-router';

//import axios
import axios from 'axios';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validation, setValidation] = useState([]);
  const history = useHistory();

  const registerHandler = async (e) => {
    e.preventDefault();    
    //initialize formData
    const formData = new FormData();
    //append data to formData
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);
    //send data to server
    await axios.post('http://localhost:8000/api/register', formData)
    .then(() => {
      //redirect to login page
      history.push('/');
    })
    .catch((error) => {
      //assign error to state "validation"
      setValidation(error.response.data);
    })
  };

  // redirect to login page
  const toLoginPage = () => {
    history.push('/');
  };

  return (
    <div className="container poppins" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-5px rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">Daftar sebagai Pengguna</h4>
              <hr/>
                        
                <form onSubmit={registerHandler}>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Nama Panggilan Anda</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
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
                    <button type="submit" className="btn btn-primary">REGISTER</button>
                  </div>

                  <div className="mt-3">
                    <p>Sudah punya akun? Silahkan Login dengan Klik Tombol berikut</p>
                  </div>

                  <div className="d-grid gap-2">
                    <button onClick={toLoginPage} className="btn btn-primary">LOGIN</button>
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