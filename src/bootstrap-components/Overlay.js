import {Nav,Popover,OverlayTrigger} from 'react-bootstrap';

export default function OverlayItem({explanation, text}) {
  const popover = (
    <Popover id="popover-basic" className='poppins shadow-lg'>
      <Popover.Header as="h3" className='text-white bg-primary'>{text}</Popover.Header>
      <Popover.Body>
        {explanation}
      </Popover.Body>
    </Popover>
  );      
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={popover}
    >
      <Nav.Link variant="success">
        <i class="bi bi-info-circle"></i> {text}
      </Nav.Link>
    </OverlayTrigger>
  );
}