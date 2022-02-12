import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatbotDashboard from './pages/ChatbotDashboard';
import MainDashboard from './pages/MainDashboard';
import FormTesting from './pages/FormTesting';
import Guide from './pages/Guide';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainDashboard/>} />
          <Route path='/chatbot' element={<ChatbotDashboard/>} />
          <Route path='/chatbot/form' element={<FormTesting/>} />
          <Route path='/chatbot/guide' element={<Guide/>} />
          <Route path='/form' element={() => window.location = 'https://nuxt-eyescreening.vercel.app'}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
