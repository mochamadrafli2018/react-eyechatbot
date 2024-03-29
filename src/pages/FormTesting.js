import ChatbotNavbar from '../components/ChatbotNavbar';
import Footer from '../components/Footer-2';

export default function FormTesting () {
  return (
    <div className='bg-sky-100 m-0 pt-16'>
      <ChatbotNavbar/>

      <main
        className='border-2 container p-1 poppins mb-2 rounded shadow-sm w-full'
        style={{maxWidth:'640px'}}
      >
        <iframe
          title='form UAT'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfMfIO_wa6TJKg5SrgadHuwDWlnNFDpk1P-PX1_vwHjumbLVg/viewform?embedded=true'
          height='5000' 
          frameborder='0'
          className='mx-auto w-full'
        >Loading…
        </iframe>
      </main>
      
      <Footer/>
    </div>
  )
}