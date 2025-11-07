import { Col, Container, Row } from "react-bootstrap";
import "./Process.css";

function Process() {
  return (
    <Container fluid className="processpage">
      <Row>
        <Col>
          <div className="proleft">
            <Col>
              <h1 className="fw-bold ">Work Process</h1>
              <p className="fs-5 lh-md text-bg-light">
                Driven by design and powered by code, I create digital
                interfaces that feel intuitive and perform seamlessly. Every
                layout, animation, and component is crafted with intention —
                merging usability with visual clarity,
                <br />
                <br />I blend clean design with efficient code to build
                engaging, user-friendly web experiences that stand out.
              </p>
            </Col>
          </div>
        </Col>
        <Col>
          <Row className="researchprocess  ">
            <div className=" ">
              <Row className="   d-flex align-items-center m-auto">
                <Col className="researchhover ">
                  <div className="research">
                    <div className="researchicons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-file-earmark-easel"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.5 6a.5.5 0 1 0-1 0h-2A1.5 1.5 0 0 0 4 7.5v2A1.5 1.5 0 0 0 5.5 11h.473l-.447 1.342a.5.5 0 1 0 .948.316L7.027 11H7.5v1a.5.5 0 0 0 1 0v-1h.473l.553 1.658a.5.5 0 1 0 .948-.316L10.027 11h.473A1.5 1.5 0 0 0 12 9.5v-2A1.5 1.5 0 0 0 10.5 6zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" />
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </div>
                    <h3 className=" pt-4">1. Research</h3>
                    <p className=" pt-4">
                      Design meets function in every pixel, blending clarity
                      with intuitive motion.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="analyze mt-5">
                    <div className="researchicons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-graph-up"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"
                        />
                      </svg>
                    </div>
                    <h3 className=" pt-4">2. Analyze</h3>
                    <p className=" pt-4">
                      Crafting clean, thoughtful interfaces where form flows
                      seamlessly into function and clarity.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-2 ">
              <Row className="   d-flex align-items-center m-auto">
                <Col className="researchhover ">
                  <div className="research mb-5">
                    <div className="researchicons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                      </svg>
                    </div>
                    <h3 className=" pt-4">1. Research</h3>
                    <p className=" pt-4">
                      Design meets function in every pixel, blending clarity
                      with intuitive motion.
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="analyze ">
                    <div className="researchicons">
                      <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-sm:p-2 sm:w-8 sm:h-8"
                      >
                        <path
                          d="M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668V20.0002C29.3333 19.6465 29.1928 19.3074 28.9428 19.0574C28.6927 18.8073 28.3536 18.6668 28 18.6668ZM7.99996 9.3335C7.99996 8.97987 8.14044 8.64074 8.39048 8.39069C8.64053 8.14064 8.97967 8.00016 9.33329 8.00016H22.6666C23.0202 8.00016 23.3594 8.14064 23.6094 8.39069C23.8595 8.64074 24 8.97987 24 9.3335V18.6668H7.99996V9.3335ZM26.6666 22.6668C26.6666 23.0205 26.5262 23.3596 26.2761 23.6096C26.0261 23.8597 25.6869 24.0002 25.3333 24.0002H6.66663C6.313 24.0002 5.97387 23.8597 5.72382 23.6096C5.47377 23.3596 5.33329 23.0205 5.33329 22.6668V21.3335H26.6666V22.6668Z"
                          fill="#A53DFF"
                        ></path>
                      </svg>
                    </div>
                    <h3 className=" pt-4">2. Analyze</h3>
                    <p className=" pt-4">
                      Crafting clean, thoughtful interfaces where form flows
                      seamlessly into function and clarity.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Process;
