import React from 'react';
import {BrowserRouter,Link,Switch,Route } from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import InferenceMachine from '../components/InferenceMachine';
import Footer from '../components/Footer';
import Guide from './Guide';

export default function ChatbotDashboard() {
  /*const thisPage = () => {
    if (path = '/chatbot') {
      return create element bla bla
    }
  }*/

  return (
    <div className='poppins'>
      <BrowserRouter>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/form'>
                  <i class='bi bi-ui-checks'></i> UAT
                </Nav.Link>
                <Nav.Link href='/qna'>
                  <i class='bi bi-journals'></i> QnA
                </Nav.Link>
                {/* static routing must use <link> tag not Nav.Link*/}
                <Link className='nav-link' to='/chatbot' onClick=''>
                  <i class='bi bi-chat-left-dots'></i> Chatbot
                </Link>
                <Link className='nav-link' to='/chatbot/guide'>
                  <i class='bi bi-book'></i> Panduan
                </Link>
              </Nav>
              
              <Nav className=''>
                <Nav.Link href='/'>
                  <i class='bi bi-arrow-bar-left'></i> DASHBOARD
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        <Switch>
          <Route exact path='/chatbot/guide' component={Guide} />
          <Route exact path='/chatbot' component={InferenceMachine} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
};