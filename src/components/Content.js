import {Link} from 'react-router-dom';

export default function CardBootsrapTailwind({
    Image,
    MainText,
    Text1,
    Text2,
    Text3,
    Text4,
    URL,
  }) {
  return (
    <div className='bg-blue-100 border-2 border-blue-300 mx-auto mb-2 px-3 py-2 w-full'>
      {/*<div className='hover-zoom-out rounded-top'>
        <Card.Img variant='top' src={Image} className='hover-zoom w-100'/>
      </div>*/}
      <p class='font-semibold my-2 text-black text-center text-xl'>
        {MainText}
      </p>
      <div className='flex lg:flex-row md:flex-row sm:flex-col lg:justify center md:justify center'>
        <li class='flex flex-row mx-1 p-2 w-1/4'>
          <i className='bi bi-check-circle-fill text-primary'></i>
          <p class='ml-2'>{Text1}</p>
        </li>
        <li class='flex flex-row mx-1 p-2 w-1/4'>
          <i className='bi bi-check-circle-fill text-primary'></i>
          <p class='ml-2'>{Text2}</p>
        </li>
        <li class='flex flex-row mx-1 p-2 w-1/4'>
          <i className='bi bi-check-circle-fill text-primary'></i>
          <p class='ml-2'>{Text3}</p>
        </li>
        <li class='flex flex-row mx-1 p-2 w-1/4'>
          <i className='bi bi-check-circle-fill text-primary'></i>
          <p class='ml-2'>{Text4}</p>
        </li>
      </div>
      <Link to={URL} className='flex flex-row justify-center my-1 no-underline'>
        <button className='bg-blue-100 hover:bg-blue-800 border-2 border-blue-800 text-blue-800 hover:text-white px-3 py-2 rounded'>
          Klik untuk Coba
        </button>
      </Link>
    </div>
  )
}