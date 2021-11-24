import React from 'react'
import {Col,Row} from 'react-bootstrap'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'
import bot from '../img/bot.png';
// material-ui theme
const theme = createTheme({
  palette: {
    primary: {main: blue[700]},
  },
})
export default function ChatbotInterface({
    input,
    handleChange,
    handleKey,
    handleSubmit,
    handleSubmitMulai,
    handleSubmitYa,
    handleSubmitTidak,
    berhasil,
    firstReply,
    secondReply,
    thirdReply,
    fourthReply,
    fifthReply,
    sixthReply,
    seventhReply,
    eightReply
  }) {
  return (
    <div id='container' style={{marginTop:'0px'}}>
      <Row className='mx-auto mb-2 shadow-hover-primary rounded'>
        <h4 className='bg-primary mb-0 p-1 w-100 rounded-top text-center text-light'>
          Chat Bot
        </h4>
        <div 
          id='messages' 
          className='bg-img-messages messages py-1 mx-auto mw-100' 
          style={{color: theme.palette.primary.main}}
        >{/*Chat will be append in here*/}
        </div>
        <input 
          id='input' 
          type='text'
          className='form-control mx-auto mb-0'            
          value={input}
          placeholder='Ketik respon anda ...'
          onChange={handleChange} // in order able to input text
          onKeyPress={handleKey}
          autocomplete='off'
          autofocus='true'
        />
      </Row>
      <Row className='mx-auto'>
        <button 
          type='submit' 
          value='Submit' 
          onClick={handleSubmit} 
          className='btn btn-primary mb-2'
        >
          <i class="bi bi-send"></i> Kirim
        </button>
      </Row>
      <Row className=''>
        <Col className='d-grid gap-2 mb-2'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmitMulai} 
            className='btn btn-primary'
          >
            mulai
          </button>
        </Col>
        <Col className='d-grid gap-2 mb-2'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmitYa} 
            className='btn btn-primary'
          >
            ya
          </button>
        </Col>
        <Col className='d-grid gap-2 mb-2'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmitTidak} 
            className='btn btn-primary'
          >
            tidak
          </button>
        </Col>
      </Row>
      {/*
      <Row>
        <div className='mb-2'>Anda mengetik : {input}</div>
        <div className='mb-2'>Pesan terkirim  : {berhasil}</div>
        <div className='mb-2'>First reply : {firstReply}</div>   
        <div className='mb-2'>Second reply : {secondReply}</div>      
        <div className='mb-2'>Third reply : {thirdReply}</div>      
        <div className='mb-2'>Fourth reply : {fourthReply}</div>         
        <div className='mb-2'>Fifth reply : {fifthReply}</div>      
        <div className='mb-2'>Sixth reply : {sixthReply}</div>      
        <div className='mb-2'>Seventh reply : {seventhReply}</div>      
        <div className='mb-2'>Eight reply : {eightReply}</div>      
      </Row>
      */}
    </div>
  )
}