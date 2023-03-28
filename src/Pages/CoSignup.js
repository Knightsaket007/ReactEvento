import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
function CoSignup() {


    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    

    function User_Data() {
        const validate = () => {
            let nameError = '';
            let emailError = '';
            let passwordError = '';

            if (!Name) {
                nameError = ' Name is required';
            }else {
                setNameError('');
            }

            if (!Email.includes('@')) {
                emailError = 'Invalid email address';
                
            } else {
                setEmailError('');
            }

            if (!Password || Password.length < 8) {
                passwordError = 'Password must be at least 8 characters long';
            } else {
                setPasswordError('');
            }

            if (nameError ) {
                setNameError(nameError);
                setEmailError(emailError);
                setPasswordError(passwordError);
                return false;
            }
            return true;
        }
        
       
if(validate()){
        axios.post(" http://localhost:5000/co_Admin/coadmin_signup", {
            Name: Name,
            Password: Password,
            Email: Email,
            Phone: Phone,
        }).then(res => {
            console.log(res)
            if (res.data === "user exists") {
                toast.error("User already exists!", {
                    theme: "dark"
                })
            } else if (res.data === "sent") {
                toast.success("Sign IN!")
            } else {
                toast.warn("error")
            }
        })
    }
}


    return (
        <>

            <div className="main-sign">


                <div className="form-div">
                    <div className="sign-heading">
                        <h1>Create your Account</h1>
                    </div>

                    <form class="form-inline" >

                        <label>Name <span className="imp" style={{color:"rgb(32, 199, 82)"}}>* </span></label>
                        <input name="Name" className="inp" type="text"  onChange={(e) => setName(e.target.value)}/>
                        <div className="error">{nameError}</div>
                        <label>Password <span className="imp" style={{color:"rgb(32, 199, 82)"}}>*</span></label>
                        <input name="Password" className="inp" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <div className="error">{passwordError}</div>
                        <label>Email <span className="imp" style={{color:"rgb(32, 199, 82)"}}>*</span></label>
                        <input name="Email" className="inp" type="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <div className="error">{emailError}</div>
                        <label>Phone <span className="imp" style={{color:"rgb(32, 199, 82)"}}>(optional)</span></label>
                        <input name="Mobile" className="inp" type="tel" onChange={(e) => setPhone(e.target.value)}/>
                        <div className="error">{nameError}</div>
                    </form>

                    <div style={{ textAlign: "center" }}><button onClick={User_Data} type="button" style={{ marginTop: '20px', fontSize: '20px' }} className="custom-btn btn-2">Sign-up</button>
                    
                    <div className="advice">Already have an account? <Link to="/co-login">Login</Link></div>
                    </div>
                    <ToastContainer />

                </div>

                <div className="sign-img-div">
                    <img src="/ReactEvento/images/cosign.svg" className="sign-img" alt="im" />
                </div>

            </div>

            <div className="line-container">
                <div className="line"></div>
            </div>
            <Footer />
        </>
    )
}
export default CoSignup;