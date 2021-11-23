import React from 'react';
import {BrowserRouter,Link,Switch,Route } from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import InferenceMachine from '../components/InferenceMachine';
import Footer from '../components/Footer';
import FormTesting from './FormTesting';
import Guide from './Guide';
import QnA from './QnA';

export default function StaticRouting() {
  return (
    <div className='poppins'>
      <BrowserRouter>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark' className='border-bottom'>
          <Container>
            <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                {/* Static routing must use <Link> tag not Nav.Link*/}
                <Link className='nav-link' to='/chatbot' onClick=''>
                  <i class='bi bi-chat-left-dots'></i> BOT
                </Link>
                <Link className='nav-link' to='/chatbot/guide'>
                  <i class='bi bi-journals'></i> PANDUAN
                </Link>
                <Link className='nav-link' to='/chatbot/form'>
                  <i class='bi bi-ui-checks'></i> UAT
                </Link>
                <Link className='nav-link' to='/chatbot/qna'>
                  <i class='bi bi-journals'></i> QnA
                </Link>
              </Nav>
              {/*Left align bar item */}
              <Nav className=''>
                <Nav.Link href='/'>
                  <i class='bi bi-arrow-bar-left'></i> DASHBOARD
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
        <Switch>
          <Route exact path='/chatbot/form' component={FormTesting} />
          <Route exact path='/chatbot/guide' component={Guide} />
          <Route exact path='/chatbot/qna' component={QnA} />
          <Route exact path='/chatbot' component={InferenceMachine} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
};