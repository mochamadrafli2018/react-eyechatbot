// Options the user could type in
const prompts = [
    //0
    [''],
    //1 
    ['hi','hai','hei','hey','halo','hallo','hello'],
    //2
    ['bagaimana kabarmu',
    'bagaimana kabar anda','kabar anda',
    'apa kabar','bagaimana hari anda?','apa kabar?'],
    //3
    ['baik','baik juga','senang','luar biasa'],
    //4
    ['buruk','bosan','lelah','sedih','kecewa','tertekan','depresi'],
    //5
    ['ceritakan saya sebuah cerita','ceritakan saya suatu candaan'],
    //6
    ['terima kasih','makasih','makasih banyak'],
    //7
    ['selamat tinggal','sampai jumpa','sampai jumpa lagi'],
];

// Possible responses,in corresponding order
const replies = [
  //0
  ['Coba ketikkan sesuatu'],
  //1
  ['Hallo!','Hai!'],
  //2
  ['Baik... bagaimana keadaan anda?',
  'Sangat baik, anda?','Luar biasa, bagaimana hari anda?'],
  //3
  ['Menarik','Wah, syukurlah!','Senang mendengarnya'],
  //4
  ['Kenapa?','Semangat ya'],
  //5
  ['Bagaimana dengan?','Pada jaman dahulu...'],
  //6
  ['Sama-sama','Senang membantu anda','Tidak masalah sobat'],
  //7
  ['Selamat tinggal','Sampai jumpa lagi'],
  //8
  ['Dari gejala berikut '],
  //9 gejala1 ada 8 penyakit
  ['Apakah anda peka terhadap cahaya (fotofobia) ?'],
  //10 gejala2 ada 8 penyakit
  ['Apakah anda terasa nyeri ?'],
  //11 gejala14 ada 8 penyakit
  ['Apakah anda mata berair ?'],
  //12 gejala18 ada 7 penyakit
  ['Apakah anda penglihatan kabur ?'],
  //13 gejala27 ada 8 penyakit
  ['Apakah anda mata merah ?'],
  //14 gejala28 ada 5 penyakit
  ['Apakah anda mata terasa gatal ?'],
  //15
  ['Oke,kita ke pertanyaan selanjutnya, apakah kamu mengalami gejala ...'],
];

const alternative = [
  'Ketikkan sesuatu yang bot pahami...',
  'Bot tidak paham...',
  'Maaf, bot tidak paham',
];

// Whatever else you want :)
const coronavirus = [
  'Tetap di rumah ya!',
  'Yuk, gunakan masker',
  'Jangan lupa jaga jarak',
  'These are uncertain times'
]
  
export {
  prompts,
  replies,
  alternative,
  coronavirus,
}
