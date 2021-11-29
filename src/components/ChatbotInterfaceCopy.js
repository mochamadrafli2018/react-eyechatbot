import React, {useEffect, useRef} from 'react';
import {Col,Row} from 'react-bootstrap';
import '../index.css';

export default function ChatbotInterfaceCopy({
    input,
    i, j, replyNow, nextReply, allYesReply, lastValue, 
    ruleBaseNow, ruleBaseILength, ruleBaseLength, 
    handleChange,
    handleEnter,
    handleSubmit,
    handleMulai,
    handleYa,
    handleTidak,
  }) {

  // create a ref 
  const messageEl = useRef(null);

  // https://www.cluemediator.com/auto-scroll-to-the-bottom-in-a-react-chat-application 
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  return (
    <div 
      className='p-0 mx-auto w-full max-w-3xl rounded-md shadow-lg'
      style={{marginTop:'60px', marginBottom:'20px'}}
    >
      <Row className='mx-auto mb-0 rounded shadow-hover-primary'>
        <h4 className='bg-primary mb-0 p-1 w-100 quicksand rounded-top text-center text-light'
        style={{fontSize:'20px'}}>
          Chat Bot
        </h4>
        <div 
          id='messages' 
          className='messages max-h-96 py-1 w-100 overflow-y-scroll' 
          ref={messageEl}
          style={{minHeight:'300px'}}
        >
          {/*Chat will be append in here*/}
        </div>
        <div className='container input-group p-1 w-100'>
          <input 
            id='input' 
            type='text'
            className='ml-auto px-3 py-2 border-2 rounded-full active:border-blue-500 hover:border-blue-400' 
            style={{width:'80%'}}    
            value={input}
            placeholder='Ketik respon anda ...'
            onChange={handleChange} // in order able to input text
            onKeyPress={handleEnter}
            autocomplete='off'
            autofocus='true'
          />
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleSubmit} 
            className='mr-auto btn-primary py-2 input-group-btn rounded-full'
            style={{width:'15%'}}
          >
            <i class="bi bi-send mx-auto text-xl"></i>
          </button>
        </div>
      </Row>
      <Row className='p-1 mx-1'>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleMulai} 
            className='btn btn-primary w-100'
          >
            mulai
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleYa} 
            className='btn btn-primary'
          >
            ya
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleTidak} 
            className='btn btn-primary'
          >
            tidak
          </button>
        </Col>
      </Row>
      <Row>
        <div className='my-1 ml-2'>[ i ][ j ] : [{i}][{j}]</div>
        <div className='my-1 ml-2'>ruleBaseNow : {ruleBaseNow}</div>
        <div className='my-1 ml-2'>ruleBaseILength : {ruleBaseILength}</div>
        <div className='my-1 ml-2'>ruleBase.length : {ruleBaseLength}</div>
        <div className='my-1 ml-2'>replyNow : {replyNow}</div>
        <div className='my-1 ml-2'>nextReply : {nextReply}</div>
        <div className='my-1 ml-2'>lastValue : {lastValue}</div>
        <div className='my-1 ml-2'>all yes reply : {allYesReply}</div>
      </Row>
    </div>
  )
}