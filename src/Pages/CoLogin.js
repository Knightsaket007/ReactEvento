import './Components/UserSignup.css';
import Footer from "./Components/Footer"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function CoLogin() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPasswordError] = useState('');
    const Navigate= useNavigate();

    
//Login check 


useEffect (()=>{
axios.get('http://localhost:5000/co_Admin/user-auth').then(res=>{
    console.log(res.data)
    if(res.data==='login'){
    } 
    else{
        window.alert(" login kar ")

    }
})

},[])

    function User_Data() {

        const validate = () => {
            let emailError = '';
            let passwordError = '';

            if (!Email) {
                emailError = ' Email is required';
            } else {
                setEmailError('');
            }



            if (!Password || Password.length < 8) {
                passwordError = 'Password must be at least 8 characters long';
            } else {
                setPasswordError('');
            }

            if (emailError || passwordError) {

                setEmailError(emailError);
                setPasswordError(passwordError);
                return false;
            }
            return true;

        }
    

        
    if (validate()) {
        axios.post(" http://localhost:5000/co_Admin/Log_coAdmin", {

            Email: Email,
            Password: Password,
        }).then(res => {
            console.log(res)
            if (res.data === "not logged") {
                toast.error("User Email and Password not match!", {
                    theme: "dark"
                })
            } else if (res.data === "Logged")
                
                Navigate('/co-home')


        })
    }
    }

    return (
        <>
        

            <div className="main-sign">

                <div className="form-div">
                    <div className="sign-heading">
                        <h1>Login to your Account</h1>
                    </div>
                    <form class="form-inline">

                        <label>Email </label>
                        <input onChange={(e) => setEmail(e.target.value)} className="inp" type="Email" />
                        <div className="error">{emailError}</div>
                        <label>Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="Password" />
                        <div className="error">{passError}</div>
                    </form>
                    <div><button onClick={User_Data} style={{ marginTop: '20px', fontSize: '20px' }} className="custom-btn btn-2">Login</button></div>
                    <div className="advice">Don't have an account? <Link to="/co-signup">Create One</Link></div>




                </div>

                <div className="sign-img-div">
                    <img src="/ReactEvento/images/cosign.svg" className="sign-img" alt="loading" />
                </div>

            </div>


            <ToastContainer />

            <div className="line-container">
                <div className="line"></div>
            </div>
            <Footer />
        </>
    )
}
export default CoLogin;
