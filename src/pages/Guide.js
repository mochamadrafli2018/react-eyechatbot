// import InferenceMachineCopy from '../components/InferenceMachineCopy';
import Footer from '../components/Footer'

export default function Guide () {
  return(
    <div className='poppins'>
      <div className='container overflow-hidden' style={{marginTop:'75px',marginBottom:'50px'}}>
        <div className='card px-3 py-1 mx-auto hover:shadow-2xl border-5px rounded'>
          <h4 className='mt-2 mb-0 text-primary'>Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata</h4>
          <hr/>
          <p>Untuk melakukan skrining penyakit mata ketikkan : mulai,  tes,  test atau skrining pada input chat.</p>
          <p>Atau bisa juga tekan tombol <strong>mulai</strong> berwarna biru yang ada di bawah input chat.</p>
          <p>Jawab setiap pertanyaan dengan <strong>y (ya)</strong> atau <strong>t (tidak)</strong>.</p>
          <p>Atau bisa juga tekan tombol ya atau tidak yang berwarna biru yang ada di bawah input chat.</p>
          <p>Anda juga bisa bertanya atau merespon seperti :</p>
          <p>1) hi, hai, hei, hey, halo, hallo, hello</p>
          <p>2) bagaimana kabarmu</p>
          <p>3) bagaimana kabar anda, kabar anda</p>
          <p>4) apa kabar, bagaimana hari anda?, apa kabar?</p>
          <p>5) baik, baik juga, senang, luar biasa</p>
          <p>6) buruk, bosan, lelah, sedih, kecewa, tertekan, depresi</p>
          <p>7) ceritakan saya sebuah cerita, ceritakan saya suatu candaan</p>
          <p>8) terima kasih, makasih, makasih banyak</p>
          <p>9) selamat tinggal, sampai jumpa, sampai jumpa lagi</p>
          <p>10) covid, corona </p>
          <p>Untuk menyimpan hasil skrining anda ke komputer lokal, anda bisa menekan CTRL + P.</p>
          <p>Perlu diketahui bahwa hasil skrining dari sistem pakar tersebut <strong>tidak bisa</strong> dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.</p>
          <p>Hasil skrining tersebut bisa anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.</p>
          {/*<InferenceMachineCopy/>*/}
        </div>
      </div>
      <Footer/>
    </div>
  )
};