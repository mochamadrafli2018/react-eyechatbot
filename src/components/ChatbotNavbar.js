import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{position:'fixed',top:'0px',}}
      className='bg-sky-50 border-bottom flex flex-row poppins py-1 shadow-sm text-blue-500 w-full z-10'
    >
      <div className='flex flex-row ml-2 mr-auto space-x-2 text-md'>
        <Link className='my-auto p-2 no-underline' to='/chatbot'>
          <i className="bi bi-robot"></i> Bot
        </Link>
        <Link className='my-auto p-2 no-underline' to='/guide'>
          <i className='bi bi-journals'></i> Panduan
        </Link>
        <Link className='my-auto p-2 no-underline' to='/form'>
          <i className='bi bi-ui-checks'></i> UAT
        </Link>
        <Link className='my-auto p-2 no-underline' to='/login'>
          Login
        </Link>
      </div>
      <div className='flex flex-row ml-auto mr-2 space-x-3 text-lg'>
        <Link to='/' className='my-auto p-2 no-underline'>
          <i className='bi bi-box-arrow-left'></i>
        </Link>
      </div>
    </nav>
  )
}