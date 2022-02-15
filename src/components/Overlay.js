import {Nav,Popover,OverlayTrigger} from 'react-bootstrap';

export default function OverlayItem({explanation, style, text}) {
  const popover = (
    <Popover id="popover-basic" className='poppins shadow-lg'>
      <Popover.Header as="h3" className='bg-primary text-white'>{text}</Popover.Header>
      <Popover.Body className='text-dark'>{explanation}</Popover.Body>
    </Popover>
  );      
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 100 }}
      overlay={popover}
    >
      <Nav.Link className>
        {text}
      </Nav.Link>
    </OverlayTrigger>
  );
}