import { useEffect, useState } from 'react';
import AddChat from './AddChat';
import AddChat2 from './AddChat2';
import Compare from './Compare';
import ChatbotInterface from './ChatbotInterface';
import {prompts,replies,alternative,coronavirus,} from '../data/PromptsAndReplies';
import '../index.css';

const sympthom = [
  [''],
  ['peka terhadap cahaya (fotofobia) (gejala 1)'],
  ['terasa nyeri (gejala 2)'],
  ['tampak bintik nanah berwarna kuning keputihan pada kornea (gejala 3)'],
  ['terdapat kotoran (gejala 4)'], // check
  ['kelopak mata membengkak (gejala 5)'],
  ['mata mengalami iritasi (gejala 6)'],
  ['terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan (gejala 7)'],
  ['terbentuk daerah kemerahan/abu-abu di bawah kelopak mata (gejala 8)'],
  ['bulu mata rontok (gejala 9)'],
  ['mata sukar dibuka ketika bangun dipagi hari (gejala 10)'],
  ['alergi (gejala 11)'],
  ['mata terasa panas (gejala 12)'],
  ['mata seperti kelilipan (gejala 13)'],
  ['mata berair (gejala 14)'],	
  ['nyeri pada tepi kelopak mata (gejala 15)'],	
  ['kornea tampak keruh (gejala 16)'],
  ['konjungtiva meradang (gejala 17)'],
  ['penglihatan kabur (gejala 18)'],	
  ['terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya (gejala 19)'],
  ['hilangnya fungsi penglihatan pada salah satu mata,yang kemudian menyebar sejalan perkembangan ablasio (gejala 20)'],
  ['kesulitan melihat di malam hari (gejala 21)'],
  ['penurunan ketajaman penglihatan (bahkan di siang hari) (gejala 22)'],	
  ['kemerahan pada skelra (gejala 23)'],
  ['mata menonjol (gejala 24)'],
  ['demam (gejala 25)'],
  ['bola mata bengkak dan tampak berkabut (gejala 26)'],
  ['mata merah (gejala 27)'],
  ['mata terasa gatal (gejala 28)'],
  ['mata terasa perih (gejala 29)'],
  ['konjungtiva menjadi merah (gejala 30)'],
  ['konjungtiva bengkak (gejala 31)'],
  ['peradangan mata yang agak menonjol dan berwarna kuning (gejala 32)'],
  ['mata nyeri bila ditekan (gejala 33)'],
  ['gangguan penglihatan (gejala 34)'],
  ['sakit kepala (gejala 35)'],
  ['koma (gejala 36)'],
  ['kejang (gejala 37)'],
  ['sakit dengan gerakan mata (gejala 38)'],
  ['kehilangan penglihatan (gejala 39)'],
  ['nyeri di daerah sekitar kantong air mata (gejala 40)'],
  ['mata mengeluarkan nanah (gejala 41)'],
  ['pusing karena lelah (gejala 42)'],
  ['mengalami mual dan muntah (gejala 43)'],
  ['pupil melebar dan tidak mengecil jika diberi sinar yang terang (gejala 44)'],
  ['sel batang retina sulit berdaptasi diruang yang remang-remang (gejala 45)'],
  ['tidak dapat melihat pada lingkungan yang kurang bercahaya (gejala 46)'],
  ['gangguan penglihatan pada salah satu mata (gejala 47)'],
  ['garis mata lurus terlihat bergelombang (gejala 48)'],
  ['mata tidak nyeri (gejala 49)'],
  ['riwayat penyakit menular seksual pada ibu (gejala 50)'],
  ['air mata berlebihan (gejala 51)'],
  ['mata kering (gejala 52)'],
  ['benjolan pada mata bagian atas atau bawah (gejala 53)'],
  ['seperti ada benda asing di mata (gejala 54)'],
  ['nyeri mata hebat (gejala 55)'],
  ['mata merah tidak merata (gejala 56)'],
  ['bercak merah pada sklera (gejala 57)'],
  ['palpebra atau kelopak mata bengkak warna biru jingga (gejala 58)'],
];

const question = `Apa kamu mengalami gejala`;
const lastQuestion = `? <span class='border-3 border-blue-500 px-2 py-0 rounded-2xl'>ya/tidak</span>`;
const gejala  = [
  [`this was index array numer 0`],
  [`${question} ${sympthom[1][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[2][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[3][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[4][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[5][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[6][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[7][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[8][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[9][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[10][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[11][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[12][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[13][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[14][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[15][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[16][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[17][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[18][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[19][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[20][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[21][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[22][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[23][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[24][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[25][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[26][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[27][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[28][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[29][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[30][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[31][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[32][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[33][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[34][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[35][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[36][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[37][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[38][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[39][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[40][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[41][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[42][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[43][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[44][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[45][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[46][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[47][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[48][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[49][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[50][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[51][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[52][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[53][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[54][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[55][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[56][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[57][0]} pada mata ${lastQuestion}`],
  [`${question} ${sympthom[58][0]} pada mata ${lastQuestion}`],
]

const ruleBase = [
  [''],
  // gejala[18] = x
  // gejala[27] = y
  // ruleBase[1 - 5]
  [gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[1],gejala[2],gejala[12],gejala[14],gejala[28],'Konjungtivitis'],
  [gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[28],gejala[29],'Keratitis Pungtata Superfisialis'],
  [gejala[1],gejala[2],gejala[21],gejala[22],'Katarak'],
  [gejala[1],gejala[2],gejala[24],gejala[34],'Endoflamitis'],
  // ruleBase[6 - 10]
  [gejala[1],gejala[5],gejala[9],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],'Blefaritis'],
  [gejala[1],gejala[14],gejala[18],gejala[21],'Keratokonus'],
  [gejala[1],gejala[18],gejala[23],'Retinopati Debiritikum'],
  [gejala[2],gejala[1],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[2],gejala[1],gejala[12],gejala[14],gejala[28],'Konjungtivitis'],
  // ruleBase[11 - 15]
  [gejala[2],gejala[1],gejala[14],gejala[18],gejala[27],gejala[28],gejala[29],'Keratitis Pungtata Superfisialis'],  
  [gejala[2],gejala[1],gejala[21],gejala[22],'Katarak'],
  [gejala[2],gejala[1],gejala[24],gejala[34],'Endoftalmitis'],
  [gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[43],gejala[44],'Glaukoma'],
  [gejala[2],gejala[5],gejala[25],gejala[26],'Selulitis Orbita'],
  // rulaBase[16 - 20]
  [gejala[2],gejala[29],gejala[35],gejala[51],'Miopi'],
  [gejala[3],gejala[1],gejala[2],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[4],gejala[1],gejala[2],gejala[3],gejala[5],gejala[6],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[5],gejala[1],gejala[2],gejala[3],gejala[4],gejala[6],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[5],gejala[1],gejala[9],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],'Blefaritis'],
  // ruleBase[21 - 25]
  [gejala[5],gejala[2],gejala[14],gejala[27],gejala[35],gejala[43],gejala[44],'Glaukoma'],
  [gejala[5],gejala[2],gejala[25],gejala[26],'Selulitis Orbitalitas'],
  [gejala[5],gejala[6],gejala[7],gejala[8],'Kalazion'],
  [gejala[5],gejala[16],gejala[17],'Trakoma'],
  [gejala[5],gejala[18],gejala[27],gejala[33],gejala[50],'Oftalmia Neonatorum'],
  // ruleBase[26 - 30]
  [gejala[5],gejala[21],'Retinitis Pigmentosa'],
  [gejala[6],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[7],gejala[8],'Ulkus Kornea'],
  [gejala[6],gejala[5],gejala[7],gejala[8],'Kalazion'],
  [gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[53],gejala[54],'Pterygium'],
  [gejala[7],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[8],'Ulkus Kornea'],
  // ruleBase[31 - 35]
  [gejala[7],gejala[5],gejala[6],gejala[8],'Kalazion'],
  [gejala[8],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],'Ulkus Kornea'],
  [gejala[8],gejala[5],gejala[6],gejala[7],'Kalazion'],
  [gejala[9],gejala[1],gejala[5],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],'Blefaritis'],
  [gejala[10],gejala[1],gejala[5],gejala[9],gejala[11],gejala[12],gejala[27],gejala[28],'Blefaritis'],
  // ruleBase[36 - 40]
  [gejala[11],gejala[1],gejala[5],gejala[9],gejala[10],gejala[12],gejala[27],gejala[28],'Blefaritis'],
  [gejala[12],gejala[1],gejala[2],gejala[14],gejala[28],'Konjungtivitis'],
  [gejala[12],gejala[1],gejala[5],gejala[9],gejala[10],gejala[11],gejala[27],gejala[28],'Blefaritis'],
  [gejala[12],gejala[28],gejala[30],gejala[31],'Alergi Mata Merah'],
  [gejala[13],gejala[14],gejala[15],gejala[27],'Hordeolum (Stye)'],
  // ruleBase[41 - 45]
  [gejala[14],gejala[1],gejala[2],gejala[12],gejala[28],'Konjungtivitis'],
  [gejala[14],gejala[1],gejala[2],gejala[18],gejala[27],gejala[28],gejala[29],'Keratitis Pungtata Superfisialis'],
  [gejala[14],gejala[1],gejala[18],gejala[21],'Keratokonus'],
  [gejala[14],gejala[2],gejala[5],gejala[27],gejala[35],gejala[43],gejala[44],'Glaukoma'],
  [gejala[14],gejala[6],gejala[18],gejala[27],gejala[52],gejala[53],gejala[54],'Pterygium'],
  // ruleBase[46 - 50]
  [gejala[14],gejala[13],gejala[15],gejala[27],'Hordeolum (Stye)'],
  [gejala[14],gejala[25],gejala[27],gejala[40],gejala[41],'Dakriosistitis'],
  [gejala[14],gejala[55],gejala[56],gejala[57],gejala[58],'Skleritis'],
  [gejala[15],gejala[13],gejala[14],gejala[27],'Hordeolum (Stye)'],
  [gejala[16],gejala[5],gejala[17],'Trakoma'],
  // ruleBase[51 - 55]
  [gejala[17],gejala[5],gejala[16],'Trakoma'],
  [gejala[18],gejala[1],gejala[2],gejala[14],gejala[27],gejala[28],gejala[29],'Keratitis Pungtata Superfisialis'],
  [gejala[18],gejala[1],gejala[14],gejala[21],'Keratokonus'], // have been checked and worked
  [gejala[18],gejala[1],gejala[23],'Retinopati Debiritikum'],
  [gejala[18],gejala[5],gejala[27],gejala[33],gejala[50],'Oftalmia Neonatorum'],
  // ruleBase[56 - 60]
  [gejala[18],gejala[6],gejala[14],gejala[27],gejala[52],gejala[53],gejala[54],'Pterygium'],
  [gejala[18],gejala[19],gejala[20],'Abalso Retina'], // have been checked and worked
  [gejala[18],gejala[19],'Retinopati Diabetikum'], // have been checked and worked
  [gejala[19],gejala[18],gejala[20],'Abalso Retina'],
  [gejala[19],gejala[18],'Retinopati Diabetikum'],
  // ruleBase[61 - 65]
  [gejala[21],gejala[1],gejala[2],gejala[22],'Katarak'],
  [gejala[21],gejala[1],gejala[14],gejala[18],'Keratokonus'],
  [gejala[21],gejala[5],'Retinitis Pigmentosa'],
  [gejala[22],gejala[1],gejala[2],gejala[21],'Katarak'],
  [gejala[22],gejala[45],gejala[46],'Xerophtalmania'],
  // ruleBase[66 - 70]
  [gejala[23],gejala[1],gejala[18],'Retinopati Debiritikum'],
  [gejala[24],gejala[1],gejala[2],gejala[34],'Endoflamitis'], // have been checked and worked
  [gejala[24],'Eksoftalmus'],
  [gejala[25],gejala[2],gejala[5],gejala[26],'Selulitis Orbitalitas'],
  [gejala[25],gejala[14],gejala[27],gejala[40],gejala[41],'Dakriosistitis'],
  // ruleBase[71 - 75]
  [gejala[25],gejala[35],gejala[36],gejala[37],'Trombosis Sinus Kavernosus'],
  [gejala[26],gejala[2],gejala[5],gejala[25],'Selulitis Orbitalitas'],
  [gejala[27],gejala[1],gejala[2],gejala[14],gejala[18],gejala[28],gejala[29],'Keratitis Pungtata Superfisialis'],
  [gejala[27],gejala[1],gejala[5],gejala[9],gejala[10],gejala[11],gejala[12],gejala[28],'Blefaritis'],
  [gejala[27],gejala[2],gejala[5],gejala[14],gejala[35],gejala[43],gejala[44],'Glaukoma'],
  // ruleBase[76 - 80]
  [gejala[27],gejala[5],gejala[18],gejala[33],gejala[50],'Oftalmia Neonatorum'],
  [gejala[27],gejala[6],gejala[14],gejala[18],gejala[52],gejala[53],gejala[54],'Pterygium'],
  [gejala[27],gejala[13],gejala[14],gejala[15],'Hordeolum (Stye)'],
  [gejala[27],gejala[14],gejala[25],gejala[40],gejala[41],'Dakriosistitis'],
  [gejala[28],gejala[1],gejala[2],gejala[12],gejala[14],'Konjungtivitis'],
  // ruleBase[81 - 85]
  [gejala[28],gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[29],'Keratitis Pungtata Superfisialis'],
  [gejala[28],gejala[1],gejala[5],gejala[9],gejala[10],gejala[11],gejala[12],gejala[27],'Blefaritis'],
  [gejala[28],gejala[12],gejala[30],gejala[31],'Alergi Mata Merah'],
  [gejala[29],gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[28],'Keratitis Pungtata Superfisialis'],
  [gejala[29],gejala[2],gejala[35],gejala[51],'Miopi'],
  // ruleBase[86 - 90]
  [gejala[33],gejala[5],gejala[18],gejala[27],gejala[50],'Oftalmia Neonatorum'],
  [gejala[30],gejala[12],gejala[28],gejala[31],'Alergi Mata Merah'],
  [gejala[31],gejala[12],gejala[28],gejala[30],'Alergi Mata Merah'],
  [gejala[34],gejala[1],gejala[2],gejala[24],'Endoflamitis'],
  [gejala[35],gejala[2],gejala[5],gejala[14],gejala[27],gejala[43],gejala[44],'Glaukoma'],
  // ruleBase[91 - 95]
  [gejala[35],gejala[2],gejala[29],gejala[51],'Miopi'],
  [gejala[35],gejala[25],gejala[36],gejala[37],'Trombosis Sinus Kavernosus'],
  [gejala[36],gejala[25],gejala[35],gejala[37],'Trombosis Sinus Kavernosus'],
  [gejala[37],gejala[25],gejala[35],gejala[36],'Trombosis Sinus Kavernosus'],
  [gejala[38],gejala[39],'Optic Neuritis'],
  // ruleBase[96 - 100]
  [gejala[39],gejala[38],'Optic Neuritis'],
  [gejala[40],gejala[14],gejala[25],gejala[27],gejala[41],'Dakriosistitis'],
  [gejala[41],gejala[14],gejala[25],gejala[27],gejala[40],'Dakriosistitis'],
  [gejala[43],gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[44],'Glaukoma'],
  [gejala[44],gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[43],'Glaukoma'],
  // ruleBase[101 - 105]
  [gejala[45],gejala[22],gejala[46],'Xerophtalmania'],
  [gejala[46],gejala[22],gejala[45],'Xerophtalmania'],
  [gejala[47],gejala[48],gejala[49],'Degenerasi Makula'],
  [gejala[48],gejala[47],gejala[49],'Degenerasi Makula'],
  [gejala[49],gejala[47],gejala[48],'Degenerasi Makula'],
  // ruleBase[106 - 110]
  [gejala[50],gejala[5],gejala[18],gejala[27],gejala[33],'Oftalmia Neonatorum'],
  [gejala[51],gejala[2],gejala[29],gejala[35],'Miopi'],
  [gejala[52],gejala[6],gejala[14],gejala[18],gejala[27],gejala[53],gejala[54],'Pterygium'],
  [gejala[53],gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[54],'Pterygium'],
  [gejala[54],gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[53],'Pterygium'],
  // ruleBase[111 - 114]
  [gejala[55],gejala[14],gejala[56],gejala[57],gejala[58],'Skleritis'],
  [gejala[56],gejala[14],gejala[55],gejala[57],gejala[58],'Skleritis'],
  [gejala[57],gejala[14],gejala[55],gejala[56],gejala[58],'Skleritis'],
  [gejala[58],gejala[14],gejala[55],gejala[56],gejala[57],'Skleritis'], // have been checked and worked (function test)
];

export default function InferenceMachine () {
  const [input, setInput] = useState('')
  // handle when form input was change or type by user and also get user input with setInput
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  // get bot reply after user input chat and button was clicked
  const handleSubmit = () => {
    Output(input)
    setInput('')    // return empty form after user press the button
  }
  // get bot reply after user input chat and enter was pressed
  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      Output(input)
      setInput('')  // return empty form after user press enter
    }
  }
  const handleMulai = () => {
    Output('skrining') // input = 'mulai'
    setInput('')    // return empty form after user press button
  }
  const handleYa = () => {
    Output('ya')    // input = 'ya'
    setInput('')    // return empty form after user press button
  }
  const handleTidak = () => {
    Output('tidak') // input = 'tidak'
    setInput('')    // return empty form after user press button
  }  

  // initialize state for screening system
  let [i,setI] = useState(0);
  let [j,setJ] = useState(0);
  let [replyNow, setReplyNow] = useState('');
  let [replyBefore, setReplyBefore] = useState('');
  let [allYesReply, setAllYesReply] = useState([]);
  let [lastValue, setLastValue] = useState([]);
  let [totalGejala, setTotalGejala] = useState([]);
  let [diagnoseResult, setDiagnoseResult] = useState('');

  function Screening(input) {
    let reply;
    if (input === 'mulai' || input === 'tes'|| input === 'test'  || input === 'skrining') {
      // re-empty
      setDiagnoseResult('');setReplyNow(''); setLastValue([]); setAllYesReply([]); setTotalGejala([]);
      // reply
      reply = ruleBase[1][0]; setReplyBefore(input); setI(1); setJ(0);
    }
    else if (input !== 'mulai' || input !== 'tes'|| input !== 'test'  || input !== 'skrining') {
      if (diagnoseResult === '') {
        if (replyBefore === 'mulai' || replyBefore === 'tes' || replyBefore === 'test' || replyBefore === 'skrining') {
          // the current value is ruleBase[i][j]
          if (input === 'y' || input === 'ya') {
            // save all yes reply before the last value in [i] array
            setAllYesReply([...allYesReply, ruleBase[i][j]]);
            // make sure there is no same value in array
            allYesReply = [...new Set(allYesReply)];
            // if ruleBase[i][j+1] is not last value in [i] array
            if (ruleBase[i][j+1] !== ruleBase[i][ruleBase[i].length - 1]) {
              reply = ruleBase[i][j+1]; 
              setI(i); setJ(j+1);
              setReplyNow(reply)
              // get total sympthon and last value of the array
              setTotalGejala([...totalGejala, ruleBase[i].length-1])
              setLastValue([...lastValue, ruleBase[i][ruleBase[i].length-1]]);
            }
            // if ruleBase[i][j+1] is the last value in [i] array
            else if (ruleBase[i][j+1] === ruleBase[i][ruleBase[i].length - 1]) {
              reply = `Kamu menjawab <strong>ya</strong> untuk ${totalGejala[totalGejala.length-1]} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${totalGejala[totalGejala.length-1]} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
              setDiagnoseResult(reply); setI(i); setJ(j);
            }
          }
          
          else if (input === 't' || input === 'tidak') {
              if (i !== ruleBase.length - 1) {
                // set total sympthon in the array and last value
                let totalGejalaSpecialCase = ruleBase[i+1].length-1;
                let LastValueSpecialCase = ruleBase[i+1][ruleBase[i+1].length-1];
                if (j === 0) {
                    let arr = [''];
                    for (let x = 0; x < ruleBase.length ; x++) {
                      arr.push(ruleBase[x][0]) // arr = [gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],...]
                    }
                    // delete same values in array
                    arr = [...new Set(arr)] // newArr = [gejala[1],gejala[2],gejala[3],gejala[4],...]
                    // find value of ruleBase[i][j] index in newArr
                    let findIndexinArr = arr.indexOf(ruleBase[i][j])
                    // last value in ruleBase[i], case for gejala[58], works
                    if (arr[findIndexinArr+1] === undefined) {
                      reply = `Maaf kamu tidak mengalami gejala penyakit mata yang ditanyakan oleh bot, sistem tidak dapat melakukan skrining. Tekan atau ketik mulai untuk mengulangi skrining`;
                      setDiagnoseResult(reply);
                    }
                    else if (arr[findIndexinArr+1] !== undefined) {
                      reply = arr[findIndexinArr+1]
                      // find reply in ruleBase[i][0]
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][0] === arr[findIndexinArr+1]) {
                          setI(x); setJ(0);
                          break
                        }
                      }
                    }
                }
                else if (j === 1) { 
                    let arr = [''];
                    // push all value in the same j index
                    for (let x = 0; x < ruleBase.length ; x++) {
                      if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                        arr.push(ruleBase[x][j])
                      }
                    }
                    // delete same values in array
                    arr = [...new Set(arr)]
                    // find value index in array
                    let findIndexinArr = arr.indexOf(ruleBase[i][j])
                    // if ruleBase[i+1][j] is the last value of ruleBase[i], case gejala[24]
                    if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]) {
                      reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                    if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                      reply = arr[findIndexinArr+1];
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                          if (ruleBase[x][j] === arr[findIndexinArr+1]) {
                            setI(x); setJ(j);
                            break
                          }
                        }
                      }
                    }
                    // case ruleBase[57][1] and rulaBase[110][1]
                    // if i === ruleBase.length, case for gejala[58], gejala[14]
                    if (arr[findIndexinArr+1] === undefined) {
                      reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                }
                else if (j === 2) { 
                    // check if the two value before is same
                    if (
                      ruleBase[i][j-1] === ruleBase[i+1][j-1] && 
                      ruleBase[i][j-2] === ruleBase[i+1][j-2]
                    ) {
                      let arr = [''];
                      // push all value in the same j index
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                          arr.push(ruleBase[x][j])
                        }
                      }
                      // delete same values in array
                      arr = [...new Set(arr)]
                      // find value index in array
                      let findIndexinArr = arr.indexOf(ruleBase[i][j])
                      // if ruleBase[i+1][j] is the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]){
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata bernama <strong>${LastValueSpecialCase}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                      // if ruleBase[i+1][j] is not the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                        reply = arr[findIndexinArr+1];
                        for (let x = 0; x < ruleBase.length ; x++) {
                          if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                            if (ruleBase[x][j] === arr[findIndexinArr+1]) {
                              setI(x); setJ(j);
                              break
                            }
                          }
                        }
                      }
                      // case ruleBase[57][1] and rulaBase[110][1]
                      // if i === ruleBase.length, case for gejala[58], gejala[14], gejala[55]
                      if (arr[findIndexinArr+1] === undefined) {
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                    }
                    // if the one value before was same but two value before is not same, case gejala[9]
                    // if the two value before was not same
                    else {
                      reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                }
                else if (j === 3) {
                    // check if the two and tree value before is same
                    if (
                      ruleBase[i][j-1] === ruleBase[i+1][j-1] &&
                      ruleBase[i][j-2] === ruleBase[i+1][j-2] && 
                      ruleBase[i][j-3] === ruleBase[i+1][j-3]
                    ) {
                      let arr = [''];
                      // push all value in the same j index
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                          arr.push(ruleBase[x][j])
                        }
                      }
                      // delete same values in array
                      arr = [...new Set(arr)]
                      // find value index in array
                      let findIndexinArr = arr.indexOf(ruleBase[i][j])
                      // if ruleBase[i+1][j] is the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]) {
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata bernama <strong>${LastValueSpecialCase}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                      // if ruleBase[i+1][j] is not the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                        reply = arr[findIndexinArr+1];
                        for (let x = 0; x < ruleBase.length ; x++) {
                          if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                            if (ruleBase[x][j] === arr[findIndexinArr+1]) {
                              setI(x); setJ(j);
                              break
                            }
                          }
                        }
                      }
                      // case ruleBase[57][1] and rulaBase[110][1]
                      // if i === ruleBase.length, case for gejala[58], gejala[14], gejala[55], gejala[56]
                      if (arr[findIndexinArr+1] === undefined) {
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                    }
                    // if the two and tree value before is not same, case gejala[9]
                    else {
                      reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                }
                else if (j === 4) { // worked
                    // check if the two and tree value before is same, case gejala [4]
                    if (
                      ruleBase[i][j-1] === ruleBase[i+1][j-1] &&
                      ruleBase[i][j-2] === ruleBase[i+1][j-2] && 
                      ruleBase[i][j-3] === ruleBase[i+1][j-3] &&
                      ruleBase[i][j-4] === ruleBase[i+1][j-4]
                    ) {
                      let arr = [''];
                      // push all value in the same j index
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                          arr.push(ruleBase[x][j])
                        }
                      }
                      // delete same values in array
                      arr = [...new Set(arr)]
                      // find value index in array
                      let findIndexinArr = arr.indexOf(ruleBase[i][j])
                      // if ruleBase[i+1][j] is the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]){
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata bernama <strong>${LastValueSpecialCase}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                      // if ruleBase[i+1][j] is not the last value of ruleBase[i]
                      if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                        reply = arr[findIndexinArr+1];
                        for (let x = 0; x < ruleBase.length ; x++) {
                          if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                            if (ruleBase[x][j] === arr[findIndexinArr+1]) {
                              setI(x); setJ(j);
                              break
                            }
                          }
                        }
                      }
                      // case ruleBase[57][1] and rulaBase[110][1]
                      // if i === ruleBase.length, case for gejala[58], gejala[14], gejala[55], gejala[56], gejala[57]
                      if (arr[findIndexinArr+1] === undefined) {
                        reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                        setDiagnoseResult(reply);
                      }
                    }
                    // if the two and tree value before is not same, case gejala[9]
                    else {
                      reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                }
                // for j !== 0 / 1 / 2 / 3/ 4
                else {
                    let arr = [''];
                    // push all value in the same j index
                    for (let x = 0; x < ruleBase.length ; x++) {
                      if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                        arr.push(ruleBase[x][j])
                      }
                    }
                    // delete same values in array
                    arr = [...new Set(arr)]
                    // find value index in array
                    let findIndexinArr = arr.indexOf(ruleBase[i][j])
                    // if ruleBase[i+1][j] is the last value of ruleBase[i]
                    if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]){
                      reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata bernama <strong>${LastValueSpecialCase}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                    // if ruleBase[i+1][j] is not the last value of ruleBase[i]
                    if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                      reply = arr[findIndexinArr+1];
                      for (let x = 0; x < ruleBase.length ; x++) {
                        if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                          if (ruleBase[x][j] === arr[findIndexinArr+1]) {
                            setI(x); setJ(j);
                            break
                          }
                        }
                      }
                    }
                    // case ruleBase[57][1] and rulaBase[110][1]
                    if (arr[findIndexinArr+1] === undefined) {
                      reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                      setDiagnoseResult(reply);
                    }
                }
              }
              // i === ruleBase.length
              else {
                if (j === 0) { // works
                  // last value in ruleBase[i], case for gejala[58], works
                  reply = `Kamu <strong>tidak mengalami</strong> gejala penyakit mata yang ditanyakan oleh bot. Sistem <strong>tidak dapat melakukan skrining</strong> di luar gejala penyakit mata yang telah ditanyakan. <strong>Tekan</strong> atau ketik <strong>mulai</strong> untuk mengulangi skrining`;
                  setDiagnoseResult(reply);
                }
                else if (j === 1) {
                  reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                  setDiagnoseResult(reply);
                }
                else { // works
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                  setDiagnoseResult(reply);
                }
              }
          }
        }
        else if (replyBefore !== 'mulai') {
          if (input === 'y' || input === 'ya' || input === 't' || input === 'tidak') {
            reply = `Ketik atau tekan <strong>mulai</strong> untuk skrining penyakit mata`
          }
        }
      }
      else if (diagnoseResult !== '') {
        reply = diagnoseResult;
      }
    }
    return [reply];
  };

  function Output(input){
    let reply; 
    input = input
      .toLowerCase()            // replace all input text to lower case
      .replace(/[^\w\s]/gi, '') // replace unneccessary input from user
      .replace(/[\d]/gi, '')
      .replace(/ a /g, ' ')     // example : 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '')
      .replace(/r u/g, 'are you')
      .replace(/'/g, '')
      .trim();                  // remove whitespace from both sides of a string
    if (Compare(prompts, replies, input)) { 
      // Search for exact match in `prompts`
      reply = Compare(prompts, replies, input);
    } 
    else if (input.match(/terima kasih/gi)) {
      reply = 'Sama-sama'
    }
    // Check if input contains `coronavirus`
    else if (input.match(/(corona|covid|virus)/gi)) {
      reply = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    }
    // Screening Eye Disease
    else if (input.match(/(y|ya|t|tidak|mulai|tes|test|skrining)/gi)) {
      reply = Screening(input)[0];
    }
    // If all else fails: random alternative
    else {
      reply = alternative[Math.floor(Math.random() * alternative.length)];
    }
    // Add chat
    AddChat(input, reply);
  }
  
  // opening chat message will be appear when browser reload
  useEffect(() => {
    AddChat2('Halo, ini adalah bot EyeScreening');
    setTimeout(() => {
      AddChat2(`Untuk memulai skrining penyakit mata ketikan atau tekan tombol <strong>mulai</strong>.`);
    },1000);
  },[])

  return (
    <ChatbotInterface
      input = {input}
      i = {i}
      j = {j}
      ruleBaseILength={ruleBase[i].length}
      ruleBaseLength = {ruleBase.length}
      replyBefore={replyBefore}
      replyNow={replyNow}
      allYesReply = {allYesReply}
      lastValue = {lastValue}
      totalGejala = {totalGejala}
      handleChange = {handleChange}
      handleEnter = {handleEnter}
      handleSubmit = {handleSubmit}
      handleMulai = {handleMulai}
      handleYa = {handleYa}
      handleTidak = {handleTidak}
    />
  )
}