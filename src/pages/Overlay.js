import {Nav,OverlayTrigger,Tooltip} from 'react-bootstrap';

export default function OverlayButton({explanation, text}) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className='poppins'>
      {text}
    </Tooltip>
  );
      
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Nav.Link variant="success">{explanation}</Nav.Link>
    </OverlayTrigger>
  );
}