import {Nav,Popover,OverlayTrigger} from 'react-bootstrap';

export default function OverlayItem({explanation, text}) {
  const popover = (
    <Popover id="popover-basic" className='poppins'>
      <Popover.Header as="h3">{text}</Popover.Header>
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
      <Nav.Link variant="success">{text}</Nav.Link>
    </OverlayTrigger>
  );
}