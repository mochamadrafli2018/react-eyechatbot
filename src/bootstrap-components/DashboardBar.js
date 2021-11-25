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
              <OverlayItem
                text={'Sistem Pakar?'}
                explanation={(
                  <div>
                    <p>sistem pakar, menurut <a href='https://kbbi.kemdikbud.go.id/entri/sistem%20pakar' className='text-primary'>KBBI</a> adalah :</p>
                    <p>Program komputer yang menggunakan informasi, heuristik, dan simpulan yang tersedia untuk menyarankan solusi terhadap masalah tertentu.</p>
                  </div>
                )}
              />
              <OverlayItem
                text={'Skrining?'}
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