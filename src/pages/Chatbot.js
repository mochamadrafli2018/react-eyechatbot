import React, { useState } from 'react'
import './style.css'
import { Button, Col, Row } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'
import {prompts,replies,alternative,coronavirus,} from './QnA'
import bot from './bot.png'

// material-ui theme
const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
  },
})

const Chatbot = () => {
  /*const SendChatHandler = () => {
    // axios.get('http:// localhost:5000/api/get').then((response) => {setRespon(response.data.response)})
    /*axios.post('http:// localhost:5000/api/post', {
      input: this.input
    })
    .then((response) => {
      setQuestion(response.data.question)
      setIsError(false)
    })
  }*/

  // initialize state
  const [input, setInput] = useState('')
  const [berhasil, setBerhasil] = useState('')
  // form
  const [NumX, setNumX] = useState(0)
  let [replyBotArray, setReplyBotArray] = useState([])

  // get bot reply after user input chat and button was clicked
  const handleSubmit = () => {
    output(input)
    // give empty form input after user press enter
    setInput('')
  }
  
  // get bot reply after user input chat and enter was pressed
  const handleKey = (event) => {
    if (event.key === 'Enter') {
      setBerhasil('Berhasil')
      // call output to reply user message by creating element with id='message'
      output(input);
      // give empty form input after user press enter
      setInput('')
    }
  }

  // handle when form input was change or type by user
  const handleChange = (event) => {
    // set form input value to variabel input
    setInput(event.target.value)
    setBerhasil('')
  }

  // Main output function for replying user input
  function output(input) {
    let reply; 
    input = input
      // replace all input text to lower case
      .toLowerCase()
      // replace unneccessary input from user
      .replace(/[^\w\s]/gi, '')
      .replace(/[\d]/gi, '')
      .replace(/ a /g, ' ')   // example : 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '')
      .replace(/r u/g, 'are you')
      .replace(/'/g, '')
      // remove whitespace from both sides of a string
      .trim();
  
    if (compare(prompts, replies, input)) { 
      // Search for exact match in `prompts`
      reply = compare(prompts, replies, input);
    } else if (input.match(/thank/gi)) {
      reply = 'You\'re welcome!'
    } else if (input.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      reply = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else {
      // If all else fails: random alternative
      reply = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // add chat
    addChat(input, reply);
  }

  // match the prompt and the replies
  function compare(promptsArray, repliesArray, string) {
    let botReply;
    let botReplyFound = false;
    let replies;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          if (promptsArray[x][y] === 'mulai') {
            // give reply from the same line
            replies = repliesArray[x]
            botReply = replies
            replyBotArray = ''
            // add reply to array ReplyBotArray
            setReplyBotArray([...replyBotArray])
            // set number of x
            setNumX(x)
          }
          if (string === 'y' || string === 'ya' || string === 't' || string === 'tidak') {
            // give reply from line x+1 in repliesArray
            replies = repliesArray[NumX+1]
            botReply = replies
            if (string === 'y' || string === 'ya') {
              // add reply to array ReplyBotArray
              setReplyBotArray([...replyBotArray, repliesArray[NumX]])
            }
            // change number of replies line
            setNumX(NumX+1)
          }
          else {
            // give reply from the same line
            replies = repliesArray[x];
            // give random reply from 1 array that pointed to user
            botReply = replies[Math.floor(Math.random() * replies.length)];
          }
          // set reply true
          botReplyFound = true;
          // stop inner loop when input value matches prompts
          break;
        }
      }
      // stop outer loop when reply is found instead of interating through the entire array
      if (botReplyFound) {
        break;
      }
    }
    return botReply;
  }

  // make a replies as a component
  function addChat(input, reply) {
    const messagesContainer = document.getElementById('messages')
    // create element for user replies
    const userDiv = document.createElement('div')
    userDiv.id = 'user'
    userDiv.className = 'bg-primary border-5px mt-1 mb-1 px-2 py-1 rounded response text-white'
    userDiv.innerHTML = `<img src='' class=''>${input}`
    // add userDiv to messagesContainer
    messagesContainer.appendChild(userDiv)
    // create element for bot replies
    const botDiv = document.createElement('div')
    botDiv.id = 'bot'
    botDiv.className = 'mt-1 mb-1 response text-white'
    // create bot image element
    const botImg = document.createElement('img')
    botDiv.id = 'bot'
    botImg.src = bot
    botImg.className = 'avatar mx-2'
    botDiv.appendChild(botImg)
    // create typing element
    const botText = document.createElement('span')
    botText.className = 'bg-primary border-5px px-2 py-1 rounded'
    botText.innerText = 'Typing...'
    botDiv.appendChild(botText)
    // add botDiv to messagesContainer
    messagesContainer.appendChild(botDiv)
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight
    // Fake delay to seem 'real' and also way to change botText inner Text
    setTimeout(() => {
      botText.innerText = `${reply}`
      // textToSpeech(reply)
    }, 300)
  } 
  
  return(
    <div id='container'>
      <Row className='mx-auto mb-3'>
          <div id='messages' class='messages mx-auto' style={{color: theme.palette.primary.main}}>
            {/*Chat will be append in here*/}
          </div>
      </Row>
      <Row>
          <Col>
            <input id='input' 
              type='text'
              className='form-control'
              value={input}
              placeholder='Ketik jawaban anda ...'
              onChange={handleChange} // in order able to input text
              onKeyPress={handleKey}
              autocomplete='off'
              autofocus='true'
            />
          </Col>
          <Col className='d-grid gap-2 mb-3' xs lg='2'>
            <button type='submit' value='Submit' onClick={handleSubmit} className='btn btn-primary'>
              <SendIcon />
            </button>
          </Col>
      </Row>
      <Row>
        <div className='mb-3'>Anda mengetik   : {input}</div>
        <div className='mb-3'>Pesan terkirim  : {berhasil}</div>
        <div className='mb-3'>Reply Bot Array : {replyBotArray}</div>
        <div className='mb-3'>NumX            : {NumX}</div>
      </Row>
    </div>
  )
}

export default Chatbot