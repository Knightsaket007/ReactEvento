import Navbar from "./Components/Navbar";
import './Components/UserSignup.css';
import Footer from "./Components/Footer"
import { Link } from "react-router-dom";
// import { useEffect } from "react";


 function UserLog ()  {
    

//     const google = window.google;
// function handleCallbackresponse(response){ 
// console.log("jdnicndi"+response.credential);
// }

//     useEffect(()=>{
//         //google global//
//         google.accounts.id.initalize({
//             client_id:"404172413531-j2e4fsuun6468l7jeb8h1n8f5huorn9u.apps.googleusercontent.com",
//             callback:handleCallbackresponse
//         })

//         google.accounts.id.renderButton(
//          document.getElementById("googtest"),
//          {theme:'outline',size:"large"}
//         );

//     })

    return (
        <>
            <Navbar /> 

            <div className="main-sign">

                

                <div className="form-div">
                <div className="sign-heading">
                     <h1>Login to your Account</h1>
                </div>  
                    <form class="form-inline">
                    
                        <label>Email </label>
                        <input className="inp" type="Email"/>
                        <label>Password </label>
                        <input className="inp" type="tel"/>
                    </form>
                    <div><button   style={{marginTop:'20px',fontSize:'20px'}} className="custom-btn btn-2">Login</button></div>
                    <div className="advice">Don't have an account? <Link to="/signup">Create One</Link></div> 

                    {/* google testing */} 
                    <div id="googtest"></div>  

   
                </div>

                <div className="sign-img-div">
                    <img src="/ReactEvento/images/signup.svg"  className="sign-img" alt="loading"/>
                </div>

            </div>


            
            <div className="line-container">
          <div className="line"></div>
         </div> 
            <Footer/>
        </>
    )
}
export default UserLog;
