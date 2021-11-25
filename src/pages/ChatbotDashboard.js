import React from 'react';
import {BrowserRouter,Link,Switch,Route } from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import InferenceMachine from '../function-components/InferenceMachine';
import Footer from '../components/Footer';
import FormTesting from './FormTesting';
import Guide from './Guide';
import QnA from './QnA';

export default function ChatbotDashboard() {
  return (
    <div className='poppins'>
      <BrowserRouter>
        <div
          style={{position:'fixed',top:'0','z-index':'1'}}  
          className='navbar bg-light py-1 w-100 border-bottom shadow-sm text-primary'
        >
          <Container>
            <Nav className='me-auto'>
              {/* Static routing must use <Link> tag not Nav.Link*/}
              <Link className='nav-link' to='/chatbot' onClick=''>
                <i class="bi bi-robot"></i> Bot
              </Link>
              <Link className='nav-link' to='/chatbot/guide'>
                <i class='bi bi-journals'></i> Panduan
              </Link>
              <Link className='nav-link' to='/chatbot/form'>
                <i class='bi bi-ui-checks'></i> UAT
              </Link>
              {/*Dynamic Link*/}
              <Nav.Link href='/'>
                <i class='bi bi-arrow-bar-left'></i> Kembali
              </Nav.Link>
            </Nav>
            {/*Left align bar item */}
            <Nav></Nav>
          </Container>
        </div> 
        <Switch>
          <Route exact path='/chatbot/form' component={FormTesting} />
          <Route exact path='/chatbot/guide' component={Guide} />
          <Route exact path='/chatbot/qna' component={QnA} />
          <Route exact path='/chatbot' component={InferenceMachine} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};