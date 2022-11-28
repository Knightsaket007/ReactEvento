import axios from "axios";
import { useState } from "react";


function User_Login() {
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");


   function click(){
          axios.post("http://localhost:5000/users/User_Login",{ 
   Email:Email,
   Password:Password
    }).then(res=>{
            console.log(res.data)
           })
        
        }
    return (
        <>
            <form className="account-form">

                <label style={{ color: 'white', width: '100px', height: '40px' }} >Email ID</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>

                <label style={{ color: "white", width: '100px', height: '40px' }} >Password</label>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                {/* <button  style={{ backgroundColor: 'blue', width: '100px', height: '40px' }} >Login</button> */}
                <button type="button" style={{ backgroundColor: 'blue', width: '100px', height: '40px' }}   onClick={click}>Login</button>

            </form>
        </>
    )
}
export default User_Login;