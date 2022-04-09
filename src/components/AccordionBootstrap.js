import {Accordion} from 'react-bootstrap';

export default function AccordionBoostrap({eventKey,Title,Content}) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{Title}</Accordion.Header>
      <Accordion.Body>{Content}</Accordion.Body>
    </Accordion.Item>
  )
}