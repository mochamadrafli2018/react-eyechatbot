import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import ChatbotDashboard from './pages/ChatbotDashboard';
import Dashboard from './pages/Dashboard';
import Guide from './pages/Guide';
class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exaxt path='/' component={Dashboard} />
          <Route exact path='/chatbot' component={ChatbotDashboard} />
          <Route exact path='/guide' component={Guide} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
