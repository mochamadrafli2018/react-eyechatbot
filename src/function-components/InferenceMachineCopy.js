import React, { useState } from 'react';
import {prompts,replies,alternative,coronavirus,} from '../data/PromptsAndReplies';
// import {sympthom} from '../data/SymthomList';
import addChat from './AddChat';
import compare from './Compare';
import ChatbotInterfaceCopy from '../components/ChatbotInterfaceCopy';

const sympthom = [
  [''],
  ['peka terhadap cahaya (fotofobia) (gejala 1)'],
  ['terasa nyeri (gejala 2)'],
  ['tampak bintik nanah berwarna kuning keputihan pada kornea (gejala 3)'],
  ['terdapat kotoran mata (gejala 4)'],
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
]

const question = `Apakah anda mengalami gejala`;
const lastQuestion = `pada mata anda ? <span class='border-3 border-blue-700 px-2 py-0 rounded-2xl'>y/t</span>`;
const gejala  = [
  [`this was index array numer 0`],
  [`${question} ${sympthom[1][0]} ${lastQuestion}`],
  [`${question} ${sympthom[2][0]} ${lastQuestion}`],
  [`${question} ${sympthom[3][0]} ${lastQuestion}`],
  [`${question} ${sympthom[4][0]} ${lastQuestion}`],
  [`${question} ${sympthom[5][0]} ${lastQuestion}`],
  [`${question} ${sympthom[6][0]} ${lastQuestion}`],
  [`${question} ${sympthom[7][0]} ${lastQuestion}`],
  [`${question} ${sympthom[8][0]} ${lastQuestion}`],
  [`${question} ${sympthom[9][0]} ${lastQuestion}`],
  [`${question} ${sympthom[10][0]} ${lastQuestion}`],
  [`${question} ${sympthom[11][0]} ${lastQuestion}`],
  [`${question} ${sympthom[12][0]} ${lastQuestion}`],
  [`${question} ${sympthom[13][0]} ${lastQuestion}`],
  [`${question} ${sympthom[14][0]} ${lastQuestion}`],
  [`${question} ${sympthom[15][0]} ${lastQuestion}`],
  [`${question} ${sympthom[16][0]} ${lastQuestion}`],
  [`${question} ${sympthom[17][0]} ${lastQuestion}`],
  [`${question} ${sympthom[18][0]} ${lastQuestion}`],
  [`${question} ${sympthom[19][0]} ${lastQuestion}`],
  [`${question} ${sympthom[20][0]} ${lastQuestion}`],
  [`${question} ${sympthom[21][0]} ${lastQuestion}`],
  [`${question} ${sympthom[22][0]} ${lastQuestion}`],
  [`${question} ${sympthom[23][0]} ${lastQuestion}`],
  [`${question} ${sympthom[24][0]} ${lastQuestion}`],
  [`${question} ${sympthom[25][0]} ${lastQuestion}`],
  [`${question} ${sympthom[26][0]} ${lastQuestion}`],
  [`${question} ${sympthom[27][0]} ${lastQuestion}`],
  [`${question} ${sympthom[28][0]} ${lastQuestion}`],
  [`${question} ${sympthom[29][0]} ${lastQuestion}`],
  [`${question} ${sympthom[30][0]} ${lastQuestion}`],
  [`${question} ${sympthom[31][0]} ${lastQuestion}`],
  [`${question} ${sympthom[32][0]} ${lastQuestion}`],
  [`${question} ${sympthom[33][0]} ${lastQuestion}`],
  [`${question} ${sympthom[34][0]} ${lastQuestion}`],
  [`${question} ${sympthom[35][0]} ${lastQuestion}`],
  [`${question} ${sympthom[36][0]} ${lastQuestion}`],
  [`${question} ${sympthom[37][0]} ${lastQuestion}`],
  [`${question} ${sympthom[38][0]} ${lastQuestion}`],
  [`${question} ${sympthom[39][0]} ${lastQuestion}`],
  [`${question} ${sympthom[40][0]} ${lastQuestion}`],
  [`${question} ${sympthom[41][0]} ${lastQuestion}`],
  [`${question} ${sympthom[42][0]} ${lastQuestion}`],
  [`${question} ${sympthom[43][0]} ${lastQuestion}`],
  [`${question} ${sympthom[44][0]} ${lastQuestion}`],
  [`${question} ${sympthom[45][0]} ${lastQuestion}`],
  [`${question} ${sympthom[46][0]} ${lastQuestion}`],
  [`${question} ${sympthom[47][0]} ${lastQuestion}`],
  [`${question} ${sympthom[48][0]} ${lastQuestion}`],
  [`${question} ${sympthom[49][0]} ${lastQuestion}`],
  [`${question} ${sympthom[50][0]} ${lastQuestion}`],
  [`${question} ${sympthom[51][0]} ${lastQuestion}`],
  [`${question} ${sympthom[52][0]} ${lastQuestion}`],
  [`${question} ${sympthom[53][0]} ${lastQuestion}`],
  [`${question} ${sympthom[54][0]} ${lastQuestion}`],
]

const diseaseArray = [
  {name:'',link:''},
  // 1 - 5
  {name:'Ulkus Kornea',link:'www.kbbi.com'},
  {name:'Konjungtivitis',link:'www.kbbi.com'},
  {name:'Keratitis Pungtata Superfisialis',link:'www.kbbi.com'},
  {name:'Katarak',link:'www.kbbi.com'},
  {name:'Endoflamitis',link:'www.kbbi.com'},
  // 6 - 10
  {name:'Blefaritis',link:'www.kbbi.com'}, 
  {name:'Keratokonus',link:'www.kbbi.com'},
  {name:'Retinopati Debiritikum',link:'www.kbbi.com'},
  {name:'Glaukoma',link:'www.kbbi.com'},
  {name:'Selulitis Orbitalitas',link:'www.kbbi.com'},
  // 11 - 15
  {name:'Miopi',link:'www.kbbi.com'}, 
  {name:'Kalazion',link:'www.kbbi.com'},
  {name:'Trakoma',link:'www.kbbi.com'},
  {name:'Oftalmia Neonatorum',link:'www.kbbi.com'},
  {name:'Retinitis Pigmentosa',link:'www.kbbi.com'},
  // 16 - 20
  {name:'Pterygium',link:'www.kbbi.com'},
  {name:'Alergi Mata Merah',link:'www.kbbi.com'},
  {name:'Hordeolum (Stye)',link:'www.kbbi.com'},
  {name:'Dakriosistitis',link:'www.kbbi.com'},
  {name:'Abalso Retina',link:'www.kbbi.com'},
  // 21 - 25
  {name:'Retinopati Diabetikum',link:'www.kbbi.com'},
  {name:'Xerophtalmania',link:'www.kbbi.com'},
  {name:'Eksoftalmus',link:'www.kbbi.com'},
  {name:'Trombosis Sinus Kavernosus',link:'www.kbbi.com'},
  {name:'Optic Neuritis',link:'www.kbbi.com'},
  // 26 - 30
  {name:'Degenerasi Makula',link:'www.kbbi.com'},
  {name:'Skleritis',link:'www.kbbi.com'},
];

const ruleBase = [
  // index number [0][0],[0][1],[0][2],[0][3]
  ['mulai','tes','test','skrining'],
  // rule base number 1 - 62
  [gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[1],gejala[2],gejala[12],gejala[14],gejala[28],diseaseArray[2].name],
  [gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[28],gejala[29],diseaseArray[3].name],
  [gejala[1],gejala[2],gejala[21],gejala[22],diseaseArray[4].name],
  [gejala[1],gejala[2],gejala[24],gejala[34],diseaseArray[5].name],
  [gejala[1],gejala[5],gejala[9],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[1],gejala[14],gejala[18],gejala[21],diseaseArray[7].name],
  [gejala[1],gejala[18],gejala[23],diseaseArray[8].name],
  [gejala[2],gejala[1],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[2],gejala[1],gejala[12],gejala[14],gejala[28],diseaseArray[2].name],
  [gejala[2],gejala[1],gejala[14],gejala[18],gejala[27],gejala[28],gejala[29],diseaseArray[3].name],  
  [gejala[2],gejala[1],gejala[21],gejala[22],diseaseArray[4].name],
  [gejala[2],gejala[1],gejala[24],gejala[34],diseaseArray[5].name],
  [gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[43],gejala[44],diseaseArray[9].name],
  [gejala[2],gejala[5],gejala[25],gejala[26],diseaseArray[10].name],
  [gejala[2],gejala[29],gejala[35],gejala[51],diseaseArray[11].name],
  [gejala[3],gejala[1],gejala[2],gejala[4],gejala[5],gejala[6],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[4],gejala[1],gejala[2],gejala[3],gejala[5],gejala[6],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[5],gejala[1],gejala[2],gejala[3],gejala[4],gejala[6],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[5],gejala[1],gejala[9],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[5],gejala[2],gejala[14],gejala[27],gejala[35],gejala[43],gejala[44],diseaseArray[9].name],
  [gejala[5],gejala[2],gejala[25],gejala[26],diseaseArray[10].name],
  [gejala[5],gejala[6],gejala[7],gejala[8],diseaseArray[12].name],
  [gejala[5],gejala[16],gejala[17],diseaseArray[13].name],
  [gejala[5],gejala[18],gejala[27],gejala[33],gejala[50],diseaseArray[14].name],
  [gejala[5],gejala[21],diseaseArray[15].name],
  [gejala[6],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[7],gejala[8],diseaseArray[1].name],
  [gejala[6],gejala[5],gejala[7],gejala[8],diseaseArray[12].name],
  [gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[53],gejala[54],diseaseArray[16].name],
  [gejala[7],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[8],diseaseArray[1].name],
  [gejala[7],gejala[5],gejala[6],gejala[8],diseaseArray[12].name],
  [gejala[8],gejala[1],gejala[2],gejala[3],gejala[4],gejala[5],gejala[6],gejala[7],diseaseArray[1].name],
  [gejala[8],gejala[5],gejala[6],gejala[7],diseaseArray[12].name],
  [gejala[9],gejala[1],gejala[5],gejala[10],gejala[11],gejala[12],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[10],gejala[1],gejala[5],gejala[9],gejala[11],gejala[12],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[11],gejala[1],gejala[5],gejala[10],gejala[10],gejala[12],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[12],gejala[1],gejala[2],gejala[14],gejala[28],diseaseArray[2].name],
  [gejala[12],gejala[1],gejala[5],gejala[10],gejala[10],gejala[11],gejala[27],gejala[28],diseaseArray[6].name],
  [gejala[12],gejala[28],gejala[30],gejala[31],diseaseArray[17].name],
  [gejala[13],gejala[14],gejala[15],gejala[27],diseaseArray[18].name],
  [gejala[14],gejala[1],gejala[2],gejala[12],gejala[28],diseaseArray[2].name],
  [gejala[14],gejala[1],gejala[2],gejala[18],gejala[27],gejala[28],gejala[29],diseaseArray[3].name],
  [gejala[14],gejala[1],gejala[18],gejala[21],diseaseArray[7].name],
  [gejala[14],gejala[2],gejala[5],gejala[27],gejala[35],gejala[43],gejala[44],diseaseArray[9].name],
  [gejala[14],gejala[6],gejala[18],gejala[27],gejala[52],gejala[53],gejala[54],diseaseArray[16].name],
  [gejala[14],gejala[13],gejala[15],gejala[27],diseaseArray[18].name],
  [gejala[14],gejala[25],gejala[27],gejala[40],gejala[41],diseaseArray[19].name],
  [gejala[14],gejala[55],gejala[56],gejala[57],gejala[58],diseaseArray[27].name],
  [gejala[15],gejala[13],gejala[14],gejala[27],diseaseArray[18].name],
  [gejala[16],gejala[5],gejala[17],diseaseArray[13].name],
  [gejala[17],gejala[5],gejala[16],diseaseArray[13].name],
  [gejala[18],gejala[1],gejala[2],gejala[14],gejala[27],gejala[28],gejala[29],diseaseArray[3].name],
  [gejala[18],gejala[1],gejala[14],gejala[21],diseaseArray[7].name],
  [gejala[18],gejala[1],gejala[23],diseaseArray[8].name],
  [gejala[18],gejala[5],gejala[27],gejala[33],gejala[50],diseaseArray[14].name],
  [gejala[18],gejala[6],gejala[14],gejala[27],gejala[52],gejala[53],gejala[54],diseaseArray[16].name],
  // must erorr
  [gejala[18],gejala[19],gejala[20],diseaseArray[20].name], // diseaseArray[21].name
  [gejala[18],gejala[19],diseaseArray[21].name],
  // have been checked
  [gejala[19],gejala[18],gejala[20],diseaseArray[20].name], // diseaseArray[21].name
  [gejala[19],gejala[18],diseaseArray[21].name],
  [gejala[21],gejala[1],gejala[2],gejala[21],diseaseArray[4].name],
  [gejala[21],gejala[1],gejala[14],gejala[18],diseaseArray[7].name],
  [gejala[21],gejala[5],diseaseArray[15].name],
  [gejala[22],gejala[1],gejala[2],gejala[22],diseaseArray[4].name],
  [gejala[22],gejala[45],gejala[46],diseaseArray[22].name],
  [gejala[23],gejala[1],gejala[18],diseaseArray[8].name],
  // have been checked
  [gejala[24],gejala[1],gejala[2],gejala[34],diseaseArray[5].name],
  [gejala[24],diseaseArray[23].name],
  [gejala[25],gejala[2],gejala[5],gejala[26],diseaseArray[10].name],
  [gejala[25],gejala[14],gejala[27],gejala[40],gejala[41],diseaseArray[19].name],
  [gejala[25],gejala[35],gejala[36],gejala[37],diseaseArray[24].name],
  [gejala[26],gejala[2],gejala[5],gejala[25],diseaseArray[10].name],
  [gejala[27],gejala[1],gejala[2],gejala[14],gejala[18],gejala[28],gejala[29],diseaseArray[3].name],
  [gejala[27],gejala[1],gejala[5],gejala[10],gejala[10],gejala[11],gejala[12],gejala[28],diseaseArray[6].name],
  [gejala[27],gejala[2],gejala[5],gejala[14],gejala[35],gejala[43],gejala[44],diseaseArray[9].name],
  [gejala[27],gejala[5],gejala[18],gejala[33],gejala[50],diseaseArray[14].name],
  [gejala[27],gejala[6],gejala[14],gejala[18],gejala[52],gejala[53],gejala[54],diseaseArray[16].name],
  [gejala[27],gejala[13],gejala[14],gejala[15],diseaseArray[18].name],
  [gejala[27],gejala[14],gejala[25],gejala[40],gejala[41],diseaseArray[19].name],
  [gejala[28],gejala[1],gejala[2],gejala[12],gejala[14],diseaseArray[2].name],
  [gejala[28],gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[29],diseaseArray[3].name],
  [gejala[28],gejala[1],gejala[5],gejala[10],gejala[10],gejala[11],gejala[12],gejala[27],diseaseArray[6].name],
  [gejala[28],gejala[12],gejala[30],gejala[31],diseaseArray[17].name],
  [gejala[29],gejala[1],gejala[2],gejala[14],gejala[18],gejala[27],gejala[28],diseaseArray[3].name],
  [gejala[29],gejala[2],gejala[35],gejala[51],diseaseArray[11].name],
  [gejala[33],gejala[5],gejala[18],gejala[27],gejala[50],diseaseArray[14].name],
  [gejala[30],gejala[12],gejala[28],gejala[31],diseaseArray[17].name],
  [gejala[31],gejala[12],gejala[28],gejala[30],diseaseArray[17].name],
  [gejala[34],gejala[1],gejala[2],gejala[24],diseaseArray[5].name],
  [gejala[35],gejala[2],gejala[5],gejala[14],gejala[27],gejala[43],gejala[44],diseaseArray[9].name],
  [gejala[35],gejala[2],gejala[29],gejala[51],diseaseArray[11].name],
  [gejala[35],gejala[25],gejala[36],gejala[37],diseaseArray[24].name],
  [gejala[36],gejala[25],gejala[35],gejala[37],diseaseArray[24].name],
  [gejala[37],gejala[35],gejala[35],gejala[36],diseaseArray[24].name],
  [gejala[38],gejala[39],diseaseArray[25].name],
  [gejala[39],gejala[38],diseaseArray[25].name],
  [gejala[40],gejala[14],gejala[25],gejala[27],gejala[41],diseaseArray[19].name],
  [gejala[41],gejala[14],gejala[25],gejala[27],gejala[40],diseaseArray[19].name],
  [gejala[43],gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[44],diseaseArray[9].name],
  [gejala[44],gejala[2],gejala[5],gejala[14],gejala[27],gejala[35],gejala[43],diseaseArray[9].name],
  [gejala[45],gejala[22],gejala[46],diseaseArray[22].name],
  [gejala[46],gejala[22],gejala[45],diseaseArray[22].name],
  [gejala[47],gejala[48],gejala[49],diseaseArray[26].name],
  [gejala[48],gejala[47],gejala[49],diseaseArray[26].name],
  [gejala[49],gejala[47],gejala[48],diseaseArray[26].name],
  [gejala[50],gejala[5],gejala[18],gejala[27],gejala[33],diseaseArray[14].name],
  [gejala[51],gejala[2],gejala[29],gejala[35],diseaseArray[11].name],
  [gejala[52],gejala[6],gejala[14],gejala[18],gejala[27],gejala[53],gejala[54],diseaseArray[16].name],
  [gejala[53],gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[54],diseaseArray[16].name],
  [gejala[54],gejala[6],gejala[14],gejala[18],gejala[27],gejala[52],gejala[53],diseaseArray[16].name],
  [gejala[55],gejala[14],gejala[56],gejala[57],gejala[58],diseaseArray[27].name],
  [gejala[56],gejala[14],gejala[55],gejala[57],gejala[58],diseaseArray[27].name],
  [gejala[57],gejala[14],gejala[55],gejala[56],gejala[58],diseaseArray[27].name],
  [gejala[58],gejala[14],gejala[55],gejala[56],gejala[57],diseaseArray[27].name],
];

export default function InferenceMachineCopy () {
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
    Output('mulai') // input = 'mulai'
    setInput('')    // return empty form after user press button
  }
  const handleYa = () => {
    Output('y')     // input = 'y'
    setInput('')    // return empty form after user press button
  }
  const handleTidak = () => {
    Output('t')     // input = 't'
    setInput('')    // return empty form after user press button
  }  

  // initialize state for screening system
  let [i,setI] = useState(0);
  let [j,setJ] = useState(0);
  let [allYesReply, setAllYesReply] = useState([]);
  let [replyNow, setReplyNow] = useState('');
  let [replyBefore, setReplyBefore] = useState('');
  let [nextReply, setNextReply] = useState('');
  let [lastValue, setLastValue] = useState([]);
  let [totalGejala, setTotalGejala] = useState([]);
  function Screening(input) {
    let reply;
    if (input === 'mulai' || input === 'tes'|| input === 'test'  || input === 'skrining') {
      let replyFound;
      for (i = 0; i < ruleBase.length; i++) {
        for (j = 0; j < ruleBase[i].length; j++) {
          if (ruleBase[i][j] === input) {
            // re-empty
            setReplyNow('');
            setReplyBefore('');
            setLastValue([]);
            setAllYesReply([]);
            setTotalGejala([]);
            // reply
            reply = ruleBase[i+1][j];
            setReplyBefore(input);
            setI(i+1);
            setJ(j);
            replyFound = true;
            // stop inner loop when input value matches
            break;
          }
        }
        // stop looping when reply found
        if (replyFound) {
          break;
        }
      }
    }
    
    else if (replyBefore === 'mulai') {
      if (input === 'y' || input === 'ya') {
        // if ruleBase[i][j] is the value before the last value in [i] array, example : ruleBase[1][7] === ruleBase[1][9-2]
        if (ruleBase[i][j] === ruleBase[i][ruleBase[i].length - 2]) {
          // save all yes reply before the last value in [i] array
          setAllYesReply([...allYesReply, ruleBase[i][ruleBase[i].length - 2]]);
          reply = `Anda menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan anda mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
        }
        // if ruleBase[i][j] is not the value before the last value in [i] array
        else if (ruleBase[i][j] !== ruleBase[i][ruleBase[i].length - 2]) {
          // save all yes reply before
          setAllYesReply([...allYesReply, ruleBase[i][j]]);
          reply = ruleBase[i][j+1];
          setReplyNow(reply)
          // get total sympthon in the array
          setTotalGejala([...totalGejala, ruleBase[i].length-1])
          // get the last element of the array
          setLastValue([...lastValue,ruleBase[i][ruleBase[i].length-1]]);
          setI(i);
          setJ(j+1);
        }
      }

      else if (input === 't' || input === 'tidak') {
        // j === 0
        if (j === 0) { // works
          // if i the last value of ruleBase
          if (i !== ruleBase.length - 1 && ruleBase[i+1][j] !== undefined && ruleBase[i][j] === ruleBase[i+1][j]) {
            let arr = [''];
            for (let x = 0; x < ruleBase.length ; x++) {
              arr.push(ruleBase[x][0])
              // arr = [gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[1],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],gejala[2],...]
            }
            // delete same values in array
            let newArr = [...new Set(arr)] // newArr = [gejala[1],gejala[2],gejala[3],gejala[4],...]
            // find value of ruleBase[i][j] index in newArr
            let findIndexinArr = newArr.indexOf(ruleBase[i][j])
            // find reply in ruleBase[i][0]
            for (let k = 0; k < ruleBase.length ; k++) {
              if (ruleBase[k][0] === newArr[findIndexinArr+1]) {
                setI(k);
                break
              }
            }
            reply = ruleBase[k][0];
            setJ(0);
          }
          // if i is the last value of ruleBase
          else if (i === ruleBase.length - 1) {
            reply = `Maaf anda tidak mengalami gejala penyakit mata yang ditanyakan oleh bot, sistem tidak dapat melakukan skrining. Tekan atau ketik mulai untuk mengulangi skrining`;
          }
        }
        // j !== 0
        else if (j !== 0) {
          if (ruleBase[i][j-1] === ruleBase[i+1][j-1]) { //error and change
              // if ruleBase[i+1][j] is not the last value of ruleBase[i]
              if (ruleBase[i+1][j] !== ruleBase[i+1][ruleBase[i+1].length-1]) {
                let arr = [''];
                // push all value in the same j index
                for (let x = 0; x < ruleBase.length ; x++) {
                  if (ruleBase[x][j-1] === ruleBase[i][j-1]) {
                    arr.push(ruleBase[x][j])
                  }
                }
                // delete same values in array
                let newArr = [...new Set(arr)]
                // find value index in array
                let findIndexinArr = newArr.indexOf(ruleBase[i][j])
                reply = newArr[findIndexinArr+1]
                for (let k = 0; k < ruleBase.length ; k++) {
                  if (ruleBase[k][j] === newArr[findIndexinArr+1]) {
                    setI(k);
                    break
                  }
                }
                setJ(j);
              }
              // if ruleBase[i+1][j] is the last value of ruleBase[i]
              else if (ruleBase[i+1][j] === ruleBase[i+1][ruleBase[i+1].length-1]) {
                // get array length
                reply = `Anda menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan anda mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
              }       
          }
          else if (ruleBase[i][j-1] !== ruleBase[i+1][j-1]) {
            // get array length
             reply = `Anda menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Hasil skrining menunjukkan anda mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata bernama <strong>${lastValue[lastValue.length-1]}</strong>. Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
          }
        }
      }
    }

    else if (replyBefore !== 'mulai') {
      if (input === 'y' || input === 'ya') {
        reply = `Ketik mulai atau tekan tombol mulai untuk memulai skrining penyakit mata`
      }
      else if (input === 't' || input === 'tidak') {
        reply = `Ketik mulai atau tekan tombol mulai untuk memulai skrining penyakit mata`
      }
    }

    return reply;
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
    if (compare(prompts, replies, input)) { 
      // Search for exact match in `prompts`
      reply = compare(prompts, replies, input);
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
      reply = Screening(input)
    }
    // If all else fails: random alternative
    else {
      reply = alternative[Math.floor(Math.random() * alternative.length)];
    }
    // add chat
    addChat(input, reply);
  }
  return(
    <ChatbotInterfaceCopy 
      input = {input}
      i = {i}
      j = {j}
      ruleBaseNow={ruleBase[i][j]}
      ruleBaseILength={ruleBase[i].length}
      ruleBaseLength = {ruleBase.length}
      replyBefore={replyBefore}
      replyNow={replyNow}
      nextReply={nextReply}
      allYesReply = {allYesReply}
      lastValue = {lastValue}
      handleChange = {handleChange}
      handleEnter = {handleEnter}
      handleSubmit = {handleSubmit}
      handleMulai = {handleMulai}
      handleYa = {handleYa}
      handleTidak = {handleTidak}
    />
  )
}
