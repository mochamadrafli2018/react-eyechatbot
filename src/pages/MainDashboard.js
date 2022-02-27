import DashboardContent from '../components/DashboardContent';
import DashboardContent2 from '../components/DashboardContent2';
import DashboardNavbar from '../components/DashboardNavbar';
import Footer from '../components/Footer';

export default function Dashboard () { 
  return (
    <div className='bg-sky-100 poppins pt-16'>
      <DashboardNavbar/>
      
      <main className='mx-auto pb-0 px-0 rounded max-w-3xl' style={{width:'99%'}}>
        <DashboardContent/>
        <DashboardContent2/>
        <Footer/>
      </main>
    </div>
  );
}
