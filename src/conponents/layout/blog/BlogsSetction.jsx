import { Container } from "react-bootstrap"
import "./Blog.css"
// import projectimage from "../../../assets/images/card-3.png"


function BlogsSetction() {

  return (
    <div>
      <div className="blogs text-center pt-lg-5 pb-lg-5">
        <h1 className="" style={{fontSize:""}}>Blogs</h1>
        <p className=" fs-5">Check out my recent blog posts where I share insights on <br /> design, development, and the latest industry trends</p>
      </div>
      <Container fluid>
        {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active text bg-black" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="  bg-black" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  className=" bg-black" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner w-100 bg-danger">
    <div class="carousel-item active w-50">
      
      <img src= {projectimage} class=" w-75 " alt="..."/>
     
    </div>
    
    <div class="carousel-item   w-50 ">
      <img src= {projectimage} class=" w-75" alt="..."/>
      
    </div>
    
    <div class="carousel-item w-50">
      <img src= {projectimage} class=" w-75" alt="..."/>
     
    </div>
  </div>
 
</div> */}
<section
  className="testimonials"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1580912458702-6fa698fc553e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")'
  }}
>
  <div className="container">
    <div className="title">
      <h5>Testimonials</h5>
      <h2>What our clients say</h2>
    </div>
    <div className="owl-carousel owl-theme testi">
      {/* Single Starts */}
      <div className="item">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80"
            alt=""
          />
          <div className="information">
            <div className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <p>Furkan Giray</p>
            <span>Web Developer</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          velit labore suscipit distinctio, officiis deserunt rem blanditiis
          ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus
          maiores impedit ducimus cum accusamus.
        </p>
        <div className="icon">
          <i className="fa fa-quote-right" aria-hidden="true" />
        </div>
      </div>
      {/* Single Ends */}
      <div className="item">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80"
            alt=""
          />
          <div className="information">
            <div className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <p>Furkan Giray</p>
            <span>Web Developer</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          velit labore suscipit distinctio, officiis deserunt rem blanditiis
          ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus
          maiores impedit ducimus cum accusamus.
        </p>
        <div className="icon">
          <i className="fa fa-quote-right" aria-hidden="true" />
        </div>
      </div>
      <div className="item">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80"
            alt=""
          />
          <div className="information">
            <div className="stars">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
            <p>Furkan Giray</p>
            <span>Web Developer</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          velit labore suscipit distinctio, officiis deserunt rem blanditiis
          ducimus. Voluptate quaerat assumenda qui veniam facilis doloribus
          maiores impedit ducimus cum accusamus.
        </p>
        <div className="icon">
          <i className="fa fa-quote-right" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
</section>

      </Container>
    </div>
  )
}

export default BlogsSetction
