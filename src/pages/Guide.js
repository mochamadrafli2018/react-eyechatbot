// import InferenceMachineCopy from '../components/InferenceMachineCopy';
import Footer from '../components/Footer'

export default function Guide () {
  return(
    <div className='poppins'>
      <div className='container overflow-hidden' 
      style={{marginTop:'75px',marginBottom:'50px'}}>
        <div className='card px-3 py-1 mx-auto border-5px rounded
        hover:border-blue-400 hover:shadow-lg'>
          <h4 className='my-2 text-primary quicksand'>Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata</h4>
          <hr/>
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
      <Footer/>
    </div>
  )
};