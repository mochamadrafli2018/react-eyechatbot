import { Link } from 'react-router-dom';

export default function DashboardContent() {
  return(
    <div>
      <p className='font-semibold text-black text-2xl text-center'>
        Sistem Pakar untuk Skrining Penyakit Mata
      </p>
      <div className='flex flex-row mt-3'>
      {[
        {
          maintext:'Dirancang dengan fitur :',
          text1: '27 Data Penyakit Mata dan 114 Data Basis Aturan Penyakit Mata',
          text2: 'Mesin Inferensi sebagai Pengambilan Keputusan Penyakit Mata',
          text3: 'Bot yang Mampu Memberikan Respon Cepat pada Pengguna Chatbot',
          text4: 'User Interface yang Didesain selayaknya Aplikasi Smartphone',
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
    </div>
  )
}