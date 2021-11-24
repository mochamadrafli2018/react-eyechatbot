import CardBootstrapTailwind from '../bootstrap-components/CardBootstrapTailwind';
import DashboardBar from '../bootstrap-components/DashboardBar';
import Footer from '../components/Footer'
import Image1 from '../img/Image-1.jpg';
import Image2 from '../img/Image-2.jpg';

export default function Dashboard ({ a }) {  
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
        className='container p-0 mx-auto mw-75 mb-1 border rounded' 
        style={{marginTop:'70px',width:'98%'}}
      >
        <p className='bg-primary quicksand px-1 py-2 m-0 
        text-center text-left text-light rounded-top'
        style={{fontSize:'20px'}}>
          EyeScreening
        </p>
        <div className='row mt-3' style={{margin:'3px'}}>
          <div className='col p-1'>
            <CardBootstrapTailwind
              Title={'Sistem Pakar Skrining Penyakit Mata berbasis Chatbot'}
              Image={Image1}
              MainText={'Web App ini dibangun dengan : '}
              Poin1={'Metode Forward Chaining'}
              Poin2={'Vue.js berbasis Vue CLI pada bagian Front End'}
              Poin3={'Framework User Interface Vuetify dan Bootstrap-Vue'}
              Poin4={'Hapi pada Mesin Inferensi untuk Pengambilan Keputusan Penyakit Mata'}
              URL={'/vue'}
              lastUpdated={currentDate}
              deploy={(<a href='https://www.netlify.com' target='_blank' rel='noreferrer'>Netlify</a>)}
            />
          </div>
          <div className='col p-1'>
            <CardBootstrapTailwind
              Title={'Sistem Pakar Skrining Penyakit Mata berbasis Form'}
              Image={Image2}
              MainText={'Web App ini dibangun dengan : '}
              Poin1={'Metode Forward Chaining'}
              Poin2={'React.js berbasis Functional Component pada bagian Front End'}
              Poin3={'Framework User Interface Material UI, Tailwind CSS dan Bootstrap-React'}
              Poin4={'React Hooks pada Mesin Inferensi untuk Pengambilan Keputusan Penyakit Mata'}
              URL={'/chatbot'}
              lastUpdated={currentDate}
              deploy={(<a href='https://www.heroku.com' target='_blank' rel='noreferrer'>Heroku</a>)}
            />
          </div>
        </div>
      </div>

      {/*Contact*/} 
      <div 
        className='container mx-auto p-2 mt-3 rounded text-center border hover:border-blue-400 hover:shadow-2xl' 
        style={{marginBottom:'45px',width:'98%'}}
      >
        <a href='https://www.github.com/mochamadrafli2018' 
          className='text-dark' target='_blank' rel='noreferrer'>
          <i className='bi-github mx-3 my-1' role='img' aria-label='GitHub'></i>
        </a>
        <a href='https://www.instagram.com/rafli.r.rmdhn' 
          className='text-dark' target='_blank' rel='noreferrer'>
          <i className='bi-instagram mx-3 my-1' role='img' aria-label='Instagram'></i>
        </a>
        <a href='https://www.linkedin.com/in/mochamad-rafli-ramadhan'
          className='text-dark' target='_blank' rel='noreferrer'>
          <i className='bi-linkedin mx-3 my-1' role='img' aria-label='Linkedin'></i>
        </a>
        <a href='http://wa.me/088227867544' 
          className='text-dark' target='_blank' rel='noreferrer'>
          <i class="bi bi-whatsapp mx-3 my-1" role='img' aria-label='Whatsup'></i>
        </a>
      </div>

      <Footer style={{'position':'relative'}}/>
    </div>
  );
}