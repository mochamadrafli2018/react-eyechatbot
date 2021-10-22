import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css";
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
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
