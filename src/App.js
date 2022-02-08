import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatbotDashboard from './pages/ChatbotDashboard';
import Dashboard from './pages/Dashboard';
import FormTesting from './pages/FormTesting';
import Guide from './pages/Guide';
import Login from './pages/Login';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/chatbot' component={ChatbotDashboard} />
          <Route exact path='/chatbot/form' component={FormTesting} />
          <Route exact path='/chatbot/guide' component={Guide} />
          <Route exact path='/vue' component={() => window.location = 'https://vue-eyescreening.netlify.app'}/>
          {/* exact path='/' must be the last to write*/}
          <Route exaxt path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
