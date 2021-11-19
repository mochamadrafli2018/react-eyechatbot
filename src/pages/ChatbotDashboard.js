import React from 'react';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import PageNotFound from './PageNotFound';
import InferenceMachine from './InferenceMachine';
import Footer from './Footer'
import {Container,Nav,Navbar} from 'react-bootstrap';

export default function ChatbotDashboard() {
  return (
    <div className='poppins'>
      <div className='shadow-sm'>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/form'>
                  <i class="bi bi-ui-checks"></i> User Aceptance Testing
                </Nav.Link>
                <Nav.Link href='/guide'>
                  <i class="bi bi-arrow-bar-right"></i> PANDUAN
                </Nav.Link>
              </Nav>
              <Nav className=''>
                <Nav.Link href='/'><i class="bi bi-arrow-bar-left"></i> DASHBOARD</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </div>
      <div className='container' style={{marginTop:'70px'}}>
        <div className='card p-1 mb-3 mw-75 border-5px rounded shadow-lg'>
          {/*Chatbot interface*/}
          <Nav className=''>
            <BrowserRouter>
              <Link className='nav-link' to='/chatbot'>Chatbot</Link>
              <Link className='nav-link' to='/chatbot/forwardchaining'>Forward Chaining?</Link>
              <Switch>
                <Route exact path='/chatbot/forwardchaining' component={PageNotFound} />
                <Route exact path='/chatbot' component={InferenceMachine} />
              </Switch>
            </BrowserRouter>
          </Nav>
        </div>
      </div>
      <Footer/>
    </div>
  )
};