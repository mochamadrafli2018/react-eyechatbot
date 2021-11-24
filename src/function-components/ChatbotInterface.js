import React from 'react'
import {Col,Row} from 'react-bootstrap'

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
    <div 
      className='container p-0 mx-auto h-100 mw-75 
      border-5px rounded shadow-lg'
      style={{marginTop:'60px',width:'99%'}}
    >
      <Row className='mx-auto mb-0 shadow-hover-primary rounded'>
        <h4 className='bg-primary mb-0 p-1 w-100 rounded-top text-center text-light'>
          Chat Bot
        </h4>
        <div id='messages' 
          className='bg-img-messages messages py-1 mx-auto mw-100'
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
      <Row className='p-1 mx-1'>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmit} 
            className='btn btn-primary'
          >
            <i class="bi bi-send"></i>
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmitMulai} 
            className='btn btn-primary w-100'
          >
            mulai
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmitYa} 
            className='btn btn-primary'
          >
            ya
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
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