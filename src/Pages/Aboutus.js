import "./Components/About.css"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const Aboutus=()=>{
    return(
        <>
        
        <Navbar/>

       <div className="main-about-container">
        <div className="about-heading">
            <h1>About us</h1>
        </div>
       </div>

        <Footer/>
        </>
    )
}
export default Aboutus;