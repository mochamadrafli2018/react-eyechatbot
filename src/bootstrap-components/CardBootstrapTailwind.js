import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function CardBootsrapTailwind({
    Title,Image,MainText,Poin1,Poin2,Poin3,Poin4,URL,lastUpdated,deploy
  }) {
  return (
    <Card 
      className='mx-auto mb-2 rounded border margin-up-hover hover:border-blue-400 hover:shadow-2xl'
      style={{minWidth:'180px',maxWidth:'400px'}}
    >
      <Card.Img variant='top' src={Image} className='w-100'/>
      <Card.Body id='card-body'>
        <Card.Title className='my-1 text-primary'>{Title}</Card.Title>
        <Card.Text>
          <p class='my-1'>{MainText}</p>
          {/*Tailwind style*/}
          <li class='flex items-start my-1'>
            <i className='bi bi-check-circle-fill text-primary'></i>
            <p class='ml-2'>{Poin1}</p>
          </li>
          <li class='flex items-start my-1'>
            <i className='bi bi-check-circle-fill text-primary'></i>
            <p class='ml-2'>{Poin2}</p>
          </li>
          <li class='flex items-start my-1'>
            <i className='bi bi-check-circle-fill text-primary'></i>
            <p class='ml-2'>{Poin3}</p>
          </li>
          <li class='flex items-start my-1'>
            <i className='bi bi-check-circle-fill text-primary'></i>
            <p class='ml-2'>{Poin4}</p>
          </li>
        </Card.Text>
        {/*Link animate-bounce*/}
        <Link to={URL}
        className='btn btn-outline-primary my-1'
        >Klik untuk Coba
        </Link>
        <p className='my-1' style={{fontSize:'13px'}}>
          <i class="bi bi-clock-history"></i> Last Updated : {lastUpdated}
        </p>
        <p className='my-1' style={{fontSize:'13px'}}>
          
        </p>
        <p className='my-1 fw-bold' style={{fontSize:'13px'}}>
          Under <a href="https://mit-license.org/" class="text-primary"
          target='_blank' rel='noreferrer'> MIT License</a>{', '}
          <i class="bi bi-server"></i> Deployed on {deploy}
        </p>
      </Card.Body>
    </Card>
  )
}