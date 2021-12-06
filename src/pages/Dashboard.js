import CardBootstrapTailwind from '../bootstrap-components/CardBootstrapTailwind';
import DashboardBar from '../bootstrap-components/DashboardBar';
import Footer from '../components/Footer'
import Image1 from '../img/eye-image-1.jpg';
import Image2 from '../img/eye-image-2.jpg';
import OverlayItem from '../bootstrap-components/Overlay';

export default function Dashboard () {  
  const lastUpdated = new Date(document.lastModified);
  const dayName = lastUpdated.getDay()
  const weekDaysArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
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
      <DashboardBar/>
      {/*Main Menu*/}
      <div
        className='container mx-auto mb-1 p-0 border rounded' 
        style={{marginTop:'70px',width:'98%',maxWidth:'1000px'}}
      >
        <p className='bg-primary quicksand px-1 py-0 m-0 text-center rounded-top'
        style={{fontSize:'20px'}}>
          <span><OverlayItem
            text={(<span className='text-light'>EyeScreening</span>)}
            explanation={(
              <span>Portofolio web app sistem pakar yang diprogram untuk mampu melakukan skrining penyakit mata pada manusia.</span>
            )}
          /></span>
        </p>
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
      {/*Contact*/} 
      <div 
        className='container mx-auto mt-3 p-2 bg-primary rounded text-center border shadow-hover-primary' 
        style={{marginBottom:'45px',width:'98%',maxWidth:'1000px'}}
      >
        <a href='https://www.github.com/mochamadrafli2018' style={{fontSize:'20px'}}
          className='text-light' target='_blank' rel='noreferrer'>
          <i className='bi-github fa-lg mx-3 my-1' role='img' aria-label='GitHub'></i>
        </a>
        <a href='https://www.instagram.com/rafli.r.rmdhn' style={{fontSize:'20px'}}
          className='text-light' target='_blank' rel='noreferrer'>
          <i className='bi-instagram mx-3 my-1' role='img' aria-label='Instagram'></i>
        </a>
        <a href='https://www.linkedin.com/in/mochamad-rafli-ramadhan' style={{fontSize:'20px'}}
          className='text-light' target='_blank' rel='noreferrer'>
          <i className='bi-linkedin mx-3 my-1' role='img' aria-label='Linkedin'></i>
        </a>
        <a href='http://wa.me/088227867544' style={{fontSize:'20px'}}
          className='text-light' target='_blank' rel='noreferrer'>
          <i class='bi bi-whatsapp mx-3 my-1' role='img' aria-label='Whatsup'></i>
        </a>
      </div>
      {/*Footer*/}
      <Footer styleFooter={{position:'fixed',bottom:'0'}}/>
    </div>
  );
}
