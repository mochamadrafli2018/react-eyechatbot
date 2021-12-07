import {Accordion} from 'react-bootstrap';
import AccordionBootstrap from '../bootstrap-components/AccordionBootstrap';
import '../index.css';

export default function Guide () {
  return(
    <div 
      className='container border-2 mx-auto mb-3 p-2 poppins overflow-hidden rounded-lg hover:border-blue-400 hover:shadow-lg' 
      style={{marginTop:'60px',maxWidth:'600px'}}
    >
        <p className='my-1 fw-bold text-primary quicksand' style={{fontSize:'20px'}}>
          Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata
        </p>
        <hr></hr>
        <Accordion defaultActiveKey='0' className='border-2 my-1 rounded hover:border-blue-400'>
          <AccordionBootstrap 
            eventKey={"0"}
            Title = {(<p>Panduan Umum</p>)}
            Text = {(
              <div>
                <p className='my-1'>Untuk melakukan skrining penyakit mata ketikkan : mulai,  tes,  test atau skrining pada input chat.</p>
                <p className='my-1'>Atau bisa juga tekan tombol <strong>mulai</strong> berwarna biru yang ada di bawah input chat.</p>
                <p className='my-1'>Jawab setiap pertanyaan dengan <strong>y (ya)</strong> atau <strong>t (tidak)</strong>.</p>
                <p className='my-1'>Atau bisa juga tekan tombol ya atau tidak yang berwarna biru yang ada di bawah input chat.</p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"1"}
            Title = {(<p>Daftar Penyakit Mata yang Bisa di Skrining</p>)}
            Text = {(
              <div>
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
                <p className='my-1'>26.) Degenerasi Makula</p>
                <p className='my-1'>26.) Skleritis</p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"2"}
            Title = {(<p>Catatan</p>)}
            Text = {(
              <div>
                <p className='my-1'>Perlu diketahui bahwa hasil skrining dari sistem pakar ini <strong>tidak bisa</strong> dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.</p>
                <p className='my-1'>Hasil skrining tersebut bisa anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.</p>
              </div>
            )}
          />
        </Accordion>
    </div>
  )
};