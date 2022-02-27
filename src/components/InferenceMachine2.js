import { useEffect, useState } from 'react';
import AddChat from './AddChat';
import AddChat2 from './AddChat2';
import Compare from './Compare';
import ChatbotInterface from './ChatbotInterface';
import {prompts,replies,alternative,coronavirus,} from '../data/PromptsAndReplies';
import '../index.css';

const sympthom = [
  [''],
  // gejala 1 - 5
  ['mata peka terhadap cahaya (fotofobia)'],
  ['mata terasa nyeri'],
  ['tampak bintik nanah berwarna kuning keputihan pada kornea mata'],
  ['terdapat kotoran pada mata'], // check
  ['kelopak mata membengkak'],
  // gejala 6 - 10
  ['mata mengalami iritasi'],
  ['terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan'],
  ['terbentuk daerah kemerahan/abu-abu di bawah kelopak mata'],
  ['bulu mata rontok'],
  ['mata sukar dibuka ketika bangun dipagi hari'],
  // gejala 11 - 15
  ['alergi'],
  ['mata terasa panas'],
  ['mata seperti kelilipan'],
  ['mata berair'],
  ['nyeri pada tepi kelopak mata'],	
  // gejala 16 - 20
  ['kornea mata tampak keruh'],
  ['konjungtiva meradang'],
  ['penglihatan kabur'],
  ['terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya pada mata'],
  ['hilangnya fungsi penglihatan pada salah satu mata,yang kemudian menyebar sejalan perkembangan ablasio'],
  // gejala 21 - 25
  ['kesulitan melihat di malam hari'],
  ['penurunan ketajaman penglihatan bahkan di siang hari'],	
  ['kemerahan pada skelra'],
  ['mata menonjol'],
  ['demam'],
  // gejala 26 - 30
  ['bola mata bengkak dan tampak berkabut'],
  ['mata merah'],
  ['mata terasa gatal'],
  ['mata terasa perih'],
  ['konjungtiva menjadi merah'],
  // gejala 31 - 35
  ['konjungtiva bengkak'],
  ['peradangan mata yang agak menonjol dan berwarna kuning'],
  ['mata nyeri bila ditekan'],
  ['gangguan penglihatan'],
  ['sakit kepala'],
  // gejala 36 - 40
  ['koma'],
  ['kejang'],
  ['sakit saat mata digerakkan'],
  ['kehilangan penglihatan'],
  ['nyeri di daerah sekitar kantong air mata'],
  // gejala 41 - 45
  ['mata mengeluarkan nanah'],
  ['pusing karena lelah'],
  ['mengalami mual dan muntah'],
  ['pupil melebar dan tidak mengecil jika diberi sinar yang terang'],
  ['sel batang retina sulit berdaptasi diruang yang remang-remang'],
  // gejala 46 - 50
  ['tidak dapat melihat pada lingkungan yang kurang bercahaya'],
  ['gangguan penglihatan pada salah satu mata'],
  ['garis mata lurus terlihat bergelombang'],
  ['mata tidak nyeri'],
  ['riwayat penyakit menular seksual pada ibu'],
  // gejala 51 - 55
  ['air mata berlebihan'],
  ['mata terasa kering'],
  ['benjolan pada mata bagian atas atau bawah'],
  ['seperti ada benda asing di mata'],
  ['nyeri hebat pada mata'],
  // gejala 56 - 59
  ['mata merah tidak merata'],
  ['bercak merah pada sklera'],
  ['palpebra atau kelopak mata bengkak warna biru jingga'],
  ['rasa tidak nyaman pada mata'],
];

const question = `Apa kamu mengalami gejala`;
const yesOrNo = `? <span class='border-3 border-blue-500 px-2 py-0 rounded-2xl'>ya/tidak</span>`;
const g  = [
  [`this was index array numer 0`],
  [`${question} ${sympthom[1][0]} ${yesOrNo}`],
  [`${question} ${sympthom[2][0]} ${yesOrNo}`],
  [`${question} ${sympthom[3][0]} ${yesOrNo}`],
  [`${question} ${sympthom[4][0]} ${yesOrNo}`],
  [`${question} ${sympthom[5][0]} ${yesOrNo}`],
  [`${question} ${sympthom[6][0]} ${yesOrNo}`],
  [`${question} ${sympthom[7][0]} ${yesOrNo}`],
  [`${question} ${sympthom[8][0]} ${yesOrNo}`],
  [`${question} ${sympthom[9][0]} ${yesOrNo}`],
  [`${question} ${sympthom[10][0]} ${yesOrNo}`],
  [`${question} ${sympthom[11][0]} ${yesOrNo}`],
  [`${question} ${sympthom[12][0]} ${yesOrNo}`],
  [`${question} ${sympthom[13][0]} ${yesOrNo}`],
  [`${question} ${sympthom[14][0]} ${yesOrNo}`],
  [`${question} ${sympthom[15][0]} ${yesOrNo}`],
  [`${question} ${sympthom[16][0]} ${yesOrNo}`],
  [`${question} ${sympthom[17][0]} ${yesOrNo}`],
  [`${question} ${sympthom[18][0]} ${yesOrNo}`],
  [`${question} ${sympthom[19][0]} ${yesOrNo}`],
  [`${question} ${sympthom[20][0]} ${yesOrNo}`],
  [`${question} ${sympthom[21][0]} ${yesOrNo}`],
  [`${question} ${sympthom[22][0]} ${yesOrNo}`],
  [`${question} ${sympthom[23][0]} ${yesOrNo}`],
  [`${question} ${sympthom[24][0]} ${yesOrNo}`],
  [`${question} ${sympthom[25][0]} ${yesOrNo}`],
  [`${question} ${sympthom[26][0]} ${yesOrNo}`],
  [`${question} ${sympthom[27][0]} ${yesOrNo}`],
  [`${question} ${sympthom[28][0]} ${yesOrNo}`],
  [`${question} ${sympthom[29][0]} ${yesOrNo}`],
  [`${question} ${sympthom[30][0]} ${yesOrNo}`],
  [`${question} ${sympthom[31][0]} ${yesOrNo}`],
  [`${question} ${sympthom[32][0]} ${yesOrNo}`],
  [`${question} ${sympthom[33][0]} ${yesOrNo}`],
  [`${question} ${sympthom[34][0]} ${yesOrNo}`],
  [`${question} ${sympthom[35][0]} ${yesOrNo}`],
  [`${question} ${sympthom[36][0]} ${yesOrNo}`],
  [`${question} ${sympthom[37][0]} ${yesOrNo}`],
  [`${question} ${sympthom[38][0]} ${yesOrNo}`],
  [`${question} ${sympthom[39][0]} ${yesOrNo}`],
  [`${question} ${sympthom[40][0]} ${yesOrNo}`],
  [`${question} ${sympthom[41][0]} ${yesOrNo}`],
  [`${question} ${sympthom[42][0]} ${yesOrNo}`],
  [`${question} ${sympthom[43][0]} ${yesOrNo}`],
  [`${question} ${sympthom[44][0]} ${yesOrNo}`],
  [`${question} ${sympthom[45][0]} ${yesOrNo}`],
  [`${question} ${sympthom[46][0]} ${yesOrNo}`],
  [`${question} ${sympthom[47][0]} ${yesOrNo}`],
  [`${question} ${sympthom[48][0]} ${yesOrNo}`],
  [`${question} ${sympthom[49][0]} ${yesOrNo}`],
  [`${question} ${sympthom[50][0]} ${yesOrNo}`],
  [`${question} ${sympthom[51][0]} ${yesOrNo}`],
  [`${question} ${sympthom[52][0]} ${yesOrNo}`],
  [`${question} ${sympthom[53][0]} ${yesOrNo}`],
  [`${question} ${sympthom[54][0]} ${yesOrNo}`],
  [`${question} ${sympthom[55][0]} ${yesOrNo}`],
  [`${question} ${sympthom[56][0]} ${yesOrNo}`],
  [`${question} ${sympthom[57][0]} ${yesOrNo}`],
  [`${question} ${sympthom[58][0]} ${yesOrNo}`],
  [`${question} ${sympthom[59][0]} ${yesOrNo}`],
]
// list of general sympthon or gejala
const s = [
  `${question} mata merah pada mata ${yesOrNo}. Mata merah umumnya terjadi karena pelebaran pembuluh darah di mata.`, // gejala 0
  `${question} penglihatan menurun/kabur pada mata ${yesOrNo}`, // gejala 1
  `${question} penglihatan tidak menurun pada mata ${yesOrNo}`, // gejala 2
  `${question} penglihatan menurun/kabur secara akut (tiba-tiba) pada mata ${yesOrNo}`, // gejala 3
  `${question} penglihatan menurun/kabur secara tidak akut (tidak tiba-tiba) pada mata ${yesOrNo}`, // gejala 4
  `${question} penglihatan menurun/kabur kronis (berlangung lama) pada mata ${yesOrNo}`, // gejala 5
  `${question} sakit/nyeri pada mata ${yesOrNo}`, // gejala 6
  `${question} tidak sakit/nyeri pada mata ${yesOrNo}`, // gejala 7
  `${question} sakit/nyeri mendadak pada mata ${yesOrNo}`, // ? gejala 8
  `${question} sakit/nyeri pelan-pelan pada mata ${yesOrNo}`, // ? gejala 9
  `${question} distorsi bola mata (bentuk tidak teratur) pada mata ${yesOrNo}`, // gejala 10
]
const ruleBase = [
  [''],
  // Algorithm for Red Eyes
  [s[0],s[1],s[3],'Mata terasa tertekan (N+)','Glaukoma sekunder atau akut'],
  [s[0],s[1],s[3],'Tekanan mata terasa normal (N)','Endolamitis, Keraritis, Panofthalmitis, Thombosis Sinus Cavernosus atau Uveitis Akut'],
  [s[0],s[1],s[4],'Anda mengalami gejala mata merah dan penglihatan menurun'],
  [s[0],s[2],s[6],'Episkelritis, Hordeolum, Keratokonjungtivitis Flikte Nularis, Konjungtivitis Akut atau Oinguekulitis'],
  [s[0],s[2],s[7],s[8],'Perdarahan Subkonjungtiva'],
  [s[0],s[2],s[7],s[9],'Alergi, Blefaritis, Hemangioma, Iritasi, Gangguan Pembuluh Darah atau Konjungtivitis Kronis'],
  // Algorithm for Decreasing Eye Sight only for Normal Eye Color (Not Red)
  [s[1],s[3],'Abalsi Retina, Perdarahan Vitreus, Neuritis Optik, Hifema Spontan, Keracunan Metanol, Stroke Oksipitalis atau Malingering dan Histeria'],
  [s[1],s[5],s[10],'Tumor, Strabismus atau Ophthalmopathy Thyroid'],
  ['end of first screening'],
  // Algorithm for Glaukoma sekunder atau akut
  // index = [10][0]
  [g[2],g[5],g[14],g[35],g[43],g[44],'Glaukoma sekunder atau akut'],
  [g[5],g[2],g[14],g[35],g[43],g[44],'Glaukoma sekunder atau akut'],
  [g[14],g[2],g[5],g[35],g[43],g[44],'Glaukoma sekunder atau akut'],
  [g[35],g[2],g[5],g[14],g[43],g[44],'Glaukoma sekunder atau akut'],
  [g[43],g[2],g[5],g[14],g[35],g[44],'Glaukoma sekunder atau akut'],
  [g[44],g[2],g[5],g[14],g[35],g[43],'Glaukoma sekunder atau akut'],
  ['end of second screening'],
  // Algorithm for Endolamitis, Keraritis?, Panofthalmitis, Thombosis Sinus Cavernosus atau Uveitis Akut
  // index = [17][0]
  [g[1],g[2],g[24],g[34],'Endoflamitis'],
  [g[1],g[2],g[14],g[28],g[29],'Keratitis Pungtata Superfisialis'],
  [g[1],g[23],'Uveitis'],
  [g[2],g[1],g[14],g[28],g[29],'Keratitis Pungtata Superfisialis'],  
  [g[14],g[1],g[2],g[28],g[29],'Keratitis Pungtata Superfisialis'],
  [g[23],g[1],'Uveitis'],
  [g[24],g[1],g[2],g[34],'Endoflamitis'],
  [g[25],g[35],g[36],g[37],'Trombosis Sinus Kavernosus'],
  [g[28],g[1],g[2],g[14],g[29],'Keratitis Pungtata Superfisialis'],
  [g[29],g[1],g[2],g[14],g[28],'Keratitis Pungtata Superfisialis'],
  [g[34],g[1],g[2],g[24],'Endoflamitis'],
  [g[35],g[25],g[36],g[37],'Trombosis Sinus Kavernosus'],
  [g[36],g[25],g[35],g[37],'Trombosis Sinus Kavernosus'],
  [g[37],g[25],g[35],g[36],'Trombosis Sinus Kavernosus'],
  ['end of second screening'],
  // Algorithm for Episkelritis, Hordeolum, Keratokonjungtivitis flikte nularis, Konjungtivitis akut atau Oinguekulitis
  // index = [32][0]
  [g[1],g[2],g[12],g[14],g[28],'Konjungtivitis'],
  [g[1],g[33],g[52],g[59],'Episcleritis yang bisa jadi nodular atau diffuse'],
  [g[2],g[1],g[12],g[14],g[28],'Konjungtivitis'],
  [g[12],g[1],g[2],g[14],g[28],'Konjungtivitis'],
  [g[13],g[14],g[15],'Hordeolum'],
  [g[14],g[1],g[2],g[12],g[28],'Konjungtivitis'],
  [g[14],g[13],g[15],'Hordeolum'],
  [g[15],g[13],g[14],'Hordeolum'],
  [g[28],g[1],g[2],g[12],g[14],'Konjungtivitis'],
  [g[33],g[1],g[52],g[59],'Episcleritis yang bisa jadi nodular atau diffuse'],
  [g[52],g[1],g[33],g[59],'Episcleritis yang bisa jadi nodular atau diffuse'],
  [g[59],g[1],g[33],g[52],'Episcleritis yang bisa jadi nodular atau diffuse'],
  ['end of second screening'],
  // Alergi, Blefaritis, Hemangioma, Iritasi, Gangguan pembuluh darah atau Konjungtivitis kronis
  // index = [45][0]
  [g[1],g[5],g[9],g[10],g[11],g[12],g[28],'Blefaritis'],
  [g[5],g[1],g[9],g[10],g[11],g[12],g[28],'Blefaritis'],
  [g[9],g[1],g[5],g[10],g[11],g[12],g[28],'Blefaritis'],
  [g[10],g[1],g[5],g[9],g[11],g[12],g[28],'Blefaritis'],
  [g[11],g[1],g[5],g[9],g[10],g[12],g[28],'Blefaritis'],
  [g[12],g[1],g[5],g[9],g[10],g[11],g[28],'Blefaritis'],
  [g[12],g[28],g[30],g[31],'Alergi Mata Merah'],
  [g[28],g[1],g[5],g[9],g[10],g[11],g[12],'Blefaritis'],
  [g[28],g[12],g[30],g[31],'Alergi Mata Merah'],
  [g[30],g[12],g[28],g[31],'Alergi Mata Merah'],
  [g[31],g[12],g[28],g[30],'Alergi Mata Merah'],
  ['end of second screening'],
  // Abalsi Retina, Perdarahan Vitreus, Neuritis Optik, Hifema Spontan, Keracunan Metanol, Stroke Oksipitalis atau Malingering dan Histeria
  // index = [57][0]
  [g[19],g[20],'Abalsi Retina'],
  [g[20],g[19],'Abalsi Retina'],
  [g[38],g[39],'Optic Neuritis'],
  [g[39],g[38],'Optic Neuritis'],
  ['end of second screening'],

  [g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],'Ulkus Kornea'],
  [g[1],g[2],g[21],g[22],'Katarak'],  
  // ruleBase[6 - 10]
  [g[1],g[14],g[18],g[21],'Keratokonus'],
  [g[2],g[1],g[3],g[4],g[5],g[6],g[7],g[8],'Ulkus Kornea'],
  // ruleBase[11 - 15]
  [g[2],g[1],g[21],g[22],'Katarak'],
  [g[2],g[1],g[24],g[34],'Endoftalmitis'],
  [g[2],g[5],g[25],g[26],'Selulitis Orbita'],
  // rulaBase[16 - 20]
  [g[2],g[29],g[35],g[51],'Miopi'],
  [g[3],g[1],g[2],g[4],g[5],g[6],g[7],g[8],'Ulkus Kornea'],
  [g[4],g[1],g[2],g[3],g[5],g[6],g[7],g[8],'Ulkus Kornea'],
  [g[5],g[1],g[2],g[3],g[4],g[6],g[7],g[8],'Ulkus Kornea'],
  // ruleBase[21 - 25]
  [g[5],g[2],g[25],g[26],'Selulitis Orbitalitas'],
  [g[5],g[6],g[7],g[8],'Kalazion'],
  [g[5],g[16],g[17],'Trakoma'],
  [g[5],g[18],g[27],g[33],g[50],'Oftalmia Neonatorum'],
  // ruleBase[26 - 30]
  [g[5],g[21],'Retinitis Pigmentosa'],
  [g[6],g[1],g[2],g[3],g[4],g[5],g[7],g[8],'Ulkus Kornea'],
  [g[6],g[5],g[7],g[8],'Kalazion'],
  [g[6],g[14],g[18],g[27],g[52],g[53],g[54],'Pterygium'],
  [g[7],g[1],g[2],g[3],g[4],g[5],g[6],g[8],'Ulkus Kornea'],
  // ruleBase[31 - 35]
  [g[7],g[5],g[6],g[8],'Kalazion'],
  [g[8],g[1],g[2],g[3],g[4],g[5],g[6],g[7],'Ulkus Kornea'],
  [g[8],g[5],g[6],g[7],'Kalazion'],
  // ruleBase[36 - 40]
  // ruleBase[41 - 45]
  [g[14],g[1],g[18],g[21],'Keratokonus'],
  [g[14],g[6],g[18],g[27],g[52],g[53],g[54],'Pterygium'],
  // ruleBase[46 - 50]
  [g[14],g[25],g[27],g[40],g[41],'Dakriosistitis'],
  [g[14],g[55],g[56],g[57],g[58],'Skleritis'],
  [g[16],g[5],g[17],'Trakoma'],
  // ruleBase[51 - 55]
  [g[17],g[5],g[16],'Trakoma'],
  [g[18],g[1],g[14],g[21],'Keratokonus'],
  [g[18],g[5],g[27],g[33],g[50],'Oftalmia Neonatorum'],
  // ruleBase[56 - 60]
  [g[18],g[6],g[14],g[27],g[52],g[53],g[54],'Pterygium'],
  [g[18],g[19],'Retinopati Diabetikum'],
  [g[19],g[18],'Retinopati Diabetikum'],
  // ruleBase[61 - 65]
  [g[21],g[1],g[2],g[22],'Katarak'],
  [g[21],g[1],g[14],g[18],'Keratokonus'],
  [g[21],g[5],'Retinitis Pigmentosa'],
  [g[22],g[1],g[2],g[21],'Katarak'],
  [g[22],g[45],g[46],'Xerophtalmania'],
  // ruleBase[66 - 70]
  [g[24],'Eksoftalmus'],
  [g[25],g[2],g[5],g[26],'Selulitis Orbitalitas'],
  [g[25],g[14],g[27],g[40],g[41],'Dakriosistitis'],
  // ruleBase[71 - 75]
  [g[26],g[2],g[5],g[25],'Selulitis Orbitalitas'],
  // ruleBase[76 - 80]
  [g[27],g[5],g[18],g[33],g[50],'Oftalmia Neonatorum'],
  [g[27],g[6],g[14],g[18],g[52],g[53],g[54],'Pterygium'],
  [g[27],g[14],g[25],g[40],g[41],'Dakriosistitis'],
  // ruleBase[81 - 85]
  [g[29],g[2],g[35],g[51],'Miopi'],
  // ruleBase[86 - 90]
  [g[33],g[5],g[18],g[27],g[50],'Oftalmia Neonatorum'],
  // ruleBase[91 - 95]
  [g[35],g[2],g[29],g[51],'Miopi'],
  // ruleBase[96 - 100]
  [g[40],g[14],g[25],g[27],g[41],'Dakriosistitis'],
  [g[41],g[14],g[25],g[27],g[40],'Dakriosistitis'],
  // ruleBase[101 - 105]
  [g[45],g[22],g[46],'Xerophtalmania'],
  [g[46],g[22],g[45],'Xerophtalmania'],
  [g[47],g[48],g[49],'Degenerasi Makula'],
  [g[48],g[47],g[49],'Degenerasi Makula'],
  [g[49],g[47],g[48],'Degenerasi Makula'],
  // ruleBase[106 - 110]
  [g[50],g[5],g[18],g[27],g[33],'Oftalmia Neonatorum'],
  [g[51],g[2],g[29],g[35],'Miopi'],
  [g[52],g[6],g[14],g[18],g[27],g[53],g[54],'Pterygium'],
  [g[53],g[6],g[14],g[18],g[27],g[52],g[54],'Pterygium'],
  [g[54],g[6],g[14],g[18],g[27],g[52],g[53],'Pterygium'],
  // ruleBase[111 - 114]
  [g[55],g[14],g[56],g[57],g[58],'Skleritis'],
  [g[56],g[14],g[55],g[57],g[58],'Skleritis'],
  [g[57],g[14],g[55],g[56],g[58],'Skleritis'],
  [g[58],g[14],g[55],g[56],g[57],'Skleritis'], // have been checked and worked (function test)
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
    setInput('')       // return empty form after user press button
  }
  const handleLanjut = () => {
    Output('lanjut') // input = 'lanjut'
    setInput('')     // return empty form after user press the button
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
  let [ruleBaseBefore, setRuleBaseBefore] = useState('');

  function Screening(input) {
    let reply;
    if (input === 'mulai' || input === 'tes'|| input === 'test'  || input === 'skrining') {
      // re-empty
      setDiagnoseResult('');setReplyNow(''); setLastValue([]); 
      setAllYesReply([]); setTotalGejala([]); setRuleBaseBefore('');
      setReplyBefore(input);
      // reply
      reply = ruleBase[1][0]; 
      setI(1); setJ(0);
    }
    else if (input === 'lanjut') {
      if (replyBefore === 'mulai' || replyBefore === 'tes'|| replyBefore === 'test'  || replyBefore === 'skrining') {
        reply = 'Jawab <strong>ya/tidak</strong> terlebih dahulu.'
      }
      else {
        // re-empty
        setReplyNow(''); setLastValue([]); setAllYesReply([]); 
        setTotalGejala([]); setReplyBefore('lanjut');
        if (ruleBaseBefore === 'Glaukoma sekunder atau akut') {
          reply = ruleBase[10][0]; setI(10); setJ(0); 
          setDiagnoseResult('');
        }
        else if (ruleBaseBefore === 'Endolamitis, Keraritis, Panofthalmitis, Thombosis Sinus Cavernosus atau Uveitis Akut') {
          reply = ruleBase[17][0]; setI(17); setJ(0); 
          setDiagnoseResult('');
        }
        else if (ruleBaseBefore === 'Anda mengalami gejala mata merah dan penglihatan menurun') {
          reply = diagnoseResult;
        }
        else if (ruleBaseBefore === 'Episkelritis, Hordeolum, Keratokonjungtivitis Flikte Nularis, Konjungtivitis Akut atau Oinguekulitis') {
          reply = ruleBase[32][0]; setI(32); setJ(0); 
          setDiagnoseResult('');
        }
        else if (ruleBaseBefore === 'Perdarahan Subkonjungtiva') {
          reply = `Silahkan konsultasikan penyakit mata <strong>Perdarahan Subkonjungtiva</strong> dengan dokter spesialis mata`;
          setDiagnoseResult(reply);
        }
        else if (ruleBaseBefore === 'Alergi, Blefaritis, Hemangioma, Iritasi, Gangguan Pembuluh Darah atau Konjungtivitis Kronis') {
          reply = ruleBase[45][0]; setI(41); setJ(0); 
          setDiagnoseResult('');
        }
        else if (ruleBaseBefore === 'Abalsi Retina, Perdarahan Vitreus, Neuritis Optik, Hifema Spontan, Keracunan Metanol, Stroke Oksipitalis atau Malingering dan Histeria') {
          reply = ruleBase[57][0]; setI(53); setJ(0); 
          setDiagnoseResult('');
        }
        else if (ruleBaseBefore === 'Tumor, Strabismus atau Ophthalmopathy Thyroid') {
          reply = 'Diagnosis Tumor, Strabismus atau Ophthalmopathy Thyroid perlu dilakukan oleh dokter spesialis mata';
          setDiagnoseResult(reply);
        }
      }
    }
    else {
      // diagnose result is not empty, return diagnose result.
      if (diagnoseResult !== '') {
        reply = diagnoseResult;
      }
      else if (diagnoseResult === '') {
        if (
          replyBefore === 'mulai' || replyBefore === 'tes' || 
          replyBefore === 'test' || replyBefore === 'skrining' ||
          replyBefore === 'lanjut'
        ) {
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
              if (
                ruleBase[i][j+1] === 'Glaukoma sekunder atau akut' ||
                ruleBase[i][j+1] === 'Endolamitis, Keraritis, Panofthalmitis, Thombosis Sinus Cavernosus atau Uveitis Akut' ||
                ruleBase[i][j+1] === 'Anda mengalami gejala mata merah dan penglihatan menurun' ||
                ruleBase[i][j+1] === 'Episkelritis, Hordeolum, Keratokonjungtivitis Flikte Nularis, Konjungtivitis Akut atau Oinguekulitis' ||
                ruleBase[i][j+1] === 'Perdarahan Subkonjungtiva' ||
                ruleBase[i][j+1] === 'Alergi, Blefaritis, Hemangioma, Iritasi, Gangguan Pembuluh Darah atau Konjungtivitis Kronis' ||
                ruleBase[i][j+1] === 'Abalsi Retina, Perdarahan Vitreus, Neuritis Optik, Hifema Spontan, Keracunan Metanol, Stroke Oksipitalis atau Malingering dan Histeria' ||
                ruleBase[i][j+1] === 'Tumor, Strabismus atau Ophthalmopathy Thyroid'
              ) {
                reply = `Melalui skrining dicurigai kamu mengalami <strong>${totalGejala[totalGejala.length-1]} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                Ketik atau tekan lanjut untuk melanjutkan skrining.`
                setDiagnoseResult(reply); setI(i); setJ(j);
                setRuleBaseBefore(ruleBase[i][j+1]); setReplyBefore('');
              }
              else {
                reply = `Melalui skrining dicurigai kamu mengalami <strong>${totalGejala[totalGejala.length-1]} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                setDiagnoseResult(reply); setI(i); setJ(j); setReplyBefore('');
              }
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
                  arr.push(ruleBase[x][0]) // arr = [g[1],g[1],g[1],g[1],g[1],g[1],g[1],g[1],g[2],g[2],g[2],g[2],g[2],g[2],g[2],g[2],...]
                }
                // delete same values in array
                arr = [...new Set(arr)]
                // find value of ruleBase[i][j] index in newArr
                let findIndexinArr = arr.indexOf(ruleBase[i][j])
                // last value in ruleBase[i], case for only g[58] (works)
                if (arr[findIndexinArr+1] === undefined) {
                  reply = `Apa kamu yakin tidak mengalami gejala penyakit mata yang ditanyakan oleh bot? 
                  Silahkan ulangi skrining dengan tekan atau ketik mulai.`;
                  setDiagnoseResult(reply);
                }
                else if (arr[findIndexinArr+1] !== undefined) {
                  // if user's eyes are not red (normal) and eye vision is normal
                  if (arr[findIndexinArr+1] === 'end of first screening') {
                    reply = `Apa kamu yakin tidak mengalami gejala <b>mata merah</b> atau <b>penglihatan menurun?</b> 
                    Silahkan ulangi skrining dengan tekan atau ketik mulai.`;
                    setDiagnoseResult(reply);
                  }
                  else if (arr[findIndexinArr+1] === 'end of second screening') {
                    reply = `Apa kamu yakin tidak mengalami gejala-gejala yang ditanyakan oleh bot? 
                    Silahkan ulangi skrining dengan tekan atau ketik mulai.`;
                    setDiagnoseResult(reply);
                  }
                  else if (
                    arr[findIndexinArr+1] !== 'end of first screening' || 
                    arr[findIndexinArr+1] !== 'end of second screening'
                    ) {         
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
                // if ruleBase[i+1][j] is the last value of ruleBase[i], case g[24]
                if (arr[findIndexinArr+1] !== undefined && arr[findIndexinArr+1] === ruleBase[i+1][ruleBase[i+1].length-1]) {
                  reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                  setDiagnoseResult(reply);
                }
                // if ruleBase[i+1][ruleBase[i+1].length-1]) is the last value
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
                // if i === ruleBase.length, case for g[58], g[14]
                if (arr[findIndexinArr+1] === undefined) {
                  reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                    Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata <strong>${LastValueSpecialCase}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                  // if i === ruleBase.length, case for g[58], g[14], g[55]
                  if (arr[findIndexinArr+1] === undefined) {
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                    Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                    setDiagnoseResult(reply);
                  }
                }
                // if the one value before was same but two value before is not same
                // if the two value before was not same
                else {
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                    Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata <strong>${LastValueSpecialCase}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                  // if i === ruleBase.length, case for g[58], g[14], g[55], g[56]
                  if (arr[findIndexinArr+1] === undefined) {
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                    Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                    setDiagnoseResult(reply);
                  }
                }
                // if the two and tree value before is not same, case g[9]
                else {
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata <strong>${LastValueSpecialCase}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                  // if i === ruleBase.length, case for g[58], g[14], g[55], g[56], g[57]
                  if (arr[findIndexinArr+1] === undefined) {
                    reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                    Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                    Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                    setDiagnoseResult(reply);
                  }
                }
                // if the two and tree value before is not same, case g[9]
                else {
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejalaSpecialCase} gejala</strong> penyakit mata <strong>${LastValueSpecialCase}</strong>. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
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
                  reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                  Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                  Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                  setDiagnoseResult(reply);
                }
              }
            }
            // i === ruleBase.length - 1
            else {
              if (j === 0) { // works
                // last value in ruleBase[i]
                reply = `Apa kamu yakin tidak mengalami gejala-gejala yang ditanyakan oleh bot? 
                Silahkan ulangi skrining dengan tekan atau ketik mulai.`;
                setDiagnoseResult(reply);
              }
              else if (j === 1) {
                reply = `Kamu hanya menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                Belum bisa dipastikan penyakit mata yang tepat hanya dari 1 gejala tersebut. 
                Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                setDiagnoseResult(reply);
              }
              else { // works
                reply = `Kamu menjawab <strong>ya</strong> untuk ${allYesReply.length} pertanyaan yang ditanyakan oleh bot. 
                Melalui skrining dicurigai kamu mengalami <strong>${allYesReply.length} gejala</strong> dari total <strong>${totalGejala[totalGejala.length-1]} gejala</strong> penyakit mata <strong>${lastValue[lastValue.length-1]}</strong>. 
                Silahkan konsultasikan hasil skrining ini dengan dokter spesialis mata terdekat untuk informasi lebih lanjut.`
                setDiagnoseResult(reply);
              }
            }
          }
        }
        // if user type or press 'y' / 't' / 'ya' / 'tidak', 
        // but not press 'mulai' / 'tes' / 'test' / 'skrining' / 'lanjut' before
        else {
          if (input === 'y' || input === 'ya' || input === 't' || input === 'tidak') {
            reply = `Ketik atau tekan <strong>mulai</strong> untuk skrining penyakit mata`
          }
        }
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
    else if (input.match(/(y|ya|t|tidak|mulai|tes|test|skrining|lanjut)/gi)) {
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
      ruleBaseBefore = {ruleBaseBefore}
      ruleBaseILength = {ruleBase[i].length}
      ruleBaseLength = {ruleBase.length}
      replyBefore = {replyBefore}
      replyNow = {replyNow}
      allYesReply = {allYesReply}
      lastValue = {lastValue}
      totalGejala = {totalGejala}
      handleChange = {handleChange}
      handleEnter = {handleEnter}
      handleSubmit = {handleSubmit}
      handleLanjut = {handleLanjut}
      handleMulai = {handleMulai}
      handleYa = {handleYa}
      handleTidak = {handleTidak}
    />
  )
}