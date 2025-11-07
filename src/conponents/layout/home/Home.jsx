import { Row, Col, Container, Button } from "react-bootstrap";
import personimage from "../../../assets/images/person.png";
import "./Home.css";
function Home() {
  return (
      <div className="bghomecolor">
    <Container fluid className=" mt-lg-5 ">
    
      <Row className=" d-flex justify-content-between">
        <Col>
          <Col className="homepage mt-lg-5  ">
            <div className="hello p-lg-3 ">
              <h1 className=" fw-bold " style={{ fontSize: "55px" }}>
                Hello, I’m <br /> Brooklyn Gilbert
              </h1>
              <p className="fs-6 lh-base">
                <samp>
                  I'm a Freelance UI/UX Designer and Developer based in London,
                  England. I strives to build immersive and beautiful web
                  applications through carefully crafted code and user-centric
                  design.
                </samp>
              </p>
              <div className="hellobtn mt-5">
                <Button
                  className="fw-bold fs-6 border-0 p-lg-2"
                  style={{ backgroundColor: "#9929fb" }}
                >
                  Say Hello!
                </Button>
              </div>
              <div className="mt-5">
  <div className="row gap-1 mt-10 pt-5   justify-content-center">
    <div className="col-3 status text-center p-3">
    
      <p className=" fw-bold" style={{fontSize:"22px"}}>15 Y.</p>
                    <p className="" style={{fontSize:"12px"}} >Experience</p>
    
    </div>
    <div className="col-3 status text-center p-3">
      <h3 className=" fw-bold">250+</h3>
                    <p className="">Projects Completed</p>
    </div>
    <div className="col-3 status text-center p-3">
      <h2 className=" fw-bold">58</h2>
                    <p>Happy Clients</p>
    </div>
  </div>
</div>
             
            </div>
          </Col>
        </Col>
        <Col>
          <div className="developerimage d-flex justify-content-center ">
            <img src={personimage} className="img-fluid w-75" alt="" />
          </div>
        </Col>
      </Row>
     
    </Container>
     </div>
  );
}

export default Home;
