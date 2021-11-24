import * as React from 'react';
import OverlayItem from './Overlay';
import {Nav,Navbar} from 'react-bootstrap';

export default function AppBar() {
  return (
    <div className='poppins'>
      <div
        style={{position:'fixed',top:'0','z-index':'1'}}  
        className='navbar bg-light py-1 w-100 border-bottom shadow-sm text-primary'
      >
        <div className='container'>
          <Navbar.Brand></Navbar.Brand>
          <Nav className='me-auto'>
              <Nav.Link className='border-primary-hover'>
                <i class="bi bi-menu-app"></i> Menu
              </Nav.Link>
              <OverlayItem
                text={'Sistem Pakar?'}
                explanation={`
                  Sistem pakar merupakan sistem yang bekerja 
                  dengan menirukan proses pemikiran seorang pakar.
                  Pada sistem pakar ini di implementasikan 
                  metode forward chaining untuk proses pengambilan keputusan.
                `}
              />
              <OverlayItem
                text={'Penyakit?'}
                explanation={`
                Ada 26 penyakit mata yang ada pada database sistem diantaranya : \n
                1.) Ulkus Kornea
                2.) Keratokonus
                3.) Kalazion
                4.) Blefaritis
                5.) Hordeolum (Stye)
                6.) Konjungtivitis
                7.) Trakoma
                8.) Abalso Retina
                9.) Retinopati Diabetikum<br
                10.) Glaukoma
                11.) Katarak
                12.) Uveitis
                13.) Selulitis Orbitalis
                14.) Eksoftalmus
                15.) Keratitis Pungtata Superfisialis
                16.) Alergi Mata Merah
                17.) Endoftalmitis
                18.) Trombosis Sinus Kavernosus
                19.) Optic Neuritis
                20.) Dakrioritis
                21.) Degenerasi Makula
                22.) Episkleritis
                23.) Infeksi Herpes Simpleks Kornea
                24.) Infeksi Herpes Zoster Kornea
                25.) Keratitis Ulserativa Perifer
                28.) Oftalmia Neonatorum
              `}/>
          </Nav>
        </div>
      </div>
    </div>
  );
}