import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import './index.css'
// pages
import ChatbotDashboard from './pages/ChatbotDashboard'
import MainDashboard from './pages/MainDashboard'
import FormTesting from './pages/FormTesting'
import Guide from './pages/Guide'
import Login from './pages/Login'
import Register from './pages/Register'
import UserDashboard from './pages/dashboard/User'

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainDashboard/>} />
            <Route path='/chatbot' element={<ChatbotDashboard/>} />
            <Route path='/form' element={<FormTesting/>} />
            <Route path='/guide' element={<Guide/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard/:userId' element={<UserDashboard/>} />
            <Route path="*" element={<ChatbotDashboard/>}></Route>
            <Route path='/form' element={() => window.location = 'https://nuxt-eyescreening.vercel.app'}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
