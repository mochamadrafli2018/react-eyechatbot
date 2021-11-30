import Footer from '../components/Footer';
import '../index.css';

export default function Guide () {
  return(
    <div className='poppins'>
      <div 
        className='container overflow-hidden px-3 py-1 mx-auto mb-3 border-2 rounded hover:border-blue-400 hover:shadow-lg' 
        style={{marginTop:'60px',maxWidth:'600px'}}
      >
          <p className='my-1 fw-bold text-primary quicksand' style={{fontSize:'20px'}}>
            Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata
          </p>
          <hr/>
          <p className='my-1'>
            Pada chatbot sistem pakar ini, terdapat 26 data penyakit mata beserta gejalanya diantaranya :
          </p>
          <p className='my-1'>1.) Ulkus Kornea</p>
          <p className='my-1'>2.) Keratokonus</p>
          <p className='my-1'>3.) Kalazion</p>
          <p className='my-1'>4.) Blefaritis</p>
          <p className='my-1'>5.) Hordeolum (Stye)</p>
          <p className='my-1'>6.) Konjungtivitis</p>
          <p className='my-1'>7.) Trakoma</p>
          <p className='my-1'>8.) Abalso Retina</p>
          <p className='my-1'>9.) Retinopati Diabetikum</p>
          <p className='my-1'>10.) Glaukoma</p>
          <p className='my-1'>11.) Katarak</p>
          <p className='my-1'>12.) Uveitis</p>
          <p className='my-1'>13.) Selulitis Orbitalis</p>
          <p className='my-1'>14.) Eksoftalmus</p>
          <p className='my-1'>15.) Keratitis Pungtata Superfisialis</p>
          <p className='my-1'>16.) Alergi Mata Merah</p>
          <p className='my-1'>17.) Endoftalmitis</p>
          <p className='my-1'>18.) Trombosis Sinus Kavernosus</p>
          <p className='my-1'>19.) Optic Neuritis</p>
          <p className='my-1'>20.) Dakrioritis</p>
          <p className='my-1'>21.) Degenerasi Makula</p>
          <p className='my-1'>22.) Episkleritis</p>
          <p className='my-1'>23.) Infeksi Herpes Simpleks Kornea</p>
          <p className='my-1'>24.) Infeksi Herpes Zoster Kornea</p>
          <p className='my-1'>25.) Keratitis Ulserativa Perifer</p>
          <p className='my-1'>28.) Oftalmia Neonatorum</p>
          
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
          <p className='my-2'>Perlu diketahui bahwa hasil skrining dari sistem pakar ini <strong>tidak bisa</strong> dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.</p>
          <p className='my-2'>Hasil skrining tersebut bisa anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.</p>
          {/*<InferenceMachineCopy/>*/}
      </div>
      <Footer styleFooter={{position:'relative'}}/>
    </div>
  )
};