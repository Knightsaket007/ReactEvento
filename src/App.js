import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup"
import UserLog from "./Pages/UserLog"
import Aboutus from "./Pages/Aboutus"
import EventInfo from "./Pages/EventInfo"
import Testing from "./Pages/Testing"
import Newtest from "./Pages/Newtest"
import CoSignup from "./Pages/CoSignup"
import CoLogin from "./Pages/CoLogin"
import UserHome from "./Pages/UserHome"
import Co_Home from "./Pages/Co_Home";
let App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/about" element={<Aboutus/>}></Route>
          <Route path="/signup" element={<UserSignup/>}></Route>
          <Route path="/user-login" element={<UserLog/>}></Route>
          <Route path="/eventinfo" element={<EventInfo/>}></Route>
          <Route path="/test" element={<Testing/>}></Route>
          <Route path="/Newtest" element={<Newtest/>}></Route>
          <Route path="/co-signup" element={<CoSignup/>}></Route>
          <Route path="/co-login" element={<CoLogin/>}></Route>
          <Route path="/Home" element={<UserHome/>}></Route>
          <Route path="/Co-Home" element={<Co_Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;

