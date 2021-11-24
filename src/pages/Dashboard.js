import React, { useState, useEffect } from 'react';
import CardBootstrapTailwind from '../bootstrap-components/CardBootstrapTailwind';
import DashboardBar from '../bootstrap-components/DashboardBar';
import Footer from '../components/Footer'
import Image1 from '../img/Image-1.jpg';
import Image2 from '../img/Image-2.jpg';

export default function Dashboard () {
  
  const lastUpdated = new Date(document.lastModified);
  const dayName = lastUpdated.getDay()
  const weekDaysArr = ['Sunday','Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday']
  const currentDate = weekDaysArr[dayName] + ', ' + lastUpdated.getDate() + '/' 
  + (lastUpdated.getMonth() + 1) + '/' + lastUpdated.getFullYear() + ', ' 
  + lastUpdated.getHours() + ':' + lastUpdated.getMinutes() + ':' 
  + lastUpdated.getSeconds();
  
  return (
    <div className='poppins'>
      {/*AppBar*/}
      <DashboardBar/>
      {/*Main Menu*/}
      <div
        className='container p-0 mx-auto mw-75 border rounded' 
        style={{marginTop:'70px',marginBottom:'50px',width:'98%'}}
      >
        <p className='bg-primary quicksand px-1 py-2 m-0 
        text-center text-left text-light rounded-top'
        style={{fontSize:'20px'}}>
          EyeScreening
        </p>
        <hr className='mt-0 mb-2'/>
        <div className='row' style={{margin:'3px'}}>
          <div className='col p-1'>
            <CardBootstrapTailwind
              Title={'Sistem Pakar Skrining Penyakit Mata berbasis Chatbot'}
              Image={Image1}
              MainText={'Web App ini di program dengan : '}
              Poin1={'Vue.js berbasis Vue CLI pada bagian Front End'}
              Poin2={'Framework User Interface Vue : Vuetify dan Bootstrap-Vue'}
              Poin3={'Hapi pada Mesin Inferensi untuk Pengambilan Keputusan Penyakit Mata'}
              Poin4={'Web App ini juga telah di deploy di Netlify'}
              URL={'/vue'}
              lastUpdated={currentDate}
            />
          </div>
          <div className='col p-1'>
            <CardBootstrapTailwind
              Title={'Sistem Pakar Skrining Penyakit Mata berbasis Form'}
              Image={Image2}
              MainText={'We App ini di program dengan : '}
              Poin1={'React.js berbasis Functional Component pada bagian Front End'}
              Poin2={'Framework User Interface React : Material UI, Tailwind dan Bootstrap-React'}
              Poin3={'React Hooks pada Mesin Inferensi untuk Pengambilan Keputusan Penyakit Mata'}
              Poin4={'Web App ini juga telah di deploy di Heroku'}
              URL={'/chatbot'}
              lastUpdated={currentDate}
            />
          </div>
        </div>
      </div>
      <Footer style={{'position':'relative'}}/>
    </div>
  );
}