import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
