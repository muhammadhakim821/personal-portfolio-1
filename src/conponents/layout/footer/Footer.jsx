
import { Container, Row,Col } from 'react-bootstrap'
import brokelyn from "../../../assets/images/logo-BZuaoNYZ.png"

function Footer() {
  return (
    <Container fluid className=' bg-info p-5'>
        <Row className=' d-flex justify-content-between'>
            <Col>
            <div className="brook d-flex  gap-3">
                <img src={brokelyn} alt="" width="60" height="60" />
                <h2 className=' fw-bold pt-2'>Brooklyn</h2>
            </div>
            </Col>
            <Col>
            <div className="footerheader mt-4">
                <ul className=' d-flex list-unstyled gap-4 fw-medium'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Process</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            </Col>
            <Col>
            <div className="copy d-flex justify-content-end mt-4">
                <p>Copyright © 2025 Picto.</p>
            </div>
            </Col>

        </Row>
            <p className=' text-center p-5'>Developed with ❤️ by <a className=' fs-5 fw-bold' href="/">Themewagom</a> </p>


    </Container>
  )
}

export default Footer
