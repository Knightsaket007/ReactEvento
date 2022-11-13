import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Login from "./Pages/User_Login"
let App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />}></Route>
          
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;

