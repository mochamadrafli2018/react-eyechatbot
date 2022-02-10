import React from 'react';
import Image2 from '../img/eye-image-2.jpg';
import Content from '../components/Content';
import Footer from '../components/Footer';
import OverlayItem from '../components/Overlay';
import '../App.css';
import '../index.css';

export default function Dashboard () { 
  return (
    <div className='bg-slate-100 poppins'>
      {/*AppBar*/}
      <div
        style={{position:'fixed',top:'0','z-index':'1'}}  
        className='bg-blue-500 flex flex-row justify-start py-1 space-x-3 shadow-sm w-full'
      >
        <OverlayItem
          text={(
            <span className='text-white'>
              <i className="bi bi-info-square"></i> Sistem Pakar?
            </span>
          )}
          explanation={(
            <div>
              <p>sistem pakar, menurut <a href='https://kbbi.kemdikbud.go.id/entri/sistem%20pakar' className='text-primary'>KBBI</a> adalah :</p>
              <p>Program komputer yang menggunakan informasi, heuristik, dan simpulan yang tersedia untuk menyarankan solusi terhadap masalah tertentu.</p>
            </div>
          )}
        />
        <OverlayItem
          text={(
            <span className='text-white'>
              <i className="bi bi-info-square"></i> Skrining
            </span>
          )}
          explanation={(
            <div>
              <p>skri.ning, menurut <a href='https://kbbi.kemdikbud.go.id/entri/skrining' className='text-primary'>KBBI</a> adalah :</p>
              <p>1. Identifikasi dini penyakit berdasarkan serangkaian tes dan pemeriksaan.</p>
              <p>2. Evaluasi yang dilakukan sebagai bagian dari survei atau tes untuk melihat kesesuaian seseorang pada pekerjaan tertentu.</p>
              <p>3. Penilaian mental dan ideologi seseorang.</p>
            </div>
          )}
        />
      </div>
      {/*Main Menu*/}
      <div
        className='mx-auto pb-0 px-0 rounded max-w-lg' 
        style={{paddingTop:'70px',width:'98%',maxWidth:'80%'}}
      >
        <p className='font-semibold text-black text-2xl text-center'>
          Sistem Pakar untuk Skrining Penyakit Mata
        </p>
        <div className='flex flex-row mt-3'>
          <Content
            Image={Image2}
            MainText={'Dirancang dengan fitur'}
            Text1={'Implementasi Metode Forward Chaining dengan 114 Basis Aturan Penyakit Mata'}
            Text2={'Mesin Inferensi yang dibangun dengan React Hooks sebagai Pengambilan Keputusan Penyakit Mata'}
            Text3={'Chatbot User Interface yang diprogram dengan Functional Component React.js'}
            Text4={'User Interface yang didesain dengan Bootstrap-React dan Tailwind CSS'}
            URL={'/chatbot'}
          />
        </div>
  
        <div class='bg-blue-100 border-2 border-blue-300 h-full w-full border-box p-3 mx-auto'>
          <div class='flex flex-col text-center w-full mb-3'>
            <h1 class='text-xl font-semibold title-font text-black'>
              3 Keuntungan Menggunakan Sistem Skrining
            </h1>
          </div>
            
          <div class='flex lg:flex-row flex-col'>
            <div class='p-2 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
              <div class='flex rounded-lg h-full flex-col'>
                <div class='items-center text-center'>
                  <div class='inline-flex items-center justify-center rounded-full mb-2'>
                    <img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-4.png' alt='' />
                  </div>
                </div>
                <div class='flex-grow'>
                  <h4 class='font-bold text-center text-lg mb-2 text-medium-black'>
                    Fitur Chat
                  </h4>
                  <p class='leading-relaxed text-base text-center tracking-wide text-gray'>
                    Memberikan kemudahan untuk melakukan skrining penyakit mata
                  </p>
                </div>
              </div>
            </div>
                
            <div class='p-2 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
              <div class='flex rounded-lg h-full flex-col'>
                <div class='items-center text-center'>
                  <div class='inline-flex items-center justify-center rounded-full mb-2'>
                    <img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-3.png' alt='' />
                  </div>
                </div>
                <div class='flex-grow'>
                  <h4 class='font-bold text-center text-lg mb-2 text-medium-black'>
                    Kecerdasan Buatan
                  </h4>
                  <p class='leading-relaxed text-base text-center tracking-wide text-gray'>
                    Hasil skrining ditentukan dengan metode forward chaining
                  </p>
                </div>
              </div>
            </div>
          
            <div class='p-2 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
              <div class='flex rounded-lg h-full flex-col'>
                <div class='items-center text-center'>
                  <div class='inline-flex items-center justify-center rounded-full mb-2'>
                    <img src='http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-2.png' alt='' />
                  </div>
                </div>
                <div class='flex-grow'>
                  <h4 class='font-bold text-center text-lg mb-2 text-medium-black'>
                    Multi platform
                  </h4>
                  <p class='leading-relaxed text-base text-center tracking-wide text-gray'>
                    Kemudahan akses di semua platform browser dari perangkat apapun.
                  </p>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <Footer/>
      </div>
    </div>
  );
}
