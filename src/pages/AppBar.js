import * as React from 'react'
import OverlayItem from './Overlay'
import {Container,Nav,Navbar} from 'react-bootstrap'

export default function AppBar({logoutHandler}) {
  return (
    <div className='poppins'>
      <div className='shadow-sm'>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand>EyeScreening</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <OverlayItem 
                text={'Sistem Pakar ?'}
                explanation={`
                  Sistem pakar merupakan sistem yang bekerja dengan menirukan proses pemikiran seorang pakar.
                  Pada sistem pakar ini di implementasikan metode forward chaining untuk proses pengambilan keputusan.
                `} 
              />
              <OverlayItem
                text={'Daftar Penyakit ?'}
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
            <Nav>
              {/*<Nav.Link onClick={logoutHandler} className=''
              ><i className="bi bi-box-arrow-left"></i> KELUAR</Nav.Link>*/}
              <Nav.Link>
                Kontak Perancang 
                <a href='https://www.github.com/mochamadrafli2018' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-github mx-2' role='img' aria-label='GitHub'></i>
                </a>
                <a href='https://www.instagram.com/rafli.r.rmdhn' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-instagram mx-2' role='img' aria-label='Instagram'></i>
                </a>
                <a href='https://www.linkedin.com/in/mochamad-rafli-ramadhan' className='text-white' target='_blank' rel='noreferrer'>
                  <i className='bi-linkedin mx-2' role='img' aria-label='Linkedin'></i>
                </a>
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}