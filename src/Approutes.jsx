import React from 'react'
import NavBar from "../src/conponents/layout/header/NavBar"
import Home from './conponents/layout/home/Home'
import About from './conponents/layout/about/About'
import Process from './conponents/layout/process/Process'
import Portfolio from './conponents/layout/portfolio/Portfolio'
import Blog from './conponents/layout/blog/Blog'
// import BlogsSetction from './conponents/layout/blog/BlogsSetction'
import Services from './conponents/layout/services/Services'
// import Testimonial from './conponents/layout/testimonial/Testimonial'
import Contact from './conponents/layout/contact/Contact'
import Footer from './conponents/layout/footer/Footer'
function Approutes() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Process/>
      <Portfolio/>
      <Blog/>
      {/* <BlogsSetction/> */}
      <Services/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Approutes
