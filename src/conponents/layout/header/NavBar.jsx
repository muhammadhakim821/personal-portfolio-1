import "./NavBar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoBZuaoNYZ from "/src/assets/images/logo-BZuaoNYZ.png"


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
       <div className="logoimage d-flex">
         <img src={logoBZuaoNYZ} style={{width:"60px", height:"60px"}} alt="logo" />
        <h3 className="p-3 ">Muhammad Hakim</h3>
       </div>
        <Navbar.Toggle  />
        <Navbar.Collapse className="d-flex justify-content-lg-end ">
          
          <Nav
            className=" my-2 my-lg-2 gap-lg-4"
            style={{ maxHeight: 'auto'}}
            
          >
            <Nav.Link className="fs-6 fw-normal fw-bold  " href="#action1">Home</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action2">About</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action1">Process</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action2">Portfolio</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action2">Blog</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action2">Services</Nav.Link>
            <Nav.Link className="fs-6 fw-normal fw-bold" href="#action2">Contact</Nav.Link>
            
  
          </Nav>    
         
            
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;