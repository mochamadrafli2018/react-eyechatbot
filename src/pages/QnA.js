// Chatbot do not give all of the question

// Options the user could type in
const prompts = [
    //0 
    ['hi','hey','hello'],
    //1
    ['how are you','how are things'],
    //2
    ['what is going on','what is up'],
    //3
    ['Glad to hear it'],
    //4
    ['happy','good','well','fantastic','cool'],
    //5
    ['bad','bored','tired','sad'],
    //6
    ['tell me story','tell me joke'],
    //7
    ['thanks','thank you'],
    //8
    ['bye','good bye','goodbye'],
    //9
    ['mulai'],
    //10
    ['y','t','ya','tidak'],
];

// Possible responses,in corresponding order
const replies = [
  //1
  ['Hello!','Hi!','Hey!','Hi there!'],
  //2
  ['Fine... how are you?','Pretty well,how are you?','Fantastic,how are you?'],
  //3
  ['Nothing much','Exciting things!'],
  //4
  ['happy','good','well','fantastic','cool'],
  //5
  ['Glad to hear it'],
  //6
  ['Why?','Cheer up buddy'],
  //7
  ['What about?','Once upon a time...'],
  //8
  ['You\'re welcome','No problem'],
  //9
  ['Goodbye','See you later'],
  //10 gejala1 ada 8 penyakit
  ['Apakah anda peka terhadap cahaya (fotofobia) ?'],
  //11 gejala2 ada 8 penyakit
  ['Apakah anda terasa nyeri ?'],
  //12 gejala14 ada 8 penyakit
  ['Apakah anda mata berair ?'],
  //13 gejala18 ada 7 penyakit
  ['Apakah anda penglihatan kabur ?'],
  //14 gejala27 ada 8 penyakit
  ['Apakah anda mata merah ?'],
  //15 gejala28 ada 5 penyakit
  ['Apakah anda mata terasa gatal ?'],
  //16
  ['Oke,kita ke pertanyaan selanjutnya']
];

const Gejala = [
  //gejala1
  ['Peka terhadap cahaya (fotofobia)'],
  //gejala2
  ['Terasa nyeri'],
  //gejala3
	['Tampak bintik nanah berwarna kuning keputihan pada kornea'],
  //gejala4
  ['Terdapat kotoran mata'],
  //gejala5
  ['Kelopak mata membengkak'],
  //gejala6
	['Mata mengalami iritasi'],
  //gejala7
  ['Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan'],
  //gejala8
  ['Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata'],
  //gejala9
  ['Bulu mata rontok'],
  //gejala10
  ['Mata sukar dibuka ketika bangun dipagi hari'],
  //gejala11
	['Alergi'],
  //gejala12
  ['Mata terasa panas'],
  //gejala13
  ['Mata seperti kelilipan'],	
  //gejala14
  ['Mata berair'],	
  //gejala15
  ['Nyeri pada tepi kelopak mata'],	
  //gejala16
  ['Kornea tampak keruh'],
  //gejala17
  ['Konjungtiva meradang'],	
  //'Penglihatan kabur'
  ['Penglihatan kabur'],	
  //gejala19
	['Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya'],
  //gejala20
	['Hilangnya fungsi penglihatan pada salah satu mata,yang kemudian menyebar sejalan perkembangan ablasio'],
  //gejala21
  ['Kesulitan melihat di malam hari'],
  //gejala22
  ['Penurunan ketajaman penglihatan (bahkan siang hari)'],	
  //gejala23
	['Kemerahan pada skelra'],
  //gejala24
  ['Mata menonjol'],
  //gejala25 
	['Demam'],
  //gejala26
  ['Bola mata bengkak dan tampak berkabut'],
  //gejala27
  ['Mata merah'],
  //gejala28
  ['Mata terasa gatal'],
  //gejala29
  ['Mata terasa perih'],
  //gejala30
  ['Konjungtiva menjadi merah'],
  //gejala31
  ['Konjungtiva bengkak'],
  //gejala32
  ['Peradangan mata yang agak menonjol dan berwarna kuning'],
  //gejala33
  ['Mata nyeri bila ditekan'],
  //gejala34
  ['Gangguan penglihatan'],
  //gejala35
  ['Sakit kepala'],
  //gejala36
  ['Koma'],
  //gejala37
  ['Kejang'],
  //gejala38
  ['Sakit dengan gerakan mata'],
  //gejala39
  ['Kehilangan penglihatan'],
  //gejala40
  ['Nyeri di daerah sekitar kantong air mata'],
  //gejala41
  ['Mata mengeluarkan nanah'],
  //gejala42
	['Pusing karena lelah'],
  //gejala43
  ['Mengalami mual dan muntah'],
  //gejala44
  ['Pupil melebar dan tidak mengecil jika diberi sinar yang terang',]
  //gejala45
  ['Sel batang retina sulit berdaptasi diruang yang remang-remang'],
  //gejala46
  ['Tidak dapat melihat pada lingkungan yang kurang bercahaya'],
  //gejala47
  ['Gangguan penglihatan pada salah satu mata'],
  //gejala48
  ['Garis mata lurus terlihat bergelombang'],
  //gejala49
  ['Mata tidak nyeri'],
  //gejala50
  ['Riwayat penyakit menular seksual pada ibu'],
  //gejala51
  ['Air mata berlebihan'],
  //gejala52
  ['Mata kering'],
  //gejala53
  ['Benjolan pada mata bagian atas atau bawah'],
  //gejala54
  ['Seperti ada benda asing di mata'],
]

const DataPenyakit = [
  [
    'Peka terhadap cahaya (fotofobia)',
    'Terasa nyeri',
    'Tampak bintik nanah berwarna kuning keputihan pada kornea',
    'Terdapat kotoran mata',
    'Mata berair',
    'Mata merah',
    'Mata terasa gatal',
    'Gangguan penglihatan',
    'Ulkus Kornea'
  ],
  [ 
    'Peka terhadap cahaya (fotofobia)',
    'Terasa nyeri','Mata terasa panas',
    'Mata berair','Mata terasa gatal',
    'Konjungtivitis'
  ],
  [
    'Peka terhadap cahaya (fotofobia)',
    'Terasa nyeri',
    'Mata berair',
    'Penglihatan kabur',
    'Mata merah',
    'Mata terasa gatal',
    'Mata terasa perih',
    'Keratitis Pungtata Superfisialis'
  ],
  [
    'Peka terhadap cahaya (fotofobia)',
    'Terasa nyeri',
    'Mata menonjol',
    'Gangguan penglihatan',
    'Endoftalmitis'
  ],
  [
    'Peka terhadap cahaya (fotofobia)',
    'Terasa nyeri',
    'Kesulitan melihat di malam hari',
    'Penurunan ketajaman penglihatan (bahkan siang hari)',
    'Katarak'
  ] 
  [
    'Peka terhadap cahaya (fotofobia)',
    'Kelopak mata membengkak',
    'Bulu mata rontok',
    'Mata sukar dibuka ketika bangun dipagi hari',
    'Alergi',
    'Mata terasa panas',
    'Mata merah',
    'Mata terasa gatal',
    'Blefaritis'
  ],
  [
    'Peka terhadap cahaya (fotofobia)',
    'Mata berair',
    'Penglihatan kabur',
    'Kesulitan melihat di malam hari',
    'Keratokonus'
  ],
  [
    'Peka terhadap cahaya (fotofobia)',
    'Penglihatan kabur',
    'Kemerahan pada skelra',
    'Uveitis']
  [
    'Terasa nyeri',
    'Kelopak mata membengkak',
    'Mata berair',
    'Mata merah',
    'Sakit kepala',
    'Mengalami mual dan muntah',
    'Pupil melebar dan tidak mengecil jika diberi sinar yang terang',
    'Glaukoma'
  ],
  [
    'Terasa nyeri',
    'Kelopak mata membengkak',
    'Demam',
    'Bola mata bengkak dan tampak berkabut',
    'Selulitis Orbitalitas',
  ]
  [
    'Terasa nyeri',
    'Mata terasa perih',
    'Sakit kepala',
    'Air mata berlebihan',
    'Miopi'
  ],
  [ 
    'Kelopak mata membengkak',
    'Mata mengalami iritasi',
    'Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan',
    'Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata',
    'Kalazion'
  ],
  [
    'Kelopak mata membengkak',
    'Kornea tampak keruh',
    'Konjungtiva meradang',
    'Trakoma'
  ],
  [
    'Kelopak mata membengkak',
    'Penglihatan kabur',
    'Mata merah',
    'Mata nyeri bila ditekan',
    'Riwayat penyakit menular seksual pada ibu',
    'Oftalmia Neonatorum'
  ],
  [
    'Kelopak mata membengkak', 
    'Kesulitan melihat di malam hari atau ruang gelap', 
    'Retinitis Pigmentosa'
  ],
  [
    'Mata mengalami iritasi',
    'Mata berair',
    'Penglihatan kabur',
    'Mata merah',
    'Mata kering',
    'Benjolan pada mata bagian atas atau bawah',
    'Seperti ada benda asing di mata',
    'Pterygium'
  ],
  [ 
    'Mata terasa panas',
    'Mata terasa gatal',
    'Konjungtiva menjadi merah',
    'Konjungtiva bengkak',
    'Alergi Mata Merah',
  ]
  [
    'Mata seperti kelilipan',
    'Mata berair',
    'Nyeri pada tepi kelopak mata',
    'Mata merah',
    'Hordeolum (Stye)'
  ],
  [
    'Mata berair',
    'Demam',
    'Mata merah',
    'Nyeri di daerah sekitar kantong air mata',
    'Mata mengeluarkan nanah',
    'Dakriosistitis'
  ],
  [
    'Penglihatan kabur',
    'Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya',
    'Hilangnya fungsi penglihatan pada salah satu mata, yang kemudian menyebar sejalan perkembangan ablasio',
    'Abalso Retina'
  ],
  [ 
    'Penglihatan kabur',
    'Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya',
    'Retinopati Diabetikum'
  ],
  [
    'Penurunan ketajaman penglihatan (bahkan siang hari)',
    'Sel batang retina sulit berdaptasi diruang yang remang-remang',
    'Tidak dapat melihat pada lingkungan yang kurang bercahaya',
    'Xerophtalmania'
  ],
  [
    'Mata menonjol',
    'Eksoftalmus'
  ],
  [
    'Demam',
    'Sakit kepala',
    'Koma',
    'Kejang',
    'Trombosis Sinus Kavernosus'
  ],
  [
    'Sakit dengan gerakan mata',
    'Kehilangan penglihatan',
    'Optic Neuritis'
  ],
  [
    'Gangguan penglihatan pada salah satu mata',
    'Garis mata lurus terlihat bergelombang',
    'Mata tidak nyeri',
    'Degenerasi Makula'
  ],
]

const alternative = [
  'Go on...',
  'Try again...',
  'I\'m listening...',
  'I don\'t understand...'
];

// Whatever else you want :)
const coronavirus = ['Please stay home','Wear a mask','Fortunately,I don\'t have COVID','These are uncertain times']
  
export {
  prompts,
  replies,
  alternative,
  coronavirus,
}
