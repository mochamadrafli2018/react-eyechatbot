import React from 'react'
import './style.css'
import {Col,Row} from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'

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
    <div id='container'>
      <Row className='mx-auto mb-3'>
        <div 
          id='messages' class='messages py-1 mx-auto mw-100' 
          style={{color: theme.palette.primary.main}}
        >{/*Chat will be append in here*/}
        </div>
      </Row>
      <Row className='mx-auto'>
        <input 
        id='input' 
        type='text'
        className='form-control mr-0 mb-3'            
        value={input}
        placeholder='Ketik jawaban anda ...'
        onChange={handleChange} // in order able to input text
        onKeyPress={handleKey}
        autocomplete='off'
        autofocus='true'
        />
      </Row>
      <Row className='mx-auto'>
        <button type='submit' value='Submit' onClick={handleSubmit} 
        className='btn btn-primary mb-3'>
          <SendIcon />
        </button>
      </Row>
      <Row className=''>
        <Col className='d-grid gap-2 mb-3'>
          <button type='submit' value='Submit' onClick={handleSubmitMulai} 
          className='btn btn-primary'>
            mulai
          </button>
        </Col>
        <Col className='d-grid gap-2 mb-3'>
          <button type='submit' value='Submit' onClick={handleSubmitYa} 
          className='btn btn-primary'>
            ya
          </button>
        </Col>
        <Col className='d-grid gap-2 mb-3'>
          <button type='submit' value='Submit' onClick={handleSubmitTidak} 
          className='btn btn-primary'>
            tidak
          </button>
        </Col>
      </Row>
      <Row>
        <div className='mb-3'>Anda mengetik : {input}</div>
        <div className='mb-3'>Pesan terkirim  : {berhasil}</div>
        <div className='mb-3'>First reply : {firstReply}</div>   
        <div className='mb-3'>Second reply : {secondReply}</div>      
        <div className='mb-3'>Third reply : {thirdReply}</div>      
        <div className='mb-3'>Fourth reply : {fourthReply}</div>         
        <div className='mb-3'>Fifth reply : {fifthReply}</div>      
        <div className='mb-3'>Sixth reply : {sixthReply}</div>      
        <div className='mb-3'>Seventh reply : {seventhReply}</div>      
        <div className='mb-3'>Eight reply : {eightReply}</div>      
      </Row>
    </div>
  )
}