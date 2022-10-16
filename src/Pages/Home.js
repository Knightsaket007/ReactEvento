import "./Custom.css"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import { GiReceiveMoney } from 'react-icons/gi';
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
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
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
        <p> Join and participate in events near by you </p>
      </div>


      <Cards />

      {/* FIRST */}
      <div class="div-cool-container">
        <div classname="img-cool1">
          <img alt="Party" src="./ReactEvento/images/Party1.jpeg" className="img-cool1" /></div>

        <div className="div-cool">
          <h1 className="heading">Nearby Concert</h1>
          <p className="para">Organizer approved by us, for more information please read our
           policy In corporate finance and capital markets, refunding is the process where a fixed-income issuer retires some of their outstanding callable bonds and replaces them with new bonds, usually at more favorable terms to the issuer as to reduce financing costs. The new
           bonds are used to create a sinking fund to repay the original bond issues, known as refunded bonds.</p>
        </div>

        {/* SECOUND */}
        <div className="txt2-box"><p>Gaming</p>
        
          <button class="custom-btn btn-2">Read More</button><div className="div-cool2" > 
         <p className="para2">Online gaming events of your favorite games </p>
         
         </div>
         
         </div>

        <img alt="Game console" src="./ReactEvento/images/Gaming.jpg" className="img-cool2" />


        {/* THIRD */}
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div classname="img-cool1">
          <img alt="Party" src="./ReactEvento/images/Party.jpg" className="img-cool3" /></div>
        <div className="div-cool3">
          <h1 className="heading">Refundable <GiReceiveMoney/></h1>
          <p className="para">Your money will be refuned Immediately In corporate finance and capital markets, refunding is the process where a fixed-income issuer retires some of their 
          outstanding callable bonds and replaces them with new bonds, usually at more favorable terms to the issuer as to reduce financing costs. The new bonds are used to create a sinking 
          fund to repay the original bond issues, known as refunded bonds.</p>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home;