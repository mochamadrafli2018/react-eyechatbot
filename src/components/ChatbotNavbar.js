import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export default function Navbar() {
  const navigate = useNavigate()
  const [tokenEmpty, setTokenEmpty] = useState(true);
  useEffect(() => {
    //get token from local storage when browser reload
    const token = localStorage.getItem('token');
    if(!token) { 
      setTokenEmpty(true);
    } else {
      setTokenEmpty(false);
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const logoutHandler = () => {
    setLoading(true);
    // remove token, user_id and screening_result from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('screening_result');
    navigate('/login');
  };

  return (
    <nav style={{position:'fixed',top:'0px',}}
      className='bg-sky-50 border-bottom flex flex-row poppins py-1 shadow-sm text-blue-700 w-full z-10'
    >
      {tokenEmpty === true && (
        <>
          <div className='flex flex-row ml-2 mr-auto space-x-0 text-md'>
            <Link className='my-auto p-2 no-underline' to='/chatbot'>
              <i className="bi bi-robot"></i> Bot
            </Link>
            <Link className='my-auto p-2 no-underline' to='/guide'>
              <i className='bi bi-journals'></i> Panduan
            </Link>
            <Link className='my-auto p-2 no-underline' to='/form'>
              <i className='bi bi-ui-checks'></i> UAT
            </Link>
          </div>
          <div className='flex flex-row ml-auto mr-2'>
            <Link className='border-2 border-blue-700 hover:bg-blue-700 hover:text-white my-auto px-2 py-1 rounded text-md hover:text-white no-underline' to='/login'>
              Login
            </Link>
          </div>
        </>
      )}
      {tokenEmpty === false && (
        <>
          <div className='flex flex-row ml-2 mr-auto space-x-0 text-md'>
            <Link className='my-auto p-2 no-underline' to='/chatbot'>
              <i className="bi bi-robot"></i> Bot
            </Link>
            <Link className='my-auto p-2 no-underline' to='/guide'>
              <i className='bi bi-journals'></i> Panduan
            </Link>
            <Link className='my-auto p-2 no-underline' to='/form'>
              <i className='bi bi-ui-checks'></i> UAT
            </Link>
          </div>
          <div className='flex flex-row ml-auto mr-2'>
            {loading === false && (
              <button 
                className="bg-red-200 hover:bg-red-100 focus:bg-red-300 no-underline my-0 lg:px-3 md:px-3 px-2 py-2 rounded-lg"
                onClick={logoutHandler}
              >
                Keluar
              </button>
            )}
            {loading === true && (
              <button 
                className="font-bold bg-red-200 hover:bg-red-100 focus:bg-red-300 no-underline my-0 lg:px-3 md:px-3 px-2 py-2 rounded-lg"
                onClick={logoutHandler}
              >
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  variant="danger"
                /> Keluar
              </button>
            )}
          </div>
        </>
      )}
    </nav>
  )
}