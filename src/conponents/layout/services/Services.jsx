import { Container,Row ,Col,Button } from "react-bootstrap"
import "./Services.css"
function Services() {
  return (
    <Container fluid className="mt-5 mb-5 rounded-4 " style={{ backgroundColor:"#e7e3e3ff"}}>
        <Row>
            <Col className="expleft">
            <div className="whatisdo  m-auto" style={{width:""}}>
                <h1 className="mt-5" style={{fontSize:"55px"}}>What I do?</h1>
                <p style={{width:"65%"}} className="pt-5 mt-2 fs-6  fw-medium">I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.</p>
                <p style={{width:"65%"}} className="pt-3 fs-6  fw-medium">My approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.</p>
                <Button className="mt-5 fs-5 fw-bold border-0" style={{backgroundColor:"#9929fb"}}>Say Hello</Button>
            </div>
            </Col>
           
            <Col>
         <div className="exp">
               <div className="expTop">
                 <Col className="userExp">
                <div className="uxexp">
                    <h3>User Experience (UX)</h3>
                <p className=" fw-normal   fs-6">I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.</p>
                </div>
                </Col>
                 <Col className="userExp">
                 <div className="uxexp">
                    <h3>User Experience (UX)</h3>
                <p>I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.</p>
                </div>
                </Col> 
                <Col className="userExp">
         <div className="uxexp">
                    <h3>User Experience (UX)</h3>
                <p>I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.</p>
                </div>
                </Col>
               </div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Services
