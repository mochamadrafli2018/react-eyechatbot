import React from 'react';
import {Link} from 'react-router-dom';

export default function Guide () {
  return(
    <div class='container'>
      <div class='card p-3 mx-auto mt-3 shadow-sm border rounded'>
        <h4>Panduan Pengguna</h4>
        <hr/>
        <p>Chat dan Reply</p>
        <p>Untuk melakukan skrining penyakit mata ketikkan : </p>
        <p>mulai, tes, test atau skrining</p>
        <p>Atau bisa juga tekan tombol mulai</p>
        <p>Jawab setiap pertanyaan dengan y (ya) atau t (tidak)</p>
        <p>Anda juga bisa bertanya atau merespon seperti :</p>
        <p>1) 'hi','hai','hei','hey','halo','hallo','hello'</p>
        <p>2) 'bagaimana kabarmu'</p>
        <p>3) 'bagaimana kabar anda','kabar anda'</p>
        <p>4) 'apa kabar','bagaimana hari anda?','apa kabar?'</p>
        <p>5) 'baik','baik juga','senang','luar biasa'</p>
        <p>6) 'buruk','bosan','lelah','sedih','kecewa','tertekan','depresi'</p>
        <p>7) 'ceritakan saya sebuah cerita','ceritakan saya suatu candaan'</p>
        <p>8) 'terima kasih','makasih','makasih banyak'</p>
        <p>9) 'selamat tinggal','sampai jumpa','sampai jumpa lagi'</p>
        <Link to={'./chatbot'} class='my-auto text-white'>
          Kembali
        </Link>
      </div>
    </div>
  )
};