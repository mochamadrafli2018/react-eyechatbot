// import InferenceMachineCopy from '../components/InferenceMachineCopy';
import Footer from '../components/Footer'
export default function Guide () {
  return(
    <div className='poppins'>
      <div className='container overflow-hidden' 
      style={{marginTop:'60px'}}>
        <div className='card px-3 py-1 mx-auto mb-3 border-5px rounded
        hover:border-blue-400 hover:shadow-lg'>
          <p className='my-2 fw-bold text-primary quicksand' style={{fontSize:'20px'}}>
            Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata
          </p>
          <hr/>
          <p className='my-2'>
            Ada 26 penyakit mata yang ada pada database sistem diantaranya :
            1.) Ulkus Kornea
            2.) Keratokonus
            3.) Kalazion
            4.) Blefaritis
            5.) Hordeolum (Stye)
            6.) Konjungtivitis
            7.) Trakoma
            8.) Abalso Retina
            9.) Retinopati Diabetikum
            10.) Glaukoma
            11.) Katarak
                12.) Uveitis
                13.) Selulitis Orbitalis
                14.) Eksoftalmus
                15.) Keratitis Pungtata Superfisialis
                16.) Alergi Mata Merah
                17.) Endoftalmitis
                18.) Trombosis Sinus Kavernosus
                19.) Optic Neuritis
                20.) Dakrioritis
                21.) Degenerasi Makula
                22.) Episkleritis
                23.) Infeksi Herpes Simpleks Kornea
                24.) Infeksi Herpes Zoster Kornea
                25.) Keratitis Ulserativa Perifer
                28.) Oftalmia Neonatorum
          </p>
          <p className='my-2'>Untuk melakukan skrining penyakit mata ketikkan : mulai,  tes,  test atau skrining pada input chat.</p>
          <p className='my-2'>Atau bisa juga tekan tombol <strong>mulai</strong> berwarna biru yang ada di bawah input chat.</p>
          <p className='my-2'>Jawab setiap pertanyaan dengan <strong>y (ya)</strong> atau <strong>t (tidak)</strong>.</p>
          <p className='my-2'>Atau bisa juga tekan tombol ya atau tidak yang berwarna biru yang ada di bawah input chat.</p>
          <p className='my-2'>Anda juga bisa bertanya atau merespon seperti :</p>
          <p className='my-2'>1) hi, hai, hei, hey, halo, hallo, hello</p>
          <p className='my-2'>2) bagaimana kabarmu</p>
          <p className='my-2'>3) bagaimana kabar anda, kabar anda</p>
          <p className='my-2'>4) apa kabar, bagaimana hari anda?, apa kabar?</p>
          <p className='my-2'>5) baik, baik juga, senang, luar biasa</p>
          <p className='my-2'>6) buruk, bosan, lelah, sedih, kecewa, tertekan, depresi</p>
          <p className='my-2'>7) ceritakan saya sebuah cerita, ceritakan saya suatu candaan</p>
          <p className='my-2'>8) terima kasih, makasih, makasih banyak</p>
          <p className='my-2'>9) selamat tinggal, sampai jumpa, sampai jumpa lagi</p>
          <p className='my-2'>10) covid, corona </p>
          <p className='my-2'>Untuk menyimpan hasil skrining anda ke komputer lokal, anda bisa menekan CTRL + P.</p>
          <p className='my-2'>Perlu diketahui bahwa hasil skrining dari sistem pakar tersebut <strong>tidak bisa</strong> dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.</p>
          <p className='my-2'>Hasil skrining tersebut bisa anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.</p>
          {/*<InferenceMachineCopy/>*/}
        </div>
      </div>
      <Footer styleFooter={{position:'relative'}}/>
    </div>
  )
};