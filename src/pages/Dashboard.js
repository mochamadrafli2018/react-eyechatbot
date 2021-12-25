import React, {useState} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
// image
import Image1 from '../img/eye-image-1.jpg';
import Image2 from '../img/eye-image-2.jpg';
// component 
import CardBootstrapTailwind from '../bootstrap-components/CardBootstrapTailwind';
import Content from '../tailwindcss-components/Content';
import Footer from '../tailwindcss-components/Footer';
import Login from './Login';
import OverlayItem from '../bootstrap-components/Overlay';
import Register from './Register';
// CSS
import '../App.css';
import '../index.css';

function AppBar() {
  return (
    <div className='poppins'>
      <div
        style={{position:'fixed',top:'0','z-index':'1'}}  
        className='navbar bg-light py-1 w-100 border-bottom shadow-sm'
      >
        <div className='container'>
          <Navbar.Brand></Navbar.Brand>
          <Nav className='me-auto'>
            <OverlayItem
              text={(
                <span>
                  <i class="bi bi-info-square"></i> Sistem Pakar?
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
                <span>
                  <i class="bi bi-info-square"></i> Skrining
                </span>
              )}
              explanation={(
              <div>
                <p>skri.ning, menurut <a href='https://kbbi.kemdikbud.go.id/entri/skrining' className='text-primary'>KBBI</a> adalah :</p>
                <p>1. Identifikasi dini penyakit berdasarkan serangkaian tes dan pemeriksaan.</p>
                <p>2. Evaluasi yang dilakukan sebagai bagian dari survei atau tes untuk melihat kesesuaian seseorang pada pekerjaan tertentu.</p>
                <p>3. Penilaian mental dan ideologi seseorang.</p>
              </div>
            )}/>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard () { 
  const lastUpdated = new Date(document.lastModified);
  const dayName = lastUpdated.getDay();
  const weekDaysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentDate = weekDaysArr[dayName] + ', ' 
      + lastUpdated.getDate()        + '/' 
      + (lastUpdated.getMonth() + 1) + '/' 
      + lastUpdated.getFullYear()    + ', ' 
      + lastUpdated.getHours()       + ':' 
      + lastUpdated.getMinutes()     + ':' 
      + lastUpdated.getSeconds();
  return (
    <div className='poppins'>
      {/*AppBar*/}
      <AppBar/>
      {/*Main Menu*/}
      <div
        className='container mx-auto mb-1 p-0 border rounded' 
        style={{marginTop:'70px',width:'98%',maxWidth:'80%'}}
      >
        <Nav 
          className='bg-primary me-auto quicksand px-1 py-1 m-0 text-light rounded-top'
        >
          <OverlayItem
            text={(
              <span className='text-light'> 
                <i class="bi bi-info-square"></i> EyeScreening
              </span>
            )}
            explanation={(
              <span>
                Portofolio web app sistem pakar yang diprogram untuk mampu melakukan skrining penyakit mata pada manusia.
              </span>
            )}
          />
        </Nav>
        <div className='row mt-3' style={{margin:'3px'}}>
          <div className='col p-1'>
            <CardBootstrapTailwind
              Title={<p>Sistem Pakar Skrining Penyakit Mata berbasis <i>Form</i></p>}
              Image={Image1}
              MainText={'Web App ini dirancang dengan fitur : '}
              Poin1={'Skrining Penyakit Mata dengan Metode Forward Chaining yang Diprogram 26 Basis Aturan dari 26 Data Penyakit Mata dan 54 Gejala Penyakit Mata'}
              Poin2={'Mesin Inferensi yang dibangun dengan Hapi.js sebagai Pengambilan Keputusan Penyakit Mata'}
              Poin3={'Checklist Gejala Penyakit Mata berbasis Form yang dirancang dengan Vue.js'}
              Poin4={'User Interface yang didesain dengan Vuetify dan Bootstrap-Vue'}
              URL={'/vue'}
              lastUpdated={currentDate}
              deploy={(
              <a href='https://www.netlify.com' target='_blank' rel='noreferrer' className='text-primary'>
                Netlify
              </a>
              )}
            />
          </div>
          <div className='col p-1'> 
            <CardBootstrapTailwind
              Title={<p>Sistem Pakar Skrining Penyakit Mata berbasis <i>Chatbot</i></p>}
              Image={Image2}
              MainText={'Web App ini dirancang dengan fitur : '}
              Poin1={'Skrining Penyakit Mata dengan Metode Forward Chaining yang memiliki 114 Basis Aturan dari 27 Data Penyakit Mata dan 58 Gejala Penyakit Mata'}
              Poin2={'Mesin Inferensi yang dibangun dengan React Hooks sebagai Pengambilan Keputusan Penyakit Mata'}
              Poin3={'Chatbot User Interface yang diprogram dengan Functional Component React.js'}
              Poin4={'User Interface yang didesain dengan Bootstrap-React dan Tailwind CSS'}
              URL={'/chatbot'}
              lastUpdated={currentDate}
              deploy={(
              <a href='https://www.heroku.com' target='_blank' rel='noreferrer' className='text-primary'>
                Heroku
              </a>
              )}
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <Content />
      {/* Contact */} 
      {/*Footer*/}
      <Footer styleFooter={{position:'fixed',bottom:'0'}}/>
    </div>
  );
}
