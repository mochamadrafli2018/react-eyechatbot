const sympthom = [
    //gejala1
    ['peka terhadap cahaya (fotofobia)'],
    //gejala2
    ['terasa nyeri'],
    //gejala3
    ['tampak bintik nanah berwarna kuning keputihan pada kornea'],
    //gejala4
    ['terdapat kotoran mata'],
    //gejala5
    ['kelopak mata membengkak'],
    //gejala6
    ['mata mengalami iritasi'],
    //gejala7
    ['terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan'],
    //gejala8
    ['terbentuk daerah kemerahan/abu-abu di bawah kelopak mata'],
    //gejala9
    ['bulu mata rontok'],
    //gejala10
    ['mata sukar dibuka ketika bangun dipagi hari'],
    //gejala11
    ['alergi'],
    //gejala12
    ['mata terasa panas'],
    //gejala13
    ['mata seperti kelilipan'],	
    //gejala14
    ['mata berair'],	
    //gejala15
    ['nyeri pada tepi kelopak mata'],	
    //gejala16
    ['kornea tampak keruh'],
    //gejala17
    ['konjungtiva meradang'],	
    //gejala18
    ['penglihatan kabur'],	
    //gejala19
    ['terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya'],
    //gejala20
    ['hilangnya fungsi penglihatan pada salah satu mata,yang kemudian menyebar sejalan perkembangan ablasio'],
    //gejala21
    ['kesulitan melihat di malam hari'],
    //gejala22
    ['penurunan ketajaman penglihatan (bahkan siang hari)'],	
    //gejala23
    ['kemerahan pada skelra'],
    //gejala24
    ['mata menonjol'],
    //gejala25 
    ['demam'],
    //gejala26
    ['bola mata bengkak dan tampak berkabut'],
    //gejala27
    ['mata merah'],
    //gejala28
    ['mata terasa gatal'],
    //gejala29
    ['mata terasa perih'],
    //gejala30
    ['konjungtiva menjadi merah'],
    //gejala31
    ['konjungtiva bengkak'],
    //gejala32
    ['peradangan mata yang agak menonjol dan berwarna kuning'],
    //gejala33
    ['mata nyeri bila ditekan'],
    //gejala34
    ['gangguan penglihatan'],
    //gejala35
    ['sakit kepala'],
    //gejala36
    ['koma'],
    //gejala37
    ['kejang'],
    //gejala38
    ['sakit dengan gerakan mata'],
    //gejala39
    ['kehilangan penglihatan'],
    //gejala40
    ['nyeri di daerah sekitar kantong air mata'],
    //gejala41
    ['mata mengeluarkan nanah'],
    //gejala42
    ['pusing karena lelah'],
    //gejala43
    ['mengalami mual dan muntah'],
    //gejala44
    ['pupil melebar dan tidak mengecil jika diberi sinar yang terang'],
    //gejala45
    ['sel batang retina sulit berdaptasi diruang yang remang-remang'],
    //gejala46
    ['tidak dapat melihat pada lingkungan yang kurang bercahaya'],
    //gejala47
    ['gangguan penglihatan pada salah satu mata'],
    //gejala48
    ['garis mata lurus terlihat bergelombang'],
    //gejala49
    ['mata tidak nyeri'],
    //gejala50
    ['riwayat penyakit menular seksual pada ibu'],
    //gejala51
    ['air mata berlebihan'],
    //gejala52
    ['mata kering'],
    //gejala53
    ['benjolan pada mata bagian atas atau bawah'],
    //gejala54
    ['seperti ada benda asing di mata'],
  ]
  
  const diseases = [
    //1
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
    //2
    [ 
      'Peka terhadap cahaya (fotofobia)',
      'Terasa nyeri','Mata terasa panas',
      'Mata berair','Mata terasa gatal',
      'Konjungtivitis'
    ],
    //3
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
    //4
    [
      'Peka terhadap cahaya (fotofobia)',
      'Terasa nyeri',
      'Mata menonjol',
      'Gangguan penglihatan',
      'Endoftalmitis'
    ],
    //5
    [
      'Peka terhadap cahaya (fotofobia)',
      'Terasa nyeri',
      'Kesulitan melihat di malam hari',
      'Penurunan ketajaman penglihatan (bahkan siang hari)',
      'Katarak'
    ],
    //6 
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
    //7
    [
      'Peka terhadap cahaya (fotofobia)',
      'Mata berair',
      'Penglihatan kabur',
      'Kesulitan melihat di malam hari',
      'Keratokonus'
    ],
    //8
    [
      'Peka terhadap cahaya (fotofobia)',
      'Penglihatan kabur',
      'Kemerahan pada skelra',
      'Uveitis'
    ],
    //9
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
    //10
    [
      'Terasa nyeri',
      'Kelopak mata membengkak',
      'Demam',
      'Bola mata bengkak dan tampak berkabut',
      'Selulitis Orbitalitas',
    ],
    //11
    [
      'Terasa nyeri',
      'Mata terasa perih',
      'Sakit kepala',
      'Air mata berlebihan',
      'Miopi'
    ],
    //12
    [ 
      'Kelopak mata membengkak',
      'Mata mengalami iritasi',
      'Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan',
      'Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata',
      'Kalazion'
    ],
    //13
    [
      'Kelopak mata membengkak',
      'Kornea tampak keruh',
      'Konjungtiva meradang',
      'Trakoma'
    ],
    //14
    [
      'Kelopak mata membengkak',
      'Penglihatan kabur',
      'Mata merah',
      'Mata nyeri bila ditekan',
      'Riwayat penyakit menular seksual pada ibu',
      'Oftalmia Neonatorum'
    ],
    //15
    [
      'Kelopak mata membengkak', 
      'Kesulitan melihat di malam hari atau ruang gelap', 
      'Retinitis Pigmentosa'
    ],
    //16
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
    //17
    [ 
      'Mata terasa panas',
      'Mata terasa gatal',
      'Konjungtiva menjadi merah',
      'Konjungtiva bengkak',
      'Alergi Mata Merah',
    ],
    //18
    [
      'Mata seperti kelilipan',
      'Mata berair',
      'Nyeri pada tepi kelopak mata',
      'Mata merah',
      'Hordeolum (Stye)'
    ],
    //19
    [
      'Mata berair',
      'Demam',
      'Mata merah',
      'Nyeri di daerah sekitar kantong air mata',
      'Mata mengeluarkan nanah',
      'Dakriosistitis'
    ],
    //20
    [
      'Penglihatan kabur',
      'Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya',
      'Hilangnya fungsi penglihatan pada salah satu mata, yang kemudian menyebar sejalan perkembangan ablasio',
      'Abalso Retina'
    ],
    //21
    [ 
      'Penglihatan kabur',
      'Terlihat bentuk-bentuk iregular yang melayang-layang atau kilatan cahaya',
      'Retinopati Diabetikum'
    ],
    //22
    [
      'Penurunan ketajaman penglihatan (bahkan siang hari)',
      'Sel batang retina sulit berdaptasi diruang yang remang-remang',
      'Tidak dapat melihat pada lingkungan yang kurang bercahaya',
      'Xerophtalmania'
    ],
    //23
    [
      'Mata menonjol',
      'Eksoftalmus'
    ],
    //24
    [
      'Demam',
      'Sakit kepala',
      'Koma',
      'Kejang',
      'Trombosis Sinus Kavernosus'
    ],
    //25
    [
      'Sakit dengan gerakan mata',
      'Kehilangan penglihatan',
      'Optic Neuritis'
    ],
    //26
    [
      'Gangguan penglihatan pada salah satu mata',
      'Garis mata lurus terlihat bergelombang',
      'Mata tidak nyeri',
      'Degenerasi Makula'
    ],
]
export {
    sympthom,
    diseases
}