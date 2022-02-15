import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import OverlayItem from '../components/Overlay';

export default function Dashboard () { 
  return (
    <div className='bg-sky-100 poppins'>
      {/*AppBar*/}
      <div
        style={{position:'fixed',top:'0','z-index':'1'}}  
        className='bg-blue-600 flex flex-row justify-center lg:justify-start py-1 space-x-1 md:space-x-2 lg:space-x-3 shadow-sm w-full'
      >
        <OverlayItem
          text={(
            <span className='text-white'>
              <i className="bi bi-info-square"></i> Sistem Pakar?
            </span>
          )}
          explanation={(
            <div>
              <p>sistem pakar, menurut <a href='https://kbbi.kemdikbud.go.id/entri/sistem%20pakar' className='text-blue-600'>KBBI</a> adalah :</p>
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
              <p>skri.ning, menurut <a href='https://kbbi.kemdikbud.go.id/entri/skrining' className='text-blue-600'>KBBI</a> adalah :</p>
              <p>1. Identifikasi dini penyakit berdasarkan serangkaian tes dan pemeriksaan.</p>
              <p>2. Evaluasi yang dilakukan sebagai bagian dari survei atau tes untuk melihat kesesuaian seseorang pada pekerjaan tertentu.</p>
              <p>3. Penilaian mental dan ideologi seseorang.</p>
            </div>
          )}
        />
      </div>
      {/*Main Menu*/}
      <div
        className='mx-auto pb-0 px-0 rounded max-w-3xl'
        style={{paddingTop:'70px',width:'99%'}}
      >
        <p className='font-semibold text-black text-2xl text-center'>
          Sistem Pakar untuk Skrining Penyakit Mata
        </p>
        <div className='flex flex-row mt-3'>
        {[
          {
            maintext:'Dirancang dengan fitur',
            text1: 'Implementasi Metode Forward Chaining dengan 114 Basis Aturan Penyakit Mata',
            text2: 'Mesin Inferensi yang dibangun dengan React Hooks sebagai Pengambilan Keputusan Penyakit Mata',
            text3: 'Chatbot User Interface yang diprogram dengan Functional Component React.js',
            text4: 'User Interface yang didesain dengan Bootstrap-React dan Tailwind CSS',
            URL: '/chatbot'
          }
        ].map((item, index) => (
          <div key={index} className='bg-blue-100 border-2 border-blue-300 mx-auto mb-2 p-2 w-full'>
            {/*<div className='hover-zoom-out rounded-top'>
              <Card.Img variant='top' src={Image} className='hover-zoom w-100'/>
            </div>*/}
            <p class='font-semibold my-2 text-black text-center text-xl'>
              { item.maintext }
            </p>
            <div className='flex lg:flex-row md:flex-row flex-col lg:justify-center md::justify-center'>
              <li class='flex flex-row mx-1 p-2 lg:w-1/4 w-full'>
                <i className='bi bi-check-circle-fill text-blue-600'></i>
                <p class='ml-2'>{ item.text1 }</p>
              </li>
              <li class='flex flex-row mx-1 p-2 lg:w-1/4 w-full'>
                <i className='bi bi-check-circle-fill text-blue-600'></i>
                <p class='ml-2'>{ item.text2 }</p>
              </li>
              <li class='flex flex-row mx-1 p-2 lg:w-1/4 w-full'>
                <i className='bi bi-check-circle-fill text-blue-600'></i>
                <p class='ml-2'>{ item.text3 }</p>
              </li>
              <li class='flex flex-row mx-1 p-2 lg:w-1/4 w-full'>
                <i className='bi bi-check-circle-fill text-blue-600'></i>
                <p class='ml-2'>{ item.text4 }</p>
              </li>
            </div>
            <Link to={ item.URL } className='flex flex-row justify-center my-1 no-underline'>
              <button className='bg-blue-100 hover:bg-blue-600 border-2 border-blue-600 text-blue-600 hover:text-white px-3 py-2 rounded'>
                Klik untuk Coba
              </button>
            </Link>
          </div>
        ))}
        </div>
  
        <div class='bg-blue-100 border-2 border-blue-300 h-full w-full border-box p-3 mx-auto'>
          <p class='flex flex-col text-center w-full my-2 text-xl font-semibold title-font text-black'>
            3 Keuntungan Menggunakan Sistem Skrining
          </p>
          <div class='flex lg:flex-row flex-col'>
          {[
            {
              icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-4.png',
              text: `Memberikan kemudahan untuk melakukan skrining penyakit mata.`,
              title:`Fitur Chat`,
            },
            {
              icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-3.png',
              text:`Hasil skrining ditentukan dengan metode forward chaining.`,
              title:`Kecerdasan Buatan`,
            },
            {
              icon:'http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-2.png',
              text:`Kemudahan akses di semua platform browser dari perangkat apapun.`,
              title:`Multi platform`,              
            }
          ].map((item, index) => (
            <div key={index} class='p-2 lg:w-1/3 md:w-1/3 sm:w-4/6 mx-auto'>
              <div class='flex rounded-lg h-full flex-col'>
                <div class='items-center text-center'>
                  <div class='inline-flex items-center justify-center rounded-full mb-2'>
                    <img src={ item.icon } alt='' />
                  </div>
                </div>
                <div class='flex-grow'>
                  <h4 class='font-bold text-center text-lg mb-2 text-medium-black'>
                    { item.title }
                  </h4>
                  <p class='leading-relaxed text-base text-center tracking-wide text-gray'>
                    { item.text }
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>  
        </div>

        <Footer/>
      </div>
    </div>
  );
}
