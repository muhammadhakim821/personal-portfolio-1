import { Button, Container } from "react-bootstrap";
import "./Blog.css";

function Blog() {
  return (
    <div>
      <div className="projects text-center pt-lg-5 pb-lg-5">
        <h3>More Projects</h3>
      </div>
      <Container fluid className=" text-light pt-lg-5 pb-lg-5 bg-black" >
        <div className="projectidea text-center pt-lg-5 pb-lg-5">
          <h1 style={{fontSize:"55px"}}>
            Do you have a Project Idea? <br /> Let's discuss your project!
          </h1>
          <p className="pt-4 fs-5">
            I'm always open to discussing new projects and creative ideas. Let's{" "}
            <br /> connect and build something amazing together.
          </p>
          <Button className="mt-4 p-3 fw-bold">
            Let's Work Together
            <span className="">
              <svg className=""
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Blog;
