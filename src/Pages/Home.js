import "./Custom.css"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

// import image1 from "./ReactEvento/img/front001.png"
function Home() {
  return (
    <>
      <Navbar />

      {/* SLIDER */}
      <div className="carousel">
        <div className="carousel-inner">
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
          <div className="carousel-item">

            <img src="/ReactEvento/images/neon001.gif" alt="wait" ></img>

          </div>
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
            <img src="/ReactEvento/images/neon002.gif" alt="wait" ></img>
          </div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
            <img src="/ReactEvento/images/neon003.gif" alt="wait" ></img>
          </div>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
          <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
          <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
          <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
          <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
          </ol>
        </div>
      </div>
      <div className="bg_img"  >
      <div class="typewriter">
        <h1 className="head_text"> Book your events</h1>
        </div>
        <br></br>
  <p>       Join and participate in events near by you </p>
      </div>
      {/* <img src="/ReactEvento/images/Pic.jpg"></img> */}



      <Cards />
      <Footer />
    </>
  )
}

export default Home;