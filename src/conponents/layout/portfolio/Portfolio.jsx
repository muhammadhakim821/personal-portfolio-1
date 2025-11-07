import { Button, Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Portfolio.css"
import cardimage from "../../../assets/images/card-3.png";

function Portfolio() {
  return (
    <Container fluid>
        <div className="port text-center pt-lg-5 pb-lg-5">
            <h1>Portfolio</h1>
            <p className=" fs-5">Here's a selection of my recent work, showcasing my skills in <br /> creating user-centric and visually appealing interfaces.</p>
        </div>
      


    <Row xs={1} md={3} className="g-4 mt-lg-5 mb-lg-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={cardimage} style={{width:"", height:""}} />
            
            <Card.Body>

              <Card.Text>UI-UX DESIGN</Card.Text>
              <Card.Title>Product Admin Dashboard</Card.Title>
              <Card.Text>
                Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.
              </Card.Text>
              <Button className="casestudy">Case Study 
                <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></span>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


    </Container>
  )
}

export default Portfolio
