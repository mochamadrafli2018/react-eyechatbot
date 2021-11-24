import {Accordion} from 'react-bootstrap';
export default function AccordionBoostrap({Title,Text}) {
  return (
    <Accordion.Item eventKey="0" style={{border:'none'}}>
      <Accordion.Header style={{border:'none',boxShadow:'none'}}>{Title}</Accordion.Header>
      <Accordion.Body style={{border:'none',boxShadow:'none'}}>{Text}</Accordion.Body>
    </Accordion.Item>
  )
}