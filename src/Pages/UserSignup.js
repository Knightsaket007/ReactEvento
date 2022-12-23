import Navbar from "./Components/Navbar";
import './Components/UserSignup.css';
import Footer from "./Components/Footer"
import { Link } from "react-router-dom";
import { useState } from "react";
const UserSignup = () => {
    const [name, setName] = useState('');
 
    function getName(){ 
        console.log(name);
    }

    return (
        <>
            <Navbar /> 

            <div className="main-sign">
            
         
                <div className="form-div">
                <div className="sign-heading">
                     <h1>Create your Account</h1>
                </div>
                
                    <form class="form-inline">
                    
                        <label>Name <span className="imp">* </span></label>
                        <input className="inp" type="text" onChange={(e) => setName(e.target.value)}/>
                        <label>Password <span className="imp">*</span></label>
                        <input className="inp" type="password"/>
                        <label>Email <span className="imp">*</span></label>
                        <input className="inp" type="Email"/>
                        <label>Phone <span className="imp">(optional)</span></label>
                        <input className="inp" type="tel"/>
                    </form>
               
                    <div><button type="submit" onClick={getName} style={{marginTop:'20px',fontSize:'20px'}} className="custom-btn btn-2">Sign-up</button></div>
                    <div className="advice">Already have an account? <Link to="/login">Login</Link></div>

                </div>

                <div className="sign-img-div">
                    <img src="/ReactEvento/images/signup.svg" className="sign-img" alt="im" />
                </div>

            </div>

             <div className="line-container">
          <div className="line"></div>
         </div> 
            <Footer/>
        </>
    )
}
export default UserSignup;
