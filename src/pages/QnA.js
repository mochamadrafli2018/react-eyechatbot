import * as React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.css';
import pdf1 from '../pdf/pdf-1.pdf';
import pdf2 from '../pdf/pdf-2.pdf';
import pdf3 from '../pdf/pdf-3.pdf';
import pdf4 from '../pdf/pdf-4.pdf';
import pdf5 from '../pdf/pdf-5.pdf';

export default function QnA() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='container' style={{marginTop:'70px',marginBottom:'50px'}}>
      <div className='card p-1 mb-3 mx-auto mw-75 border-5px shadow-hover rounded shadow-hover poppins'>
        <h4 className='text-center'>Literatur dan Referensi</h4>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='border'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            className='border-bottom'
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }} 
            className='fw-bold poppins text-primary'>
              Metode yang digunakan ?
            </Typography>
            <Typography sx={{ color: 'text.secondary' }} 
            className='poppins text-primary'>
              Metode Forward Chaining
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='poppins'>
              Forward Chaining merupakan metode yang digunakan untuk mengambil{' '}
              suatu keputusan dengan aturan IF-THEN. Untuk penjelasan lebih detail{' '}
              terdapat pada 2 sumber literatur di bawah ini.{' '}
              Forward Chaining bekerja dengan menerapkan aturan IF-THEN{' '}
              pada suatu basis atuaran yang ada pada basis pengetahuan.{' '}
              Misal IF/jika pengguna mengalami gejala 1, gejala 2 ,gejala 3{' '}
              dan gejala 4, THEN/bisa dipastikan pengguna mengalami penyakit X.{' '}
            </Typography>
            <div className='container p-0'>
              <iframe 
              title='Literatur Forward Chaining 1'
              src={pdf1}
              height='480' 
              className='mx-auto w-100'
              >Loading…
              </iframe>
            </div>
            <div className='container p-0'>
              <iframe 
              title='Literatur Forward Chaining 2'
              src={pdf2}
              height='480' 
              className='mx-auto w-100'
              >Loading…
              </iframe>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='border'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
            className='border-bottom'
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }} 
            className='fw-bold poppins text-primary'>
              Fungsi Chatbot ?
            </Typography>
            <Typography sx={{ color: 'text.secondary' }} 
            className='poppins text-primary'>
              Sistem Pakar Penyakit Mata
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='poppins'>
              Sistem Pakar secara umum merupakan sistem yang mampu{' '}
              mengambil suatu keputusan dengan meniru cara penalaran{' '}
              seorang pakar. Referensi yang dirujuk tentang sistem pakar{' '}
              dapat diamati pada literatur di bawah ini.
            </Typography>
            <div className='container p-0'>
              <iframe 
              title='Literatur Sistem Pakar 1'
              src={pdf3}
              height='480' 
              className='mx-auto w-100'
              >Loading…
              </iframe>
            </div>
            <div className='container p-0'>
              <iframe 
              title='Literatur Sistem Pakar 2'
              src={pdf4}
              height='480' 
              className='mx-auto w-100'
              >Loading…
              </iframe>
            </div>
            <div className='container p-0'>
              <iframe 
              title='Literatur Sistem Pakar 3'
              src={pdf5}
              height='480' 
              className='mx-auto w-100'
              >Loading…
              </iframe>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}