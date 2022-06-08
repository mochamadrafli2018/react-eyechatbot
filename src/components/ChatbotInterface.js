import { useEffect, useRef } from 'react';
import { Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ChatbotDashboard({
    input,
    check,
    inputNow,
    inputBefore,
    i, j,
    replyBefore,
    ruleBaseBefore,
    allYesReply, 
    lastValueWhenResponUserYes,
    lastValueWhenUserResponNo,
    totalSympthomWhenUserResponYes,
    totalSympthomWhenUserResponNo,
    ruleBaseNow, 
    ruleBaseILength, 
    ruleBaseLength, 
    handleChange,
    handleEnter,
    handleSubmit,
    handleStartScreening,
    handleNextScreening,
    handleYes,
    handleNo,
  }) {
  // create a ref 
  const messageEl = useRef(null);
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  return (
    <>
      <Row className='mx-0 mb-0 w-100 opensans rounded shadow-hover-primary'>
        <div className='bg-primary flex flex-row ml-auto mr-2 quicksand'>
          <h4 className='my-auto p-1 w-100 rounded-top text-center text-lg text-white'>
            Chat Bot Sistem Pakar
          </h4>
          <Link to='/' className='border rounded my-1 p-1 no-underline text-md text-white'>
            <i className='bi bi-box-arrow-left'></i>
          </Link>
        </div>
        <div 
          id='messages' 
          className='messages flex flex-col h-96 max-h-96 mx-0 py-1 overflow-y-scroll w-100' 
          ref={messageEl}
        >
          {/*Chat will be shown in here*/}
        </div>
        <div className='input-group p-1 w-100'>
          <input 
            id='input' 
            type='text'
            className='ml-auto px-3 py-2 border-2 rounded-full active:border-blue-500 hover:border-blue-400' 
            style={{width:'80%'}}    
            value={input}
            placeholder='Ketik respon anda ...'
            onChange={handleChange}
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
            <i className="bi bi-send mx-auto text-xl"></i>
          </button>
        </div>
      </Row>
      <Row className='p-1 mx-1'>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleStartScreening} 
            className='btn btn-primary w-100'
          >
            mulai
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleNextScreening} 
            className='btn btn-outline-primary'
          >
            lanjut
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleYes} 
            className='btn btn-outline-primary'
          >
            ya
          </button>
        </Col>
        <Col className='d-grid gap-2 p-1'>
          <button 
            type='submit' 
            value='Submit' 
            onClick={handleNo} 
            className='btn btn-outline-primary'
          >
            tidak
          </button>
        </Col>
      </Row>
      <Row>
        {/*
        <div className='my-1 mx-2'>[ i ][ j ] : [{i}][{j}]</div>
        <div className='my-1 mx-2'>input now : {inputNow}</div>
        <div className='my-1 mx-2'>lastValueWhenResponUserYes = {lastValueWhenUserResponYes}</div>
        <div className='my-1 mx-2'>lastValueWhenUserResponNo = {lastValueWhenUserResponNo}</div>
        <div className='my-1 mx-2'>totalSympthomWhenResponUserYes = {totalSympthomWhenUserResponYes}</div>
        <div className='my-1 mx-2'>totalSympthomWhenUserResponNo = {totalSympthomWhenUserResponNo}</div>
        <div className='my-1 mx-2'>input before : {inputBefore}</div>
        <div className='my-1 mx-2'>ruleBaseBefore : {ruleBaseBefore}</div>
        <div className='my-1 mx-2'>Tulisan di bawah ini untuk mengetahui sistem chat berjalan</div>
        <div className='my-1 mx-2'>ruleBaseNow : {ruleBaseNow}</div>
        <div className='my-1 mx-2'>ruleBase[ i ].Length : {ruleBaseILength}</div>
        <div className='my-1 mx-2'>ruleBase.length : {ruleBaseLength}</div>
        <div className='my-1 mx-2'>replyNow : {replyNow}</div>
        <div className='my-1 mx-2'>all yes reply : {allYesReply}</div>
        */}
      </Row>
    </>
  )
}