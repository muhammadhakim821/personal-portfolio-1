import { Container } from "react-bootstrap"
import "./Testimonial.css"
function Testimonial() {
  return (
    <Container fluid>
        <div className="happy-client text-center pt-5 pb-5">
            <h1 className="" style={{fontSize:"55px"}}>Happy Clients</h1>
            <p className="fs-4 pt-3">I've had the pleasure of working with a diverse range of <br /> companies, from startups to established brands.</p>
        </div>
        <div className="marksocialmedia mt-2 mb-5">
            <marquee behavior="2" direction="left">
                <ul className="socialmediaicons">
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-amazon" viewBox="0 0 16 16">
  <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z"/>
  <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623"/>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16">
  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
</svg></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"/>
</svg></li>
                </ul>
            </marquee>
            
        </div>
        <div className="happy-client text-center pt-5 pb-5">
            <h1 className="" style={{fontSize:"55px"}}>Testimonial</h1>
        </div>
        
        <div className="testimonial   d-flex justify-content-center">
            <div className="slider  position-absolute  w-75 ">
  <input
    type="radio"
    name="slider"
    title="slide1"
    defaultChecked="checked"
    className="slider__nav"
  />
  <input type="radio" name="slider" title="slide2" className="slider__nav position-relative top-25 text-danger" />
  <input type="radio" name="slider" title="slide3" className="slider__nav  position-relative top-25 text-danger" />
  <input type="radio" name="slider" title="slide4" className="slider__nav  position-relative top-25 text-danger" />
  <div className="slider__inner ">
    <div className="slider__contents ">
        <div className=" w-100  ">
      <i className="slider__image fa fa-codepen" />
      <h2 className="slider__caption ">codepen</h2>
      <p className="slider__txt">
            <p className="fs-4 pt-3 text-center"  >I've had the pleasure of working with a diverse range of <br /> companies, from startups to established brands.</p>
            <p className=" p-5 fs-5" style={{color:"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae itaque ducimus consectetur amet distinctio, delectus quaerat? Et dolorum aliquid in quia esse dicta iusto amet officiis enim. Sequi, animi.
            Enim eos quod unde amet, quibusdam ipsa reiciendis ex voluptatibus architecto officiis, ad animi odio nam sit accusamus vel iusto quaerat sapiente. Mollitia non libero, facere iste eius incidunt beatae?</p>
        
      </p>
      </div>
    </div>
     <div className="slider__contents ">
        <div className=" w-100  ">
      <i className="slider__image fa fa-codepen" />
      <h2 className="slider__caption ">codepen</h2>
      <p className="slider__txt">
            <p className="fs-4 pt-3 text-center"  >I've had the pleasure of working with a diverse range of <br /> companies, from startups to established brands.</p>
            <p className=" p-5 fs-5" style={{color:"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae itaque ducimus consectetur amet distinctio, delectus quaerat? Et dolorum aliquid in quia esse dicta iusto amet officiis enim. Sequi, animi.
            Enim eos quod unde amet, quibusdam ipsa reiciendis ex voluptatibus architecto officiis, ad animi odio nam sit accusamus vel iusto quaerat sapiente. Mollitia non libero, facere iste eius incidunt beatae?</p>
        
      </p>
      </div>
    </div> <div className="slider__contents ">
        <div className=" w-100  ">
      <i className="slider__image fa fa-codepen" />
      <h2 className="slider__caption ">codepen</h2>
      <p className="slider__txt">
            <p className="fs-4 pt-3 text-center"  >I've had the pleasure of working with a diverse range of <br /> companies, from startups to established brands.</p>
            <p className=" p-5 fs-5" style={{color:"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae itaque ducimus consectetur amet distinctio, delectus quaerat? Et dolorum aliquid in quia esse dicta iusto amet officiis enim. Sequi, animi.
            Enim eos quod unde amet, quibusdam ipsa reiciendis ex voluptatibus architecto officiis, ad animi odio nam sit accusamus vel iusto quaerat sapiente. Mollitia non libero, facere iste eius incidunt beatae?</p>
        
      </p>
      </div>
    </div> <div className="slider__contents ">
        <div className=" w-100  ">
      <i className="slider__image fa fa-codepen" />
      <h2 className="slider__caption ">codepen</h2>
      <p className="slider__txt">
            <p className="fs-4 pt-3 text-center"  >I've had the pleasure of working with a diverse range of <br /> companies, from startups to established brands.</p>
            <p className=" p-5 fs-5" style={{color:"black"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae itaque ducimus consectetur amet distinctio, delectus quaerat? Et dolorum aliquid in quia esse dicta iusto amet officiis enim. Sequi, animi.
            Enim eos quod unde amet, quibusdam ipsa reiciendis ex voluptatibus architecto officiis, ad animi odio nam sit accusamus vel iusto quaerat sapiente. Mollitia non libero, facere iste eius incidunt beatae?</p>
        
      </p>
      </div>
    </div>
    
   
    
  </div>
</div>

        </div>
    </Container>
  )
}

export default Testimonial
