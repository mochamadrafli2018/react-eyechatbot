import React, { useState } from 'react'
import {prompts,replies,alternative,coronavirus,} from './PromptsAndReplies'
import {sympthom} from './SymthomList'
import addChat from './AddChat'
import compare from './Compare'
import ChatbotInterface from './ChatbotInterface'

const InferenceMachine = () => {
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

  // set initial condition const input and berhasil
  const [input, setInput] = useState('')
  const [berhasil, setBerhasil] = useState('')
  // handle when form input was change or type by user and also get user input with setInput
  const handleChange = (event) => {
    setInput(event.target.value)
    setBerhasil('')
  }
  // get bot reply after user input chat and button was clicked
  const handleSubmit = () => {
    setBerhasil('Berhasil')
    Output(input)
    setInput('')  // return empty form after user press enter
  }
  const handleSubmitMulai = () => {
    setBerhasil('Berhasil')
    Output('mulai')
    setInput('')
  }
  const handleSubmitYa = () => {
    setBerhasil('Berhasil')
    Output('y')
    setInput('')
  }
  const handleSubmitTidak = () => {
    setBerhasil('Berhasil')
    Output('t')
    setInput('')
  }
  // get bot reply after user input chat and enter was pressed
  const handleKey = (event) => {
    if (event.key === 'Enter') {
      setBerhasil('Berhasil')
      Output(input)
      setInput('')
    }
  }

  // set reply
  let [firstReply, setFirstReply] = useState('');
  let [secondReply, setSecondReply] = useState('');
  let [thirdReply, setThirdReply] = useState('');
  let [fourthReply, setFourthReply] = useState('');
  let [fifthReply, setFifthReply] = useState('');
  let [sixthReply, setSixthReply] = useState('');
  let [seventhReply, setSeventhReply] = useState('');
  let [eightReply, setEightReply] = useState('');
  // Main Output function for replying user input
  function Output(input) {
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

    let question = `Apakah anda mengalami gejala`
    let question1 = `${question} ${sympthom[0][0]} pada mata anda ? (y/t)`;
    let question2 = `${question} ${sympthom[1][0]} pada mata anda ? (y/t)`;
    let question3 = `${question} ${sympthom[2][0]} pada mata anda ? (y/t)`;
    let question4 = `${question} ${sympthom[3][0]} pada mata anda ? (y/t)`;
    let question5 = `${question} ${sympthom[4][0]} pada mata anda ? (y/t)`;
    let question6 = `${question} ${sympthom[5][0]} pada mata anda ? (y/t)`;
    let question7 = `${question} ${sympthom[6][0]} pada mata anda ? (y/t)`;
    let question8 = `${question} ${sympthom[7][0]} pada mata anda ? (y/t)`;
    let question9 = `${question} ${sympthom[8][0]} pada mata anda ? (y/t)`;
    let question10 = `${question} ${sympthom[9][0]} pada mata anda ? (y/t)`;
    let question11 = `${question} ${sympthom[10][0]} pada mata anda ? (y/t)`;
    let question12 = `${question} ${sympthom[11][0]} pada mata anda ? (y/t)`;
    let question13 = `${question} ${sympthom[12][0]} pada mata anda ? (y/t)`;
    let question14 = `${question} ${sympthom[13][0]} pada mata anda ? (y/t)`;
    let question15 = `${question} ${sympthom[14][0]} pada mata anda ? (y/t)`;
    let question16 = `${question} ${sympthom[15][0]} pada mata anda ? (y/t)`;
    let question17 = `${question} ${sympthom[16][0]} pada mata anda ? (y/t)`;
    let question18 = `${question} ${sympthom[17][0]} pada mata anda ? (y/t)`;
    let question19 = `${question} ${sympthom[18][0]} pada mata anda ? (y/t)`;
    let question20 = `${question} ${sympthom[19][0]} pada mata anda ? (y/t)`;
    let question21 = `${question} ${sympthom[20][0]} pada mata anda ? (y/t)`;
    let question22 = `${question} ${sympthom[21][0]} pada mata anda ? (y/t)`;
    let question23 = `${question} ${sympthom[22][0]} pada mata anda ? (y/t)`;
    let question24 = `${question} ${sympthom[23][0]} pada mata anda ? (y/t)`;
    let question25 = `${question} ${sympthom[24][0]} pada mata anda ? (y/t)`;
    let question26 = `${question} ${sympthom[25][0]} pada mata anda ? (y/t)`;
    let question27 = `${question} ${sympthom[26][0]} pada mata anda ? (y/t)`;
    let question28 = `${question} ${sympthom[27][0]} pada mata anda ? (y/t)`;
    let question29 = `${question} ${sympthom[28][0]} pada mata anda ? (y/t)`;
    let question30 = `${question} ${sympthom[29][0]} pada mata anda ? (y/t)`;
    let question31 = `${question} ${sympthom[30][0]} pada mata anda ? (y/t)`;
    //let question32 = `${question} ${sympthom[31][0]} pada mata anda ? (y/t)`;
    let question33 = `${question} ${sympthom[32][0]} pada mata anda ? (y/t)`;
    let question34 = `${question} ${sympthom[33][0]} pada mata anda ? (y/t)`;
    let question35 = `${question} ${sympthom[34][0]} pada mata anda ? (y/t)`;
    let question36 = `${question} ${sympthom[35][0]} pada mata anda ? (y/t)`;
    let question37 = `${question} ${sympthom[36][0]} pada mata anda ? (y/t)`;
    let question38 = `${question} ${sympthom[37][0]} pada mata anda ? (y/t)`;
    let question39 = `${question} ${sympthom[38][0]} pada mata anda ? (y/t)`;
    let question40 = `${question} ${sympthom[39][0]} pada mata anda ? (y/t)`;
    let question41 = `${question} ${sympthom[40][0]} pada mata anda ? (y/t)`;
    //let question42 = `${question} ${sympthom[41][0]} pada mata anda ? (y/t)`;
    let question43 = `${question} ${sympthom[42][0]} pada mata anda ? (y/t)`;
    let question44 = `${question} ${sympthom[43][0]} pada mata anda ? (y/t)`;
    let question45 = `${question} ${sympthom[44][0]} pada mata anda ? (y/t)`;
    let question46 = `${question} ${sympthom[45][0]} pada mata anda ? (y/t)`;
    let question47 = `${question} ${sympthom[46][0]} pada mata anda ? (y/t)`;
    let question48 = `${question} ${sympthom[47][0]} pada mata anda ? (y/t)`;
    let question49 = `${question} ${sympthom[48][0]} pada mata anda ? (y/t)`;
    let question50 = `${question} ${sympthom[49][0]} pada mata anda ? (y/t)`;
    let question51 = `${question} ${sympthom[50][0]} pada mata anda ? (y/t)`;
    let question52 = `${question} ${sympthom[51][0]} pada mata anda ? (y/t)`;
    let question53 = `${question} ${sympthom[52][0]} pada mata anda ? (y/t)`;
    let question54 = `${question} ${sympthom[53][0]} pada mata anda ? (y/t)`;


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


    // Nomor aturan 1
    else if (input === 'mulai' || input === 'test' ||
    input === 'tes'|| input === 'skrining') {
      reply = question1;
      setFirstReply(reply)
      // clear all reply when user start to chat
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    /* jika user mengalami gejala 1,2,3,4,14,27,28 dan 34 aturan 1 berakhir*/
    else if (firstReply === question1 && secondReply === question2 &&
      thirdReply === question3 && fourthReply === question4 &&
      fifthReply === question14 && sixthReply === question27 &&
      seventhReply === question28 && eightReply === question34 &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[1][0]}, ${sympthom[2][0]}, ${sympthom[13][0]}, ${sympthom[26][0]}, ${sympthom[27][0]} dan ${sympthom[33][0]} dan ${question34} 
      yang merupakan 8 dari 8 gejala Ulkus Kornea. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[1][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[4][0]}, belum bisa ditentukan hasil skiring penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
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
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 1, 5, 9, 10, 11, 12, 27 dan 28
    else if (
      firstReply === question1 && secondReply === question5 && 
      thirdReply === question9 && fourthReply === question10 &&
      fifthReply === question11 && sixthReply === question12 &&
      seventhReply === question27 && eightReply === question28 &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[4][0]}, ${sympthom[8][0]}, ${sympthom[9][0]}, ${sympthom[10][0]}, ${sympthom[11][0]}, ${sympthom[26][0]} dan ${sympthom[27][0]} yang merupakan 8 dari 8 gejala Blefaritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }


    // Nomor aturan 7
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 5, lanjut tanya gejala 14
    /*else if (firstReply === question1 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      setSecondReply(reply)
    }*/
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 14, lanjut tanya gejala 18 (works)
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      // bot second reply after input 'test'
      setSecondReply(reply)
    }
    // jika user mengalami gejala 1 dan 14, lanjut tanya gejala 18
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question18;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 1 dan 14, tapi tidak mengalami gejala 18 (works)
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[13][0]} yang merupakan 2 dari 4 gejala Keratokonus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 1,14 dan 18 lanjut tanya gejala 21
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question21;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 1,14 dan 18, tapi tidak mengalami gejala 21 (works)
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question21 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[13][0]} dan ${sympthom[17][0]} yang merupakan 3 dari 4 gejala Keratokonus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 1,14,18 dan 21 (works)
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question21 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[13][0]}, ${sympthom[17][0]} dan ${sympthom[20][0]} yang merupakan 4 dari 4 gejala Keratokonus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }


    // Nomor aturan 8
    /*
    // jika user mengalami gejala 1 tapi tidak mengalami gejala 14, lanjut tanya gejala 18
    else if (firstReply === question1 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      // bot second reply after input 'test'
      setSecondReply(reply)
    }
    */
    // jika user mengalami gejala 1 dan 18, lanjut tanya gejala 23
    else if (firstReply === question1 && secondReply === question18 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question23;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 1 dan 18, tapi tidak mengalami gejala 23 (works)
    else if (firstReply === question1 && secondReply === question18 && 
      thirdReply === question23 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[0][0]} dan ${sympthom[18][0]} yang merupakan 2 dari 3 gejala Uveitis.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 1,18 dan 23 (works)
    else if (firstReply === question1 && secondReply === question18 && 
      thirdReply === question23 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[0][0]}, ${sympthom[18][0]} dan ${sympthom[22][0]} yang merupakan 3 dari 3 gejala Uveitis.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }

    // hanya gejala 1
    // jika user hanya mengalami gejala 1 tapi tidak mengalami gejala 2, 5, 14 dan 18
    else if (firstReply === question1 && secondReply === question18 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[0][0]}, 
      belum bisa ditentukan hasil skrining penyakit mata anda`;
      setSecondReply(reply)
    }


    // Nomor aturan 9
    // jika user tidak mengalami gejala 1 lanjut tanya gejala 2
    else if (firstReply === question1 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question2;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 2 lanjut tanya gejala 5
    else if (firstReply === question2 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question5;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 2 tapi tidak mengalami gejala 5 lanjut ke gejala 29
    /*
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question29;
      setSecondReply(reply)
    }
    */
    /*
    // jika user mengalami gejala 2 dan 5 lanjut tanya gejala 14
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question14;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 2 dan 5, tapi tidak mengalami gejala 14, lanjut tanya gejala 25
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question25;
      setThirdReply(reply)
    }*/
    // jika user mengalami gejala 2, 5 dan 14, lanjut tanya gejala 27
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 2, 5 dan 14, tapi tidak mengalami gejala 27
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]} dan ${sympthom[13][0]} yang merupakan 3 dari 7 gejala Glaukoma.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 2, 5, 14 dan 27, lanjut tanya gejala 35
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question35;
      setFifthReply(reply)
    }
    // jika user mengalami gejala 2, 5, 14 dan 27, tapi tidak mengalami gejala 35
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]}, ${sympthom[13][0]} dan ${sympthom[26][0]} yang merupakan 4 dari 7 gejala Glaukoma.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 2, 5, 14, 27 dan 35, lanjut tanya gejala 43
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question43;
      setSixthReply(reply)
    }
    // jika user mengalami gejala 2, 5, 14, 27 dan 35, tapi tidak mengalami gejala 43
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === question43 &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]}, ${sympthom[13][0]}, ${sympthom[26][0]} dan ${sympthom[34][0]} yang merupakan 5 dari 7 gejala Glaukoma.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 2, 5, 14, 27, 35 dan 43, lanjut tanya gejala 44
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === question43 &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question44;
      setSeventhReply(reply)
    }
    // jika user mengalami gejala 2, 5, 14, 27, 35 dan 43, tapi tidak mengalami gejala 44
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === question43 &&
      seventhReply === question44 && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]}, ${sympthom[13][0]}, ${sympthom[26][0]}, ${sympthom[34][0]} dan ${sympthom[42][0]} yang merupakan 6 dari 7 gejala Glaukoma.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 2, 5, 14, 27, 35, 43 dan 44
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === question27 &&
      fifthReply === question35 && sixthReply === question43 &&
      seventhReply === question44 && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]}, ${sympthom[13][0]}, ${sympthom[26][0]}, ${sympthom[34][0]}, ${sympthom[42][0]} dan ${sympthom[43][0]} yang merupakan 7 dari 7 gejala Glaukoma.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 10
    // jika user mengalami gejala 2 dan 5 lanjut tanya gejala 14 (works)
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question14;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 2 dan 5, tapi tidak mengalami gejala 14, (works)
    lanjut tanya gejala 25 */
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question14 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question25;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 2 dan 5, tapi tidak mengalami gejala 14, 
    dan mengalami gejala 25, lanjut tanya gejala 26 (works)*/
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question25 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question26;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 2 dan 5, tidak mengalami gejala 14, 
    dan tidak mengalami gejala 25 (works)*/
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question25 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]} dan ${sympthom[4][0]}, belum bisa ditentukan hasil skirining penyakit mata anda.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    /* jika user mengalami gejala 2 dan 5, tapi tidak mengalami gejala 14, 
    dan mengalami gejala 25 dan 26 (works)*/
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question25 && fourthReply === question26 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[4][0]}, ${sympthom[24][0]} dan ${sympthom[25][0]} yang merupakan 4 dari 4 gejala Selulitis Orbitalitas.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    /* jika user mengalami gejala 2 dan 5, tapi tidak mengalami gejala 14, 
    dan mengalami gejala 25, tapi tidak mengalami gejala 26 (works)*/
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === question25 && fourthReply === question26 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]} dan ${sympthom[4][0]} dan ${sympthom[24][0]} yang merupakan 3 dari 4 gejala Selulitis Orbitalitas.
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengelami gejala 2 tapi tidak mengalami gejala 5 dan 29 (works)
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }


    // Nomor aturan 11
    // jika user mengalami gejala 2 tapi tidak mengalami gejala 5 lanjut ke gejala 29 (works)
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question29;
      setSecondReply(reply)
    }
    /* jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29, lanjut ke gejala 35 (works)*/
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question35;
      setThirdReply(reply)
    }
    /* jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29 dan tidak mengalami gejala 35 (works) */
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === question35 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]} dan ${sympthom[28][0]} yang merupakan 2 dari 4 gejala Miopi. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    /* jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29 dan 35 lanjut ke gejala 51 (works) */
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === question35 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question51;
      setFourthReply(reply)
    }
    /* jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29 dan 35, tapi tidak mengalami gejala 51 (works) */
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === question35 && fourthReply === question51 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[28][0]} dan ${sympthom[34][0]} yang merupakan 3 dari 4 gejala Miopi. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    /* jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29,35 dan 51 (works) */
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === question35 && fourthReply === question51 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[1][0]}, ${sympthom[28][0]}, ${sympthom[34][0]} dan ${sympthom[50][0]} yang merupakan 4 dari 4 gejala Miopi. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }


    // Nomor aturan 12 Kalazion
    /*
    jika user mengalami gejala 2 tapi tidak mengalami gejala 5 lanjut ke gejala 29 (works)
    else if (firstReply === question2 && secondReply === question5 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question29;
      setSecondReply(reply)
    }
    jika user mengalami gejala 2 tapi tidak mengalami gejala 5 
    dan mengalami gejala 29, lanjut ke gejala 35 (works)
    else if (firstReply === question2 && secondReply === question29 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question35;
      setThirdReply(reply)
    }*/
    // jika user tidak mengalami gejala 2 lanjut ke gejala 5
    else if (firstReply === question2 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question5;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 5, lanjut tanya gejala 6
    else if (firstReply === question5 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question6;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 5 dan tidak mengelami gejala6 lanjut tanya gejala 16
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question16;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 5 dan mengelami gejala 6 lanjut tanya gejala 7
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question7;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 5 dan 6, tapi tidak mengalami gejala 7
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === question7 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]} dan ${sympthom[5][0]} yang merupakan 2 dari 4 gejala Kalazion. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 6 dan 7 lanjut tanya gejala 8
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === question7 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question8;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 5, 6, dan 7, tapi tidak mengalami gejala 8
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === question7 && fourthReply === question8 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[5][0]} dan ${sympthom[6][0]} yang merupakan 3 dari 4 gejala Kalazion. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 6, 7 dan 8
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === question7 && fourthReply === question8 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[5][0]}, ${sympthom[6][0]} dan ${sympthom[7][0]} yang merupakan 4 dari 4 gejala Kalazion. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 13 Trakoma
    /*
    jika user mengalami gejala 5, lanjut tanya gejala 6
    else if (firstReply === question5 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question6;
      setSecondReply(reply)
    }
    jika user mengalami gejala 5 dan tidak mengelami gejala 6 lanjut tanya gejala 16
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question16;
      setSecondReply(reply)
    }*/
    // jika user mengalami gejala 5 dan mengelami gejala 16 lanjut tanya gejala 17
    else if (firstReply === question5 && secondReply === question16 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question17;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 5 dan 16, tapi tidak mengalami gejala 17
    else if (firstReply === question5 && secondReply === question16 && 
      thirdReply === question17 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]} dan ${sympthom[15][0]} yang merupakan 2 dari 3 gejala Trakoma. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 16 dan 17
    else if (firstReply === question5 && secondReply === question16 && 
      thirdReply === question17 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[15][0]} dan ${sympthom[16][0]} yang merupakan 3 dari 3 gejala Trakoma. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 14 Oftalmia Neonatorum
    /*
    jika user mengalami gejala 5 dan tidak mengelami gejala 6 lanjut tanya gejala 16
    else if (firstReply === question5 && secondReply === question6 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question16;
      setSecondReply(reply)
    }*/
    // jika user mengalami gejala 5 dan tidak mengelami gejala 6 dan 16
    // lanjut tanya gejala 18
    else if (firstReply === question5 && secondReply === question16 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 5 dan mengelami gejala 18
    // lanjut tanya gejala 27
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 5 dan 18, tapi tidak mengalami gejala 27
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]} dan ${sympthom[17][0]} yang merupakan 2 dari 5 gejala Oftalmia Neonatorum. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 18 dan 27, lanjut tanya gejala 33
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question33
      setFourthReply(reply)
    }
    // jika user mengalami gejala 5, 18 dan 27, tapi tidak mengalami gejala 33
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === question33 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[17][0]} dan ${sympthom[26][0]} yang merupakan 3 dari 5 gejala Oftalmia Neonatorum. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 18, 27 dan 33, lanjut tanya gejala 50
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === question33 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question50
      setFifthReply(reply)
    }
    // jika user mengalami gejala 5, 18, 27 dan 33
    // tapi tidak mengalami gejala 50
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === question33 &&
      fifthReply === question50 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[17][0]}, ${sympthom[26][0]} dan ${sympthom[32][0]} yang merupakan 4 dari 5 gejala Oftalmia Neonatorum. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5, 18, 27, 33 dan 50
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === question27 && fourthReply === question33 &&
      fifthReply === question50 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[4][0]}, ${sympthom[17][0]}, ${sympthom[26][0]}, ${sympthom[32][0]} dan ${sympthom[49][0]} yang merupakan 5 dari 5 gejala Oftalmia Neonatorum. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 15 Retinitis Pigmentosa
    /*
    jika user mengalami gejala 5 dan tidak mengelami gejala 6 dan 16
    lanjut tanya gejala 18
    else if (firstReply === question5 && secondReply === question16 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question18;
      setSecondReply(reply)
    }*/
    // jika user mengalami gejala 5 dan tidak mengelami gejala 6,16 dan 18
    // lanjut tanya gejala 21
    else if (firstReply === question5 && secondReply === question18 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question21;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 5 dan mengelami gejala 21
    // lanjut tanya gejala 27
    else if (firstReply === question5 && secondReply === question21 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[4][0]} dan ${sympthom[20][0]} yang merupakan 2 dari 2 gejala Retinitis Pigmentosa. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 5 dan tidak mengelami gejala 6,16,18 dan 21
    else if (firstReply === question5 && secondReply === question21 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[4][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;     
    }



    // Nomor aturan 16 Pterygium 
    // gejala6, gejala14, gejala18, gejala27, gejala52, gejala53, gejala54
    // jika user tidak mengalami gejala 2 dan 5, lanjut tanya gejala 6
    else if (firstReply === question5 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question6;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 6, lanjut tanya gejala 14
    else if (firstReply === question6 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question14;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 6, tapi tidak mengalami gejala 14
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[5][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6 dan 14, lanjut tanya gejala 18
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question18;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 6 dan 14, tapi tidak mengalami gejala 18
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[5][0]} dan ${sympthom[13][0]}, yang merupakan 2 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6,14 dan 18, lanjut tanya gejala 27
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 6,14 dan 18, tapi tidak mengalami gejala 27
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[5][0]}, ${sympthom[13][0]} dan ${sympthom[17][0]}, yang merupakan 3 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6,14,18 dan 27, lanjut tanya gejala 52
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question52;
      setFifthReply(reply)
    }
    // jika user mengalami gejala 6,14,18 dan 27, tapi tidak mengalami gejala 52
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[5][0]}, ${sympthom[13][0]}, ${sympthom[17][0]} dan ${sympthom[26][0]}, yang merupakan 4 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6,14,18,27 dan 52, lanjut tanya gejala 53
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question53;
      setSixthReply(reply)
    }
    // jika user mengalami gejala 6,14,18,27 dan 52, tapi tidak mengalami gejala 53
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === question53 &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[5][0]}, ${sympthom[13][0]}, ${sympthom[17][0]}, ${sympthom[26][0]} dan ${sympthom[51][0]}, yang merupakan 5 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6,14,18,27,52 dan 53, lanjut tanya gejala 54
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === question53 &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question54;
      setSeventhReply(reply)
    }
    // jika user mengalami gejala 6,14,18,27,52 dan 53, tapi tidak mengalami gejala 54
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === question53 &&
      seventhReply === question54 && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[5][0]}, ${sympthom[13][0]}, ${sympthom[17][0]}, ${sympthom[26][0]}, ${sympthom[51][0]} dan ${sympthom[52][0]}, yang merupakan 6 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengalami gejala 6,14,18,27,52,53 dan 54
    else if (firstReply === question6 && secondReply === question14 && 
      thirdReply === question18 && fourthReply === question27 &&
      fifthReply === question52 && sixthReply === question53 &&
      seventhReply === question54 && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[5][0]}, ${sympthom[13][0]}, ${sympthom[17][0]}, ${sympthom[26][0]}, ${sympthom[51][0]}, ${sympthom[52][0]} dan ${sympthom[53][0]} dan ${sympthom[53][0]}, yang merupakan 7 dari 7 gejala Pterygium. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 17 Alergi Mata Merah (gejala12, gejala28, gejala30, gejala31)
    // jika user tidak mengelami gejala 2,5 dan 6 lanjut ke gejala 12 (works)
    else if (firstReply === question6 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question12;
      setFirstReply(reply)
    }
    // jika user mengelami gejala 12, lanjut tanya gejala 28 (works)
    else if (firstReply === question12 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question28;
      setSecondReply(reply)
    }
    // jika user mengelami gejala 12, 
    // tapi tidak mengalami gejala gejala 28
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[11][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengelami gejala 12,28 lanjut tanya gejala 30
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question30;
      setThirdReply(reply)
    }
    // jika user mengelami gejala 12,28
    // tapi tidak mengalami gejala gejala 30
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === question30 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[11][0]} dan ${sympthom[27][0]} yang merupakan 2 dari 4 gejala Alergi Mata Merah. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }
    // jika user mengelami gejala 12,28,30 lanjut tanya gejala 31
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === question30 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question31;
      setFourthReply(reply)
    }
    // jika user mengelami gejala 12,28,30
    // tapi tidak mengalami gejala gejala 31
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === question30 && fourthReply === question31 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[11][0]}, ${sympthom[27][0]} dan ${sympthom[29][0]} yang merupakan 3 dari 4 gejala Alergi Mata Merah. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }

    // jika user mengelami gejala 12,28,30,31
    else if (firstReply === question12 && secondReply === question28 && 
      thirdReply === question30 && fourthReply === question31 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[11][0]}, ${sympthom[27][0]}, ${sympthom[29][0]} dan ${sympthom[30][0]} yang merupakan 4 dari 4 gejala Alergi Mata Merah. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`;
    }



    // Nomor aturan 18 Hordeolum (Stye) (gejala13, gejala14, gejala15, gejala27)
    // jika user tidak mengelami gejala 2,5,6 dan 12, lanjut tanya gejala 13 (works)
    else if (firstReply === question12 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question13;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 13, lanjut tanya gejala 14 (works)
    else if (firstReply === question13 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question14;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 13, tapi tidak mengalami gejala 14 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[12][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 13 dan 14, lanjut tanya gejala 15 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question15;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 13 dan 14, tapi tidak mengalami gejala 15 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === question15 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[12][0]} dan ${sympthom[13][0]}, yang merupakan 2 dari 4 gejala Hordeolum (Stye). 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 13,14 dan 15, lanjut tanya gejala 27 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === question15 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 13,14 dan 15, tapi tidak mengalami gejala 27 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === question15 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[12][0]}, ${sympthom[13][0]} dan ${sympthom[14][0]}, yang merupakan 3 dari 4 gejala Hordeolum (Stye). 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 13,14,15 dan 27 (works)
    else if (firstReply === question13 && secondReply === question14 && 
      thirdReply === question15 && fourthReply === question27 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[12][0]}, ${sympthom[13][0]}, ${sympthom[14][0]} dan ${sympthom[26][0]}, yang merupakan 4 dari 4 gejala Hordeolum (Stye). 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // Nomor aturan 19 Dakriosistitis (gejala14, gejala25, gejala27, gejala40, gejala41)
    // jika user tidak mengelami gejala 2,5,6,12 dan 13, lanjut tanya gejala 14 (works)
    else if (firstReply === question13 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question14;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 14, lanjut tanya gejala 25 (works)
    else if (firstReply === question14 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question25;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 14, dan tidak mengalami gejala 25 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[13][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 14 dan 25, lanjut tanya gejala 27 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question27;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 14 dan 25, dan tidak mengalami gejala 27 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[13][0]} dan ${sympthom[24][0]}, yang merupakan 2 dari 5 gejala Dakriosistitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 14,25 dan 27, lanjut tanya gejala 40 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question40;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 14,25 dan 27, dan tidak mengalami gejala 40 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === question40 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[13][0]}, ${sympthom[24][0]} dan ${sympthom[26][0]}, yang merupakan 3 dari 5 gejala Dakriosistitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 14,25,27 dan 40, lanjut tanya gejala 41 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === question40 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question41;
      setFifthReply(reply)
    }
    // jika user mengalami gejala 14,25,27 dan 40, tapi tidak mengalami gejala 41 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === question40 &&
      fifthReply === question41 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[13][0]}, ${sympthom[24][0]}, ${sympthom[26][0]} dan ${sympthom[39][0]}, yang merupakan 4 dari 5 gejala Dakriosistitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 14,25,27,40 dan 41 (works)
    else if (firstReply === question14 && secondReply === question25 && 
      thirdReply === question27 && fourthReply === question40 &&
      fifthReply === question41 && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[13][0]}, ${sympthom[24][0]}, ${sympthom[26][0]}, ${sympthom[39][0]} dan ${sympthom[40][0]}, yang merupakan 5 dari 5 gejala Dakriosistitis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // Nomor aturan 20 dan 21 (gejala18, gejala19, gejala20)
    // jika user tidak mengalami gejala 2,5,6,12,13 dan 14,  (works)
    // lanjut tanya gejala 18
    else if (firstReply === question14 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') { 
      reply=question18;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 18, lanjut tanya gejala 19 (works)
    else if (firstReply === question18 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question19;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 18, tapi tidak mengalami tanya gejala 19 (works)
    else if (firstReply === question18 && secondReply === question19 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[17][0]}, belum bisa ditentukan hasil skrining penyakit mata anda`;
    }
    // jika user mengalami gejala 18 dan 19 lanjut tanya gejala 20 (works)
    else if (firstReply === question18 && secondReply === question19 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question20;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 18 dan 19, tapi tidak mengalami tanya gejala 20 (works)
    else if (firstReply === question18 && secondReply === question19 && 
      thirdReply === question20 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[17][0]} dan ${sympthom[18][0]}, yang merupakan 2 dar 2 gejala Retinopati Diabetikum. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 18,19 dan 20 (works)
    else if (firstReply === question18 && secondReply === question19 && 
      thirdReply === question20 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[17][0]}, ${sympthom[18][0]} dan ${sympthom[19][0]}, yang merupakan 3 dar 3 gejala Abalso Retina. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }

    

    // Nomor aturan 22 Xerophtalmania (gejala22, gejala45, gejala46)
    // jika user tidak mengalami gejala 2,5,6,12,13,14 dan 18, (works)
    // lanjut tanya gejala 22
    else if (firstReply === question18 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question22;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 22, lanjut tanya gejala 45 (works)
    else if (firstReply === question22 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question45;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 22, tapi tidak mengalamai gejala 45 (works)
    else if (firstReply === question22 && secondReply === question45 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[21][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 22 dan 45, lanjut tanya gejala 46 (works)
    else if (firstReply === question22 && secondReply === question45 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question46;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 22 dan 45, tapi tidak mengalamai gejala 46 (works)
    else if (firstReply === question22 && secondReply === question45 && 
      thirdReply === question46 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[21][0]} dan ${sympthom[44][0]}, yang merupakan 2 dari 3 gejala Xerophtalmania. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 22,45 dan 46 (works)
    else if (firstReply === question22 && secondReply === question45 && 
      thirdReply === question46 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[21][0]}, ${sympthom[44][0]} dan ${sympthom[45][0]}, yang merupakan 3 dari 3 gejala Xerophtalmania. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // Nomor aturan 23 Eksoftalmus (gejala24)
    // jika user tidak mengalami gejala 2,5,6,12,13,14,18 dan 22, (works)
    // lanjut tanya gejala 24
    else if (firstReply === question22 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question24;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 24 (works)
    else if (firstReply === question24 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[23][0]}, yang merupakan 1 dari 1 gejala Eksoftalmus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // Nomor aturan 24 Trombosis Sinus Kavernosus (gejala25, gejala35, gejala36, gejala37)
    // jika user tidak mengalami gejala 2,5,6,12,13,14,18,22 dan 24, (works)
    // lanjut tanya gejala 25
    else if (firstReply === question24 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question25;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 25 lanjut tanya gejala 35 (works)
    else if (firstReply === question25 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question35;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 25, tapi tidak mengetahui gejala 35 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[24][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 25 dan 35, lanjut tanya gejala 36 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question36;
      setThirdReply(reply)
    }
    // jika user mengalami gejala 25 dan 35, tapi tidak mengalami gejala 36 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === question36 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[24][0]} dan ${sympthom[34][0]}, yang merupakan 2 dari 4 gejala Trombosis Sinus Kavernosus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 25,35 dan 36, lanjut tanya gejala 37 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === question36 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question37;
      setFourthReply(reply)
    }
    // jika user mengalami gejala 25,35 dan 36, tapi tidak mengalami gejala 37 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === question36 && fourthReply === question37 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[24][0]}, ${sympthom[34][0]} dan ${sympthom[35][0]}, yang merupakan 3 dari 4 gejala Trombosis Sinus Kavernosus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 25,35,36 dan 37 (works)
    else if (firstReply === question25 && secondReply === question35 && 
      thirdReply === question36 && fourthReply === question37 &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[24][0]}, ${sympthom[34][0]}, ${sympthom[35][0]} dan ${sympthom[36][0]}, yang merupakan 4 dari 4 gejala Trombosis Sinus Kavernosus. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // Nomor aturan 25 Optic Neuritis (gejala38, gejala39)
    // jika user tidak mengalami gejala 2,5,6,12,13,14,18,22,24,25 dan 38, (works)
    // lanjut tanya gejala 38
    else if (firstReply === question25 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question38;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 38, lanjut tanya gejala 39
    else if (firstReply === question38 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question39;
      setSecondReply(reply)
    }
    // jika user mengalami gejala 38, tapi tidak mengalami gejala 39
    else if (firstReply === question38 && secondReply === question39 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[37][0]}, yang merupakan 1 dari 2 gejala Optic Neuritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 38 dan 39
    else if (firstReply === question38 && secondReply === question39 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[37][0]} dan ${sympthom[38][0]}, yang merupakan 2 dari 2 gejala Optic Neuritis. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    


    // Nomor aturan 26 Degenerasi Makula (gejala47, gejala48, gejala49)
    // jika user tidak mengalami gejala 2,5,6,12,13,14,18,22,24,25,38 dan 47 (works)
    // lanjut tanya gejala 47
    else if (firstReply === question38 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=question47;
      setFirstReply(reply)
    }
    // jika user mengalami gejala 47, lanjut tanya gejala 48 (works)
    else if (firstReply === question47 && secondReply === '' && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question48;
      setSecondReply(reply)
    }
    // jika user mengelami gejala 47, tapi tidak mengalami gejala 48 (works)
    else if (firstReply === question47 && secondReply === question48 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda hanya mengalami gejala ${sympthom[46][0]}, belum bisa ditentukan hasil skrining penyakit mata anda. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 47 dan 48, lanjut tanya gejala 49 (works)
    else if (firstReply === question47 && secondReply === question48 && 
      thirdReply === '' && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=question49;
      setThirdReply(reply)
    }
    // jika user mengelami gejala 47 dan 48, tapi tidak mengalami gejala 49 (works)
    else if (firstReply === question47 && secondReply === question48 && 
      thirdReply === question49 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 't') {
      reply=`Anda mengalami gejala ${sympthom[46][0]} dan ${sympthom[47][0]}, yang merupakan 2 dari 3 gejala Degenerasi Makula. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }
    // jika user mengalami gejala 47,48 dan 49 (works)
    else if (firstReply === question47 && secondReply === question48 && 
      thirdReply === question49 && fourthReply === '' &&
      fifthReply === '' && sixthReply === '' &&
      seventhReply === '' && eightReply === '' &&
      input === 'y') {
      reply=`Anda mengalami gejala ${sympthom[46][0]}, ${sympthom[47][0]} dan ${sympthom[48][0]}, yang merupakan 3 dari 3 gejala Degenerasi Makula. 
      Silahkan konsultasi ke dokter spesialis mata untuk informasi lebih lanjut.`
    }



    // jika user tidak mengalami gejala 2,5,6,12,13,14,18,22,24,25,38 dan 47 (works)
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
  
  return(
    <div className='container' style={{marginTop:'70px',marginBottom:'50px'}}>
      <div className='card p-1 mb-3 mx-auto mw-75 border-5px rounded shadow-lg'>
        <ChatbotInterface 
          input={input}
          handleChange={handleChange}
          handleKey={handleKey}
          handleSubmit={handleSubmit}
          handleSubmitMulai={handleSubmitMulai}
          handleSubmitYa={handleSubmitYa}
          handleSubmitTidak={handleSubmitTidak}
          berhasil={berhasil}
          firstReply={firstReply}
          secondReply={secondReply}
          thirdReply={thirdReply}
          fourthReply={fourthReply}
          fifithReply={fifthReply}
          sixthReply={sixthReply}
          seventhReply={seventhReply}
          eightReply={eightReply}
        />
      </div>
    </div>
  )
}

export default InferenceMachine