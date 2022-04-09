import {Accordion} from 'react-bootstrap';
import AccordionBootstrap from '../components/AccordionBootstrap';
import ChatbotNavbar from '../components/ChatbotNavbar';

export default function Guide () {
  return(
    <div className='bg-sky-100 h-screen m-0 pt-16'>
      <ChatbotNavbar/>

      <main
        className='border-2 border-blue-600 max-w-3xl mx-auto mb-3 p-2 poppins overflow-hidden rounded-lg shadow'
        style={{width:'99%'}}
      >
        <p className='my-1 px-3 font-bold text-black text-xl quicksand'>
          Petunjuk dan Catatan Penggunaan Chatbot Sistem Pakar Skrining Penyakit Mata
        </p>
        <hr></hr>
        <Accordion defaultActiveKey='0' className='border-2 my-1 rounded border-blue-600'>
          <AccordionBootstrap 
            eventKey={"0"}
            Title = {(<p className='fw-bold m-0'>Panduan Umum</p>)}
            Content= {(
              <div>
                <p className='my-1'>
                  <span className='fw-bold text-blue-600'>Ketikkan : </span>
                  mulai,  tes,  test atau skrining pada input chat untuk{' '}
                  melakukan skrining penyakit mata atau klik tombol{' '}
                  <span className='fw-bold text-blue-600'>mulai</span> berwarna biru.
                </p>
                <p className='my-1'>
                  <span className='fw-bold text-blue-600'>Jawab </span>
                  setiap pertanyaan dengan{' '}
                  <span className='fw-bold text-blue-600'>y (ya)</span> atau{' '}
                  <span className='fw-bold text-blue-600'>t (tidak)</span> atau{' '}
                  klik tombol ya atau tidak yang berwarna biru.
                </p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"1"}
            Title = {(<p className='fw-bold m-0'>Pembimbing dan Validator</p>)}
            Content= {(
              <div>
                <p className='my-1'>Chatbot sistem pakar ini merupakan riset tugas akhir di bawah bimbingan :</p>
                <p>1. <span className='fw-bold text-blue-600'>Bapak Ir. Nazrul Effendy, S. T, M. Eng, Ph.D., IPM</span> (Pembimbing Utama)</p>
                <p>2. <span className='fw-bold text-blue-600'>Bapak Nopriadi, S.T., M.Sc., Ph.D.</span> (Pembimbing Pendamping)</p>
                <p>3. <span className='fw-bold text-blue-600'>dr. Indra Tri Mahayana, Ph.D., Sp.M</span> (Validator Data Penyakit Mata dan Algoritma Sistem Pakar)</p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"2"}
            Title = {(<p className='fw-bold m-0'>Daftar Penyakit Mata pada Sistem Pakar</p>)}
            Content= {(
              <div>
                {/* Kelompok 1 */}
                <p>1. <span className='fw-bold text-blue-600 my-1'>Keratitis Pungtata Superfisialis</span></p>
                <p>2. <span className='fw-bold text-blue-600 my-1'>Endoftalmitis</span></p>
                <p>3. <span className='fw-bold text-blue-600 my-1'>Uveitis Akut</span></p>
                <p>4. <span className='fw-bold text-blue-600 my-1'>Thombosis Sinus Cavernosus</span></p>
                {/* Kelompok 2 */}
                <p>5. <span className='fw-bold text-blue-600 my-1'>Konjungtivitis</span></p>
                <p>6. <span className='fw-bold text-blue-600 my-1'>Hordeoulum</span></p>
                <p>7. <span className='fw-bold text-blue-600 my-1'>Episkleritis</span></p>
                {/* Kelompok x */}
                <p>8. <span className='fw-bold text-blue-600 my-1'>Perdarahan Subkonjungtiva</span></p>
                {/* Kelompok 3 */}
                <p>9. <span className='fw-bold text-blue-600 my-1'>Blefaritis</span></p>
                <p>10. <span className='fw-bold text-blue-600 my-1'>Konjungtivitis Alergi</span></p>
                {/* Kelompok 4 */}
                <p>11. <span className='fw-bold text-blue-600 my-1'>Abalsi Retina</span></p>
                <p>12. <span className='fw-bold text-blue-600 my-1'>Neuritis Optik</span></p>
                {/* Kelompok 5 */}
                <p>13. <span className='fw-bold text-blue-600 my-1'>Katarak</span></p>
                <p>14. <span className='fw-bold text-blue-600 my-1'>Retinopati Diabetika</span></p>
                <p>15. <span className='fw-bold text-blue-600 my-1'>Retinitis Pigmentosa</span></p>
                <p>16. <span className='fw-bold text-blue-600 my-1'>Degenerasi Macula</span></p>
              </div>
            )}
          />
          <AccordionBootstrap 
            eventKey={"4"}
            Title = {(<p className='fw-bold m-0'>Catatan</p>)}
            Content= {(
              <div>
                <p className='my-1'>
                  Hasil skrining dari sistem pakar ini <span className='fw-bold text-blue-600'>tidak bisa </span>
                  dijadikan sebagai keputusan akhir diagnosis penyakit mata anda.
                </p>
                <p className='my-1'>
                  Hasil skrining tersebut <span className='fw-bold text-blue-600'>bisa </span>
                  anda gunakan untuk konsultasi dengan dokter spesialis mata untuk diagnosis lebih lanjut.
                </p>
              </div>
            )}
          />
        </Accordion>
      </main>
    </div>
  )
};