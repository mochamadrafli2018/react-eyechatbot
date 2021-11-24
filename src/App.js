import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ChatbotDashboard from './pages/ChatbotDashboard';
import Dashboard from './pages/Dashboard';
import FormTesting from './pages/FormTesting';
import Guide from './pages/Guide';
import QnA from './pages/QnA';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/chatbot' component={ChatbotDashboard} />
          <Route exact path='/chatbot/form' component={FormTesting} />
          <Route exact path='/chatbot/guide' component={Guide} />
          <Route exact path='/chatbot/qna' component={QnA} />
          <Route exact path='/vue' component={() => window.location = 'https://vue-eyescreening.netlify.app'}/>
          {/* exact path='/' must be the last to write*/}
          <Route exaxt path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
