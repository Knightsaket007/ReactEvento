import Navbar from "./Components/Navbar";
import "./EventInfo.css"
const EventInfo=()=>{
    return(
<>
<Navbar/>
<div className="info-container">
    <div className="content-div">
       <div className="inner-div">
       <img className="img-info" src="/ReactEvento/images/infopic.svg"  alt="loading..." />
  <h3>Title here </h3>  </div>
    </div> 
 
    <div className="illust-div">
    <img src="/ReactEvento/images/infopic.svg" className="sign-img" alt="loading..." />
    </div>  
</div>
</>
    )
}
export default EventInfo;