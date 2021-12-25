import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const FetchExpress = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000')
    .then((response) => {
      setMessage(response.data.message)
    })
  }, [])

  return (
    <h5 className='fw-bold text-center primary'>
      {message}
    </h5>
  )
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validation, setValidation] = useState([])
  const history = useHistory()

  const loginHandler = async (e) => {
    e.preventDefault();
    // initialize formData
    const formData = new FormData()
    // append data
    formData.append('email', email)
    formData.append('password', password)
    // push data to server
    await axios.post('http://localhost:8000/api/login', formData)
    .then((response) => {
      // set token on localStorage
      (localStorage.setItem('token', response.data.token))
      // redirect to dashboard
      history.push('/dashboard')
    })
    .catch((error) => {
      // assign error to state 'validation'
      setValidation(error.response.data)
    })
  }
  
  // redirect to register page
  const toRegisterPageHandler = () => {
  };
  
  return (
    <div className='container poppins' id='login' style={{ marginTop: '80px' }}>
      <h4 className='fw-bold text-center text-primary'>
      EyeScreening</h4>
      <FetchExpress />
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div className='card border-5px rounded shadow-sm'>
            <div className='card-body'>   
              <h4 className='fw-bold'>Login Terlebih Dahulu</h4>
              <hr/>
                {validation.message && (
                  <div className='alert alert-danger'>{validation.message}</div>
                )}
              <form onSubmit={loginHandler}>
                <div className='mb-3'>
                  <label className='form-label'>Email</label>
                  <input 
                    type='email' 
                    className='form-control' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Masukkan Alamat Email'
                  />
                </div>
                {validation.email && (
                  <div className='alert alert-danger'>{validation.email[0]}</div>
                )}
                <div className='mb-3'>
                  <label className='form-label'>Password</label>
                  <input 
                    type='password' 
                    className='form-control' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Masukkan Password'
                  />
                </div>
                {validation.password && (
                  <div className='alert alert-danger'>{validation.password[0]}</div>
                )}          
                <div className='d-grid gap-2'>
                  <button type='submit' className='btn btn-primary'>
                    MASUK
                  </button>
                </div>
                <div className='mt-3'>
                    <p>Belum punya akun? Daftar terlebih dahulu</p>
                </div>
                <div className='d-grid gap-2'>
                  <button onClick={toRegisterPageHandler} className='btn btn-outline-primary'>
                    DAFTAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}