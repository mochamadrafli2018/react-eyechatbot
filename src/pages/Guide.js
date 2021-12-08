import {Accordion} from 'react-bootstrap';
import AccordionBootstrap from '../bootstrap-components/AccordionBootstrap';
import '../index.css';

export default function Guide () {
  return(
    <div 
      className='container border-2 mx-auto mb-3 p-2 poppins overflow-hidden rounded-lg hover:border-blue-400 hover:shadow-lg' 
      style={{marginTop:'60px',maxWidth:'700px',width:'99%'}}
    >
        <p className='my-1 fw-bold text-primary quicksand' style={{fontSize:'20px'}}>
          Panduan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata
        </p>
        <hr></hr>
        <Accordion defaultActiveKey='0' className='border-2 my-1 rounded hover:border-blue-400'>
          <AccordionBootstrap 
            eventKey={"0"}
            Title = {(<p className='fw-bold m-0'>Panduan Umum</p>)}
            Text = {(
              <div>
                <p className='my-1'>
                  <span className='fw-bold text-primary'>Ketikkan : </span>
                  mulai,  tes,  test atau skrining pada input chat untuk{' '}
                  melakukan skrining penyakit mata atau klik tombol{' '}
                  <span className='fw-bold text-primary'>mulai</span> berwarna biru.
                </p>
                <p className='my-1'>
                  <span className='fw-bold text-primary'>Jawab </span>
                  setiap pertanyaan dengan{' '}
                  <span className='fw-bold text-primary'>y (ya)</span> atau{' '}
                  <span className='fw-bold text-primary'>t (tidak)</span> atau{' '}
                  klik tombol ya atau tidak yang berwarna biru.
                </p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"1"}
            Title = {(<p className='fw-bold m-0'>Daftar Penyakit Mata yang Bisa di Skrining</p>)}
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
                <p className='my-1'>27.) Skleritis</p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"2"}
            Title = {(<p className='fw-bold m-0'>Catatan</p>)}
            Text = {(
              <div>
                <p className='my-1'>
                  Hasil skrining dari sistem pakar ini <span className='fw-bold text-primary'>tidak bisa </span>
                  dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.
                </p>
                <p className='my-1'>
                  Hasil skrining tersebut <span className='fw-bold text-primary'>bisa </span>
                  anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.
                </p>
              </div>
            )}
          />
        </Accordion>
    </div>
  )
};