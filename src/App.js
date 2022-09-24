import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Forimg from "./Pages/Forimg"
let App=()=>{

  return(
    <>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="img" element={<Forimg/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
  )
}


export default App;

