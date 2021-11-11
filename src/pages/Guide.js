import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import Footer from './Footer'

export default function Guide () {
  return(
    <div className='poppins'>
      <div className=''>
        <Navbar bg='primary' expand='lg' fixed='top' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>EyeScreening</Navbar.Brand>
            <Nav calssName='me-auto'></Nav>
            <Nav className=''>
              <Nav.Link href='/chatbot'>Kembali</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className='container' style={{marginTop:'75px'}}>
        <div className='card p-3 mx-auto mb-3 shadow-lg border-5px rounded'>
          <h4 className='text-primary'>Panduan Pengguna</h4>
          <hr/>
          <p>Untuk melakukan skrining penyakit mata ketikkan : </p>
          <p>'mulai', 'tes', 'test' atau 'skrining'</p>
          <p>Atau bisa juga tekan tombol mulai yang ada di posisi bawah chat</p>
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
          <Link to={'./chatbot'} className='my-auto text-white'>
            Kembali
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
};