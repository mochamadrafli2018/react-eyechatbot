import React, { useState } from 'react'
import './style.css'
import { Col, Row } from 'react-bootstrap'
import SendIcon from '@mui/icons-material/Send'
import {createTheme} from '@mui/material/styles'
import {blue} from '@mui/material/colors'
import {prompts,replies,alternative,coronavirus,} from './QnA'
import {sympthom, diseases} from './DiseasesList'
import bot from './bot.png'
import user from './user.png'

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

  // get bot reply after user input chat and button was clicked
  const handleSubmit = () => {
    setBerhasil('Berhasil')
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


  const [NumX, setNumX] = useState(0);
  const [replyBotArray, setReplyBotArray] = useState([]);
  const [inputUserArray, setInputUserArray] = useState([]);
  const [replyBefore,setReplyBefore] = useState();
  const [inputBefore,setInputBefore] = useState();
  // match the prompt and the reply
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let botReplyFound = false;
    let randomReply;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          // give reply from the same line
          randomReply = repliesArray[x];
          // give random reply from 1 array that pointed to user
          reply = randomReply[Math.floor(Math.random() * randomReply.length)];
          // set number of x
          setNumX(x)
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
    return reply;
  }



  // input
  let [firstInput, setFirstInput] = useState('');
  let [secondInput, setSecondInput] = useState('');
  let [thirdInput, setThirdInput] = useState('');
  let [fourthInput, setFourthInput] = useState('');
  let [fifthInput, setFifthInput] = useState('');
  let [sixthInput, setSixthInput] = useState('');
  let [SeventhInput, setSeventhInput] = useState('');
  let [EightInput, setEightInput] = useState('');
  // reply
  let [firstReply, setFirstReply] = useState('');
  let [secondReply, setSecondReply] = useState('');
  let [thirdReply, setThirdReply] = useState('');
  let [fourthReply, setFourthReply] = useState('');
  let [fifthReply, setFifthReply] = useState('');
  let [sixthReply, setSixthReply] = useState('');
  let [seventhReply, setSeventhReply] = useState('');
  let [eightReply, setEightReply] = useState('');
  // Main output function for replying user input
  function output(input) {
    let reply; 
    input = input
      // replace all input text to lower case
      .toLowerCase() //https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react
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

    let question1 = `Apa anda mengalami gejala ${sympthom[0][0]} ?`;
    let question2 = `Apa anda mengalami gejala ${sympthom[1][0]} ?`;
    let question3 = `Apa anda mengalami gejala ${sympthom[2][0]} ?`;
    let question4 = `Apa anda mengalami gejala ${sympthom[3][0]} ?`;
    let question5 = `Apa anda mengalami gejala ${sympthom[4][0]} ?`;
    let question6 = `Apa anda mengalami gejala ${sympthom[5][0]} ?`;
    let question7 = `Apa anda mengalami gejala ${sympthom[6][0]} ?`;
    let question8 = `Apa anda mengalami gejala ${sympthom[7][0]} ?`;
    let question9 = `Apa anda mengalami gejala ${sympthom[8][0]} ?`;
    let question10 = `Apa anda mengalami gejala ${sympthom[9][0]} ?`;
    let question11 = `Apa anda mengalami gejala ${sympthom[10][0]} ?`;
    let question12 = `Apa anda mengalami gejala ${sympthom[11][0]} ?`;
    let question13 = `Apa anda mengalami gejala ${sympthom[12][0]} ?`;
    let question14 = `Apa anda mengalami gejala ${sympthom[13][0]} ?`;
    let question15 = `Apa anda mengalami gejala ${sympthom[14][0]} ?`;
    let question16 = `Apa anda mengalami gejala ${sympthom[15][0]} ?`;
    let question17 = `Apa anda mengalami gejala ${sympthom[16][0]} ?`;
    let question18 = `Apa anda mengalami gejala ${sympthom[17][0]} ?`;
    let question19 = `Apa anda mengalami gejala ${sympthom[18][0]} ?`;
    let question20 = `Apa anda mengalami gejala ${sympthom[19][0]} ?`;
    let question21 = `Apa anda mengalami gejala ${sympthom[20][0]} ?`;
    let question22 = `Apa anda mengalami gejala ${sympthom[21][0]} ?`;
    let question23 = `Apa anda mengalami gejala ${sympthom[22][0]} ?`;
    let question24 = `Apa anda mengalami gejala ${sympthom[23][0]} ?`;
    let question25 = `Apa anda mengalami gejala ${sympthom[24][0]} ?`;
    let question26 = `Apa anda mengalami gejala ${sympthom[25][0]} ?`;
    let question27 = `Apa anda mengalami gejala ${sympthom[26][0]} ?`;
    let question28 = `Apa anda mengalami gejala ${sympthom[27][0]} ?`;
    let question29 = `Apa anda mengalami gejala ${sympthom[28][0]} ?`;
    let question30 = `Apa anda mengalami gejala ${sympthom[29][0]} ?`;
    let question31 = `Apa anda mengalami gejala ${sympthom[30][0]} ?`;
    let question32 = `Apa anda mengalami gejala ${sympthom[31][0]} ?`;
    let question33 = `Apa anda mengalami gejala ${sympthom[32][0]} ?`;
    let question34 = `Apa anda mengalami gejala ${sympthom[33][0]} ?`;
    let question35 = `Apa anda mengalami gejala ${sympthom[34][0]} ?`;
    let question36 = `Apa anda mengalami gejala ${sympthom[35][0]} ?`;
    let question37 = `Apa anda mengalami gejala ${sympthom[36][0]} ?`;
    let question38 = `Apa anda mengalami gejala ${sympthom[37][0]} ?`;
    let question39 = `Apa anda mengalami gejala ${sympthom[38][0]} ?`;
    let question40 = `Apa anda mengalami gejala ${sympthom[39][0]} ?`;
    let question41 = `Apa anda mengalami gejala ${sympthom[40][0]} ?`;
    let question42 = `Apa anda mengalami gejala ${sympthom[41][0]} ?`;
    let question43 = `Apa anda mengalami gejala ${sympthom[42][0]} ?`;
    let question44 = `Apa anda mengalami gejala ${sympthom[43][0]} ?`;
    let question45 = `Apa anda mengalami gejala ${sympthom[44][0]} ?`;
    let question46 = `Apa anda mengalami gejala ${sympthom[45][0]} ?`;
    let question47 = `Apa anda mengalami gejala ${sympthom[46][0]} ?`;
    let question48 = `Apa anda mengalami gejala ${sympthom[47][0]} ?`;
    let question49 = `Apa anda mengalami gejala ${sympthom[48][0]} ?`;
    let question50 = `Apa anda mengalami gejala ${sympthom[49][0]} ?`;
    let question51 = `Apa anda mengalami gejala ${sympthom[50][0]} ?`;
    let question52 = `Apa anda mengalami gejala ${sympthom[51][0]} ?`;
    let question53 = `Apa anda mengalami gejala ${sympthom[52][0]} ?`;
    let question54 = `Apa anda mengalami gejala ${sympthom[53][0]} ?`;


    if (compare(prompts, replies, input)) { 
      // Search for exact match in `prompts`
      reply = compare(prompts, replies, input);
    } 
    else if (input.match(/thank/gi)) {
      reply = 'You\'re welcome!'
    }
    // Check if message contains `coronavirus`
    else if (input.match(/(corona|covid|virus)/gi)) {
      reply = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    }
    // start screening
    // Nomor aturan 1
    else if (input === 'mulai' || 
    input === 'test') {
      // give reply from the same line
      reply = question1;
      // user first input
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
      // clear all reply
      setSecondReply('')
      setThirdReply('')
      setFourthReply('')
      setFifthReply('')
      setSixthReply('')
      setSeventhReply('')
      setEightReply('')
    }
    // jika user mengalami gejala 1, lanjut tanya gejala 2
    else if (firstReply === question1 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' && 
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&  
      input === 'y') {
      reply=question2;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 1 dan gejala 2, lajut tanya gejala 3
    else if (firstReply === question1 && secondReply === question2 && 
      thirdReply === '' && fourthReply === '' && 
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&  
      input === 'y') {
      reply=question3;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 1, 2 tapi tidak mengalami gejala 3 
    lanjut ke gejala 12*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' && 
      input === 't') {
      reply=question12;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 1, 2 dan 3 lanjut tanya gejala 4*/
    else if (firstReply === question1 && secondReply === question2 && 
      thirdReply === question3 && fourthReply === '' && 
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' && 
      input === 'y') {
      reply=question4;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, 3 dan 4 lanjut tanya gejala 14*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' && 
      input === 'y') {
      reply=question14;
      setFifthReply(reply)
    }
    // jika user mengalami gejala 1, 2 dan 3, tapi tidak mengalami gejala 4
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]} dan ${sympthom[2][0]} yang merupakan 3 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1,2,3,4 dan 14 lanjut tanya gejala 27*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' && 
      input === 'y') {
      reply=question27;
      setSixthReply(reply)
    }
    // jika user mengalami gejala 1,2,3,4 tapi tidak mengalami gejala 14
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === '' && 
      seventhReply === '' && eightReply === '' && 
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, 
      ${sympthom[2][0]} dan ${sympthom[13][0]} yang merupakan 4 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1,2,3,4,14 dan 27 lanjut tanya gejala 28*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === '' && eightReply === '' && 
      input === 'y') {
      reply=question28;
      setSeventhReply(reply)
    }
    /* jika user mengalami gejala 1,2,3,4 dan 14 tapi tidak mengalami 
    gejala 27*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === '' && eightReply === '' && 
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[2][0]}, ${sympthom[13][0]} dan ${sympthom[26][0]} yang merupakan 5 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1,2,3,4,14, 27 dan 28 
    lanjut tanya gejala 34*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === question28 && eightReply === '' &&
      input === 'y') {
      reply=question34;
      setEightReply(reply)
    }
    /* jika user mengalami gejala 1,2,3,4,14 dan 27 tapi tidak mengalami 
    gejala 28*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === question28 && eightReply === '' && 
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[2][0]}, ${sympthom[13][0]}, ${sympthom[26][0]} dan ${sympthom[27][0]} yang merupakan 6 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1,2,3,4,14,27,28 dan 34 aturan 1 berakhir*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === question28 && eightReply === question34 &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[2][0]}, ${sympthom[13][0]}, ${sympthom[26][0]}, ${sympthom[27][0]} dan ${sympthom[33][0]} dan ${question34} 
      yang merupakan 8 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
      // setEightReply(reply)
    }
    /* jika user mengalami gejala 1,2,3,4,14,27 dan 28
    tapi tidak mengalami gejala 34*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === question28 && eightReply === question34 &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[2][0]}, ${sympthom[13][0]}, ${sympthom[26][0]}, ${sympthom[27][0]} dan ${sympthom[33][0]} yang merupakan 7 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
      // setEightReply(reply)
    }
    

    // Nomor aturan 2
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    lanjut tanya gejala 14*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tidak mengalami gejala 3, 
    dan mengalami gejala 12, lanjut tanya gejala 14*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question14;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tidak mengalami gejala 3, 
    dan mengalami gejala 12, tapi tidak mengalami gejala 14*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === question14 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]} dan ${sympthom[11][0]} yang merupakan 3 gejala Konjungtivitis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 
    dan mengalami gejala 12 dan 14, lanjut tanya gejala 28*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === question14 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question28;
      setFifthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 
    dan mengalami gejala 12 dan 14, tapi tidak mengelami gejala 28*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === question14 &&
      fifthReply === question28 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[11][0]} dan ${sympthom[13][0]} yang merupakan 4 gejala Konjungtivitis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 
    dan mengalami gejala 12, 14 dan 28*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question12 && fourthReply === question14 &&
      fifthReply === question28 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[11][0]}, ${sympthom[13][0]} dan ${sympthom[27][0]} yang merupakan 5 gejala Konjungtivitis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }


    // Nomor aturan 3
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, lanjut tanya gejala 18*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question18;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 1, 2 dan tidak mengalami gejala 3, 12
    dan tidak mengalami gejala 14 lanjut ke gejala 21*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question21;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, tapi tidak mengalami gejala 18*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]} dan ${sympthom[13][0]} yang merupakan 3 dari 7 gejala Keratitis Pungtata Superfisialis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14 dan mengalami gejala 18 lanjut tanya gejala 27*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setFifthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14 dan 18, tapi tidak mengalami gejala 27*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === question27 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[13][0]} dan ${sympthom[17][0]} yang merupakan 4 dari 7 gejala Keratitis Pungtata Superfisialis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, 18 dan 27, lanjut tanya gejala 28*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question28;
      setSixthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, 18 dan 27, tapi tidak mengalami gejala 28*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === question27 && sixthReply === question28 &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[13][0]}, ${sympthom[17][0]} dan ${sympthom[26][0]} yang merupakan 5 dari 7 gejala Keratitis Pungtata Superfisialis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, 18, 27 dan 28 lanjut tanya gejala 29*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === question27 && sixthReply === question28 &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question29;
      setSeventhReply(reply)
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, 18, 27 dan 28 tapi tidak mengalami gejala 29*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === question27 && sixthReply === question28 &&
      seventhReply === question29 && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[13][0]}, ${sympthom[17][0]}, ${sympthom[26][0]} dan ${sympthom[27][0]} yang merupakan 6 dari 7 gejala Keratitis Pungtata Superfisialis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, dan tidak mengalami gejala 3 dan 12
    dan mengalami gejala 14, 18, 27, 28 dan 29*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === question18 &&
      fifthReply === question27 && sixthReply === question28 &&
      seventhReply === question29 && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[13][0]}, ${sympthom[17][0]}, ${sympthom[26][0]}, ${sympthom[27][0]} dan ${sympthom[28][0]} yang merupakan 7 dari 7 gejala Keratitis Pungtata Superfisialis. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }


    // Nomor aturan 4
    /* jika user mengalami gejala 1 dan 2
    tapi tidak mengalami gejala 3, 12 dan 14 lanjut ke gejala 21*/
    /*else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question21;
      setThirdReply(reply)
    }*/
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14 dan 21 lanjut ke gejala 24*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question21 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question24;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 12 dan 14 
    dan mengalami gejala 21, lanjut ke gejala 22*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question21 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question22;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 12 dan 14 
    dan mengalami gejala 21, tapi tidak mengalami gejala 22*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question21 && fourthReply === question22 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]} dan ${sympthom[20][0]} yang merupakan 3 dari 4 gejala Katarak. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }
    /* jika user mengalami gejala 1, 2, tapi tidak mengalami gejala 3, 12 dan 14 
    dan mengalami gejala 21 dan 22*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question21 && fourthReply === question22 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[20][0]} dan ${sympthom[21][0]} yang merupakan 4 dari 4 gejala Katarak. 
      Silahkan konsultasi lebih lanjut ke doktor spesialis mata.`;
    }


    // Nomor aturan 5
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14 dan 21 lanjut ke gejala 24*/
    /*else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question21 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question24;
      setThirdReply(reply)
    }*/
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14 dan 21, tapi mengalami gejala 24, lanjut tanya gejala 34*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question24 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question34;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14, 21 dan 24*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question24 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[1][0]}, belum bisa dipastikan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14, 21, tapi mengalami gejala 24 dan tidak mengalami gejala 34*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question24 && fourthReply === question34 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[33][0]} dan ${sympthom[33][0]} yang merupakan 4 dari 4 gejala Endoftalmitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    /* jika user mengalami gejala 1 dan gejala 2
    tapi tidak mengalami gejala 3, 12, 14, 21, tapi mengalami gejala 24 dan tidak mengalami gejala 34*/
    else if (
      firstReply === question1 && secondReply === question2 &&
      thirdReply === question24 && fourthReply === question34 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]} dan ${sympthom[23][0]} yang merupakan 3 dari 4 gejala Endoftalmitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    


    // Nomor aturan 6
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 2 lanjut tanya gejala 5 (works)
    else if (firstReply === question1 && secondReply === question2 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question5;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 5, lanjut tanya gejala 14 (works)
    else if (firstReply === question1 && secondReply === question5 &&
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 1 dan 5, lanjut tanya gejala 9 (error)
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question9;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 1 dan 5, tapi tidak mengalami gejala 9
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[4][0]}, belum bisa dipastikan hasil skiring penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5 dan 9, lanjut tanya gejala 10
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question10;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 1, 5 dan 9, tapi tidak mengalami gejala 10
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]} dan ${sympthom[8][0]} yang merupakan 3 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5, 9 dan 10, lanjut tanya gejala 11
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question11;
      setFifthReply(reply)
    }
    // jika user mengalami gejala 1, 5, 9 dan 10, tapi tidak mengalami gejala 11
    else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]} dan ${sympthom[9][0]} yang merupakan 4 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5, 9, 10 dan 11, lanjut tanya gejala 12
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question12;
      setSixthReply(reply)
    }
    // jika user mengalami gejala 1, 5, 9, 10 dan 11, tapi tidak mengalami gejala 12
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]}, ${sympthom[9][0]} dan ${sympthom[10][0]} yang merupakan 5 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11 dan 12, lanjut tanya gejala 27
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setSeventhReply(reply)
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11 dan 12, tapi tidak mengalami gejala 27
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === question27 && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]}, ${sympthom[9][0]}, ${sympthom[10][0]} dan ${sympthom[26][0]} yang merupakan 6 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11 dan 12, lanjut tanya gejala 28
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === question27 && eightReply === '' &&
      input === 'y') {
      reply=question28;
      setEightReply(reply)
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11, 12 dan 27, tapi tidak mengalami gejala 28
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === question27 && eightReply === question28 &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]}, ${sympthom[9][0]}, ${sympthom[10][0]}, ${sympthom[11][0]} dan ${sympthom[26][0]} yang merupakan 7 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11, 12, 27 dan 28
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === question27 && eightReply === question28 &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]}, ${sympthom[9][0]}, ${sympthom[10][0]}, ${sympthom[11][0]}, ${sympthom[26][0]} dan ${sympthom[27][0]} yang merupakan 8 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut`;
    }


    // jika user mengalami gejala 1 tapi tidak mengalami gejala 5, lanjut tanya gejala 14
    /*else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      setSecondReply(reply)
    }*/
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 14
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      // bot second reply after input 'test'
      setSecondReply(reply)
    }
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 14
    else if (firstReply === question1 && secondReply === question18 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[0][0]}, 
      belum bisa dipastikan hasil skrining penyakit mata anda`;
      // bot second reply after input 'test'
      setSecondReply(reply)
    }
    


    // jika user tidak mengalami gejala 1 lanjut ke gejala 2
    else if (firstReply === question1 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question2;
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    

    // jika user tidak mengalami gejala 1, tanya gejala 2
    else if (firstReply === question2 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question5;
      // bot first reply after first input 'test'
      setSecondReply(reply)
    }
    // jika user mengalami gejala 2 tapi tidak mengalami gejala 5 lanjut ke gejala 29
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question29;
      // bot second reply after input 'test'
      setSecondReply(reply)
    }
    // jika user mengelami gejala 2 tapi tidak mengalami gejala 5 dan 29
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[1][0]}, 
      belum bisa dipastikan hasil skrining penyakit mata anda`;
    }
    // jika user tidak mengalami gejal 2 lanjut ke gejala 5
    else if (firstReply === question2 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question5;
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }

    // jika user didn't sympthom 5 go to sympthom 6
    else if (firstReply === question5 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
     input === 't') {
      reply=question6;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    // jika user didn't sympthom 2 go to sympthom 5
    else if (firstReply === question6 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question12;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question12 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question13;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question13 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question14 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question18 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question22;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question22 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question24;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question24 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question25;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question25 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question38;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question38 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question47;
      // user first input after user input 'test
      setFirstInput(input)
      // bot first reply after first input 'test'
      setFirstReply(reply)
    }
    else if (firstReply === question47 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply='Maaf, sistem tidak dapat melakukan skrining penyakit anda'
    }

    else {
      // If all else fails: random alternative
      reply = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // add chat
    addChat(input, reply);
  }


  // make a reply as a component
  function addChat(input, reply) {
    const messagesContainer = document.getElementById('messages')
    // create element for user reply
    const userDiv = document.createElement('div')
    // create text element
    const userText = document.createElement('span')
    userDiv.id = 'user'
    userDiv.className = 'bg-warning border-5px rounded my-2 px-2 py-2'
    userDiv.innerHTML = 
    `<img src=${user} class='avatar'>
      <span class='mx-1 text-right text-dark'>
        ${input}
      </span>`
    // append userText to userDiv
    userDiv.appendChild(userText)
    // add userDiv to messagesContainer
    messagesContainer.appendChild(userDiv)

    // create div element for bot reply
    const botDiv = document.createElement('div')
    // create bot image element
    const botImg = document.createElement('img')
    // create text element
    const botText = document.createElement('span')
    botDiv.id = 'bot'
    botDiv.className = 'bg-warning border-5px rounded my-2 px-2 py-2'
    // get image from bot.png
    botImg.src = bot
    botImg.className = 'avatar'
    botText.className = 'mx-1 text-right text-dark'
    botText.innerText = 'Mengetik...'
    // append botImg to botDiv
    botDiv.appendChild(botImg)    
    // append botText to botText
    botDiv.appendChild(botText)
    // add botDiv to messagesContainer
    messagesContainer.appendChild(botDiv)
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight
    // Fake delay to seem 'real' and also way to change botText inner Text
    setTimeout(() => {
      botText.innerText = `${reply}`
    }, 300)
  } 
  
  return(
    <div id='container'>
      <Row className='mx-auto mb-3'>
          <div id='messages' class='messages py-1 mx-auto mw-100' style={{color: theme.palette.primary.main}}>
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
        <div className='mb-3'>Anda mengetik : {input}</div>
        <div className='mb-3'>Pesan terkirim  : {berhasil}</div>
        <div className='mb-3'>firstReply   : {firstReply}</div>   
        <div className='mb-3'>secondReply  : {secondReply}</div>      
        <div className='mb-3'>thirdReply   : {thirdReply}</div>      
        <div className='mb-3'>fourthReply  : {fourthReply}</div>         
        <div className='mb-3'>fifthReply   : {fifthReply}</div>      
        <div className='mb-3'>sixthReply   : {sixthReply}</div>      
        <div className='mb-3'>seventhReply : {seventhReply}</div>      
        <div className='mb-3'>eightReply   : {eightReply}</div>      
      </Row>
    </div>
  )
}

export default Chatbot