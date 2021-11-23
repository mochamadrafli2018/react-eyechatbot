import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CardBootsrapTailwind({
    Title,Image,MainText,Poin1,Poin2,Poin3,Poin4,URL
  }) {
  return (
    <Card
      style={{minWidth:'200px',maxWidth:'400px'}} 
      className='mx-auto mb-2 w-100 relative rounded
      hover:border-blue-400 hover:shadow-2xl margin-up-hover'
    >
      <Card.Img variant='top' src={Image} className='w-100'/>
      <Card.Body id='card-body'>
        <Card.Title className='text-primary'>{Title}</Card.Title>
        <Card.Text>
          <p class='mb-2'>{MainText}</p>
          {/*Tailwind style*/}
          <li class='flex items-start'>
            <span class="h-6 flex items-center sm:h-7 text-primary">
              <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            <p class='ml-2'>{Poin1}</p>
          </li>
          <li class='flex items-start'>
            <span class="h-6 flex items-center sm:h-7 text-primary">
              <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            <p class='ml-2'>{Poin2}</p>
          </li>
          <li class='flex items-start'>
            <span class="h-6 flex items-center sm:h-7 text-primary">
              <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            <p class='ml-2'>{Poin3}</p>
          </li>
          <li class='flex items-start'>
            <span class="h-6 flex items-center sm:h-7 text-primary">
              <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </span>
            <p class='ml-2'>{Poin4}</p>
          </li>
        </Card.Text>
        <Link to={URL} id='link' className='btn btn-outline-primary'
        >Klik untuk Coba</Link>
      </Card.Body>
    </Card>
  )
}