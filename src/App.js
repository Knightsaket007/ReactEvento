import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup"
import UserLog from "./Pages/UserLog"
import Aboutus from "./Pages/Aboutus"
import EventInfo from "./Pages/EventInfo"
import Testing from "./Pages/Testing"
import Newtest from "./Pages/Newtest"
let App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/about" element={<Aboutus/>}></Route>
          <Route path="/signup" element={<UserSignup/>}></Route>
          <Route path="/login" element={<UserLog/>}></Route>
          <Route path="/eventinfo" element={<EventInfo/>}></Route>
          <Route path="/test" element={<Testing/>}></Route>
          <Route path="/Newtest" element={<Newtest/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;

