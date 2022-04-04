import ChatbotNavbar from '../components/ChatbotNavbar';
import InferenceMachine from '../components/InferenceMachine';

export default function ChatbotDashboard() {
  return (
    <div className='bg-sky-100 h-screen m-0 pt-16'>
      <ChatbotNavbar/>

      <main className='border-2 border-blue-400 max-w-3xl mx-auto overflow-hidden rounded shadow-lg w-full'>
        <InferenceMachine/>
      </main>
    </div>
  )
}
