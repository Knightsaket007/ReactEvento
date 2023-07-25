import Footer from "./Components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import Modal from "./Components/Modal";
import "./Components/Co_Home.css";
import Timmer from './Components/Timmer';
import { useNavigate } from "react-router-dom";
function CoSignup() {

    const Navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [AddError, setAddError] = useState('');
    const [OTP, setOTP] = useState('');
    const [eventpop, setEventpop] = useState(false)


    // otp timmer


    const [showTimer, setShowTimer] = useState(false);

    const handleOTPTimerFinish = () => {
        // Perform necessary actions when the countdown finishes
    };

    const handleOpenModal = () => {
        setEventpop(true);
        setShowTimer(true); // Start the timer when the modal is opened
    };

    const handleCloseModal = () => {
        setEventpop(false);
        setShowTimer(false); // Stop the timer when the modal is closed
    };

    useEffect(() => {
        if (eventpop) {
            setShowTimer(true); // Start the timer when the modal is open
        }
    }, [eventpop]);





    function User_Data() {


        const validate = () => {
            let nameError = '';
            let emailError = '';
            let passwordError = '';
            let AddError = '';

            if (!Name) {
                nameError = ' Name is required';
            } else {
                setNameError('');
            }

            if (!Email.includes('@')) {
                emailError = 'Invalid email address';

            } else {
                setEmailError('');
            }

            if (Password.length < 8) {
                passwordError = 'Password must be at least 8 characters long';
            } else {
                setPasswordError('');
            }
            if (!Address) {
                AddError = 'Enter Correct Address  ';
            } else {
                setPasswordError('');
            }

            if (nameError || emailError || passwordError || AddError) {
                setNameError(nameError);
                setEmailError(emailError);
                setPasswordError(passwordError);
                setAddError(AddError);
                return false;
            }
            return true;
        }


        if (validate()) {


            axios.post(" http://localhost:5000/co_Admin/coadmin_varif", {
                Email: Email,

            }).then(res => {
                console.log(res)
                if (res.data === "user exists") {
                    toast.error("User Email already exists!", {
                        theme: "dark"
                    })
                } else if (res.data === "sent") {
                    axios.post("http://localhost:5000/co_Admin/coadmin_varif", {
                    }).then(res => {
                        toast.loading("Check your email", {
                            theme: "dark",
                            autoClose: "delay",
                        })

                        setEventpop(true)
                    })
                } else {
                    toast.warn("error")
                }
            })
        }
    }










    function matchOtp() {
        // const newOtp = localStorage.getItem("newOtp");

        axios.post("http://localhost:5000/co_Admin/Check-otp", {
            OTP: OTP,
            Name: Name,
            Email: Email,
            Password: Password,
            Phone: Phone,
            Address: Address,
        }).then(res => {
            if (res.data === "user-inserted") {
                console.log("user have successfully created an account");
                toast.success("Done")
                Navigate("/Co-Home")
            } else {
                console.log("Wrong otp bro");
                console.log("Server response is ", res.data);
            }
        })


    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        matchOtp(); // Call the function to match the OTP
    };



    return (
        <>

            <div className="main-sign">


                <div className="form-div">
                    <div className="sign-heading">
                        <h1>Create your Account</h1>
                    </div>

                    <form class="form-inline" >

                        <label>Name <span className="imp" style={{ color: "rgb(32, 199, 82)" }}>* </span></label>
                        <input name="Name" className="inp" type="text" onChange={(e) => setName(e.target.value)} />
                        <div className="error">{nameError}</div>

                        <label>Email <span className="imp" style={{ color: "rgb(32, 199, 82)" }}>*</span></label>
                        <input name="Email" className="inp" type="Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className="error">{emailError}</div>

                        <label>Password <span className="imp" style={{ color: "rgb(32, 199, 82)" }}>*</span></label>
                        <input name="Password" className="inp" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <div className="error">{passwordError}</div>

                        <label>Phone </label>
                        <input name="Mobile" className="inp" lang="en-IN" type="number" onChange={(e) => setPhone(e.target.value)} />
                        <div className="error">{nameError}</div>

                        <label>Address</label>
                        <input name="Address" className="inp" type="tel" onChange={(e) => setAddress(e.target.value)} />
                        <div className="error">{AddError}</div>
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


            <Modal open={eventpop} onClose={() => setEventpop(false)}>
                <h2 style={{ textAlign: "center" }}>Verify</h2>
                <div id="all-change-container">
                    <form id="form-in" onSubmit={handleFormSubmit}>
                        <br />
                        <label >OTP</label><br />
                        <input onChange={(e) => setOTP(e.target.value)} className="edit-inputs" type="number"></input><br />

                        <button type="submit" onClick={matchOtp} style={{ fontSize: "17px" }} className="custom-btn btn-2 pass-change" ><p>Enter</p></button>
                        <p>Enter before OTP expires </p>


                        {showTimer && <Timmer initialMinutes={5} onFinish={handleOTPTimerFinish} />}

                    </form>
                </div>

            </Modal>

            <Footer />
        </>
    )
}
export default CoSignup;