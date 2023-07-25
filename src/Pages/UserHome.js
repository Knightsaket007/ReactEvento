import Navbar from "./Components/Navbar";
import "./UserHome.css";
import Footer from "./Components/Footer";
import { AiFillHome } from 'react-icons/ai';
import { BiMessageSquareDots } from 'react-icons/bi';
import { BiEdit } from 'react-icons/bi';
import { BsClockHistory } from 'react-icons/bs';
import { HiTrendingUp } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { BsCollectionPlay } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { MdVerifiedUser } from 'react-icons/md';
import { BiSelectMultiple } from 'react-icons/bi';
import { RiPlayList2Line } from 'react-icons/ri';
import { ImHappy2 } from 'react-icons/im';
import { RiPencilLine } from 'react-icons/ri';
import { BsShieldLockFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import Modal from "./Components/Modal";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const UserHome = () => {


  const [customHtmlPage, setCustomHtmlPage] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    renderHomePage();
    // renderEditPage();


  }, [])

  function Logout(){
    console.log("this is logout")
    axios.get('http://localhost:5000/users/users-logout').then(res=>{
      if(res.data==="success"){
        Navigate("/")
      }
    })
}




  const renderHomePage = () => {

    function go() {
      let ano = document.querySelector(".anouncement-container");
      let body = document.querySelector("body");

      setTimeout(function () {
        if (ano.style.display === "none") {
          ano.style.display = "block";
          body.classList.add("blur");
          ano.style.filter = "none";
          // document.body.style.filter="blur(10px)";

        }
        else {
          ano.style.display = "none";
          // document.body.style.filter = "none";
        }
      }, 500);
    }

    setCustomHtmlPage(

      <>
        <button id="chat-button" onClick={go}><BiMessageSquareDots /> </button>
        <div id="home1" className="cp-main">
          <div id="h-inner"><h1 > Hello User!</h1></div>
        </div>

        <div className="anouncement-container" ><div id="head-anounce"><h2>Messages <span style={{ fontSize: "12px" }}>verified <MdOutlineVerifiedUser /></span></h2></div>
          <div id="verifed-persons-container">
            <div className="verf-personId-container">
              <div className="anounce-prof-img"> <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="/ReactEvento/images/Using_phone.jpg" alt="wait" ></img><span className="verifed-icon"><MdVerifiedUser /></span></div>
              <div className="anouncement-content-div"><h4 style={{ marginTop: "-3px" }}>saket sourav</h4>
                <p style={{ marginTop: "-17px", fontSize: "12px", color: "#b3a9a9" }}>jdkjhd cfdhbvdbkv kd</p></div>
            </div>

            <div className="verf-personId-container">
              <div className="anounce-prof-img"> <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="/ReactEvento/images/Using_phone.jpg" alt="wait" ></img><span className="verifed-icon"><MdVerifiedUser /></span></div>
              <div className="anouncement-content-div"><h4 style={{ marginTop: "-3px" }}>saket sourav</h4>
                <p style={{ marginTop: "-17px", fontSize: "12px", color: "#b3a9a9" }}>jdkjhd cfdhbvdbkv kdjfnjkskskksksdks fbgfghgfhfhgfh</p></div>
            </div>
            <div className="verf-personId-container">
              <div className="anounce-prof-img"> <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="/ReactEvento/images/Using_phone.jpg" alt="wait" ></img><span className="verifed-icon"><MdVerifiedUser /></span></div>
              <div className="anouncement-content-div"><h4 style={{ marginTop: "-3px" }}>saket sourav</h4>
                <p style={{ marginTop: "-17px", fontSize: "12px", color: "#b3a9a9" }}>jdkjhd cfdhbvdbkv kdjfnjkskskksksdks fbgfghgfhfhgfh</p></div>
            </div>

            <div className="verf-personId-container">
              <div className="anounce-prof-img"> <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="/ReactEvento/images/Using_phone.jpg" alt="wait" ></img><span className="verifed-icon"><MdVerifiedUser /></span></div>
              <div className="anouncement-content-div"><h4 style={{ marginTop: "-3px" }}>saket sourav</h4>
                <p style={{ marginTop: "-17px", fontSize: "12px", color: "#b3a9a9" }}>jdkjhd cfdhbvdbkv kdjfnjkskskksksdks fbgfghgfhfhgfh</p></div>
            </div>

            <div className="verf-personId-container">
              <div className="anounce-prof-img"> <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="/ReactEvento/images/Using_phone.jpg" alt="wait" ></img><span className="verifed-icon"><MdVerifiedUser /></span></div>
              <div className="anouncement-content-div"><h4 style={{ marginTop: "-3px" }}>saket sourav</h4>
                <p style={{ marginTop: "-17px", fontSize: "12px", color: "#b3a9a9" }}>jdkjhd cfdhbvdbkv kdjfnjkskskksksdks fbgfghgfhfhgfh</p></div>
            </div>

          </div>

        </div>

        <div id="detail-container">
          <div className="inner-detail "><div className="banner-img"><h1><RiPlayList2Line /></h1></div><p>dfghgfghb gb v gfdu vdfgugfvdvud</p></div>
          <div className="inner-detail "><div className="banner-img"><h1><BiSelectMultiple /></h1></div><p>mdkj vshvhidshdhjskdh</p></div>
          <div className="inner-detail "><div className="banner-img"><h1><ImHappy2 /></h1></div><p>lmdkvcdn kk jxnk xbcbvmxc cxxc cdfnudhfuh fh dfhydhf dfd j hf hhgdf jf gdfdff</p></div>
        </div>

        <div className="illus-div"><img src="ReactEvento/images/h-fun.svg" alt="vcfd" style={{ width: "100%", height: "100%" }} te/></div>


        <div id="Ad-main-div"></div>


      </>
    );
  };


  const renderEditPage = () => {

    setCustomHtmlPage(
      <>
        <div id="Edit-page">
          <div id="edit-img-container"><img id="zoom-img" style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="./ReactEvento/images/Using_phone.jpg" alt="fetching.." ></img>
            <label for="profile-picture-upload" class="custom-button"><RiPencilLine /> Edit</label>
            <input id="profile-picture-upload" type="file" accept="image/png, image/jpeg" />

          </div>
          <form id="form-in">
            <br />
            <label >Name</label><br />
            <input className="edit-inputs"></input><br />
            <label >Email</label><br />
            <input className="edit-inputs" ></input><br />
            <label >Phone.No</label><br />
            <input className="edit-inputs"></input><br />
            <label >Address</label><br />
            <input className="edit-inputs"></input><br />
            <button type="submit" style={{ fontSize: "17px" }} className="custom-btn btn-2 pass-change" ><p>Change Password <BsShieldLockFill /></p></button>

          </form>
        </div>
        <button type="submit" id="edit-btn" style={{ fontSize: "17px" }} className="custom-btn btn-2">Update</button>
      </>
    );
  };

  const renderRecentPage = () => {
    setCustomHtmlPage(<h1>Your recent activity will appear here.</h1>);
  };

  const renderTrendingPage = () => {
    setCustomHtmlPage(
      <>
      <div id="trend-container"></div>
      </>
    );
  };

  const renderPlayPage = () => {
    setCustomHtmlPage(<h1>Start playing!</h1>);
  };
 


  //Modal POPUP

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div id="bdy">
        <Navbar userType="user"/>

        <div className="super-main">
          <div className="main-sidebar">
            <div className="side-content-box">
              <div style={{ display: "flex", textAlign: "center" }}><div className="side-prof-img"> <img style={{ height: "100%", width: "100%" }} src="./ReactEvento/images/Using_phone.jpg" alt="wait" ></img></div><span id="side-name">Name knv </span></div>
              <div className="Unorder">
                <ul className="side-contents" onClick={() => renderHomePage()}><h3 ><span className="Icon-h"><AiFillHome /> </span><span className="Title-icon"> Home</span> </h3></ul>

                <ul className="side-contents" onClick={() => renderEditPage()}><h3> <span className="Icon-y"><BiEdit /> </span> <span className="Title-icon"> Edit</span> </h3></ul>

                <ul className="side-contents" onClick={() => renderRecentPage()}><h3 > <span className="Icon-a"><BsClockHistory /> </span> <span className="Title-icon"> Recent  </span></h3></ul>
 
                <ul className="side-contents" onClick={() => renderTrendingPage()}><h3 > <span className="Icon-z"> <HiTrendingUp /> </span> <span className="Title-icon"> Trending  </span></h3> </ul>


                <ul className="side-contents" onClick={() => renderPlayPage()}><h3 >   <span className="Icon-g"> <BsCollectionPlay /> </span> <span className="Title-icon"> Play(New) </span></h3> </ul>


                <ul className="side-contents"><Link to="/Events"  style={{textDecoration:"none" }} > <h3> <span className="Icon-s"><FaSearch /> </span><span className="Title-icon"> Search </span> </h3></Link></ul>


                <ul className="side-contents link-1" id="m2-c" onClick={() => setIsOpen(true)}><h3>  <span className="Icon-w" ><BiLogOut />  </span ><span className="Title-icon" > Log-out </span> </h3></ul>


                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                  <div id="Logout-div">
                    <h1 id="head-logout-para">Do you really want to Logout? </h1>
                    <h3 id="para-logout">If you click  button then it will terminate your current session</h3>
                    <button onClick={Logout} className="custom-btn btn-2 edited-btn">Logout</button>
                  </div>

                </Modal>


              </div>
            </div>
          </div>

          <div id="custm-main-container">{customHtmlPage}</div>
          {/* <h1>hellloooo</h1> */}

        </div>

        <Footer />
      </div >
    </>
  )
}
export default UserHome;