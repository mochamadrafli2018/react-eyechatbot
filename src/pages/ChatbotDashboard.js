import ChatbotNavbar from '../components/ChatbotNavbar';
import InferenceMachine from '../components/InferenceMachine';

export default function ChatbotDashboard() {
  return (
    <div className='bg-slate-100 h-screen' style={{paddingTop:'60px'}}>
      <ChatbotNavbar/>

      <main className='mx-auto w-full max-w-3xl overflow-hidden border-2 rounded hover:border-blue-400 shadow-lg'>
        <InferenceMachine/>
      </main>
    </div>
  )
}
