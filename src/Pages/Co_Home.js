import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Co_AddEvent from "./Components/Co_AddEvent";
import Co_Edit from "./Components/Co_Edit";
import Co_Bank from "./Components/Co_Bank";
import Co_Events from "./Components/Co_Events";
import Co_Stats from "./Components/Co.Stats";
import { VscDiffAdded } from 'react-icons/vsc';
import { BiEdit } from 'react-icons/bi';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { CgListTree } from 'react-icons/cg';
import { MdDateRange } from 'react-icons/md'
import { MdAddPhotoAlternate } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { BsBank } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiPencilLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import "./Components/Co_Home.css";
import { BsShieldLockFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Modal from "./Components/Modal";
// import { Link } from "react-router-dom";
import MyChart from './Components/MyChart';

const Co_Home = () => {
    const Navigate = useNavigate();
    const [customHtmlPage, setCustomHtmlPage] = useState(null);
    const [Pages, setPages] = useState('addEvents');

    // const [imageSrc, setImageSrc] = useState('');
    useEffect(() => {
        // renderAddPage();

    }, []);



    // if(Pages==="addEvents"){
    //    setCustomHtmlPage(
    //     <Co_AddEvent/>
    //    )
    // }

    const renderPage = () => {

        switch (Pages) {
            case 'addEvents':
                return <Co_AddEvent />;

            case 'edit':
                return <Co_Edit />;
            case 'bank':
                return <Co_Bank />;
            case 'events':
                return <Co_Events />;
            case 'stats':
                return <Co_Stats />;

            default:
                return null;
        }
    }




    // const renderAddPage = () => {
    //     let title = "";
    //     let description = "";
    //     let price = "";
    //     let dateTime = "";
    //     let seats = "";
    //     let address = "";
    //     let image = "";
    //     let imageSrc = "";

    //     const validate = () => {

    //         if (title && description && price && dateTime && seats && address && (image && image.length > 0)) {

    //             return true;
    //         }
    //         toast.warn("Fill the empty fields")
    //         return false;
    //     }

    //     function Event_Data(event) {
    //         event.preventDefault();
    //         if (validate()) {
    //             console.log(title, description); 


    //             axios.post('http://localhost:5000/co_Admin/Event_Data', {
    //                 title: title,
    //                 description: description,
    //                 price: price,
    //                 dateTime: dateTime,
    //                 seats: seats,
    //                 address: address,
    //                 image: image,

    //             }).then(res => {
    //                 if (res.data === "success") {
    //                     console.log("inserted successfully");
    //                 } else {
    //                     console.log("error");
    //                 }
    //             })

    //         }

    //     }

    //     const handleTitleChange = (e) => {
    //         // setTitle(e.target.value);
    //         title = e.target.value; // Update the title variable
    //         console.log(e.target.value);
    //     };
    //     const handleDescriptionChange = (e) => {
    //         // setDescription(e.target.value);
    //         description = e.target.value;
    //         console.log(e.target.value);
    //     };
    //     const handlePriceChange = (e) => {
    //         // setPrice(e.target.value);
    //         price = e.target.value;
    //         console.log(e.target.value);
    //     };
    //     const handleDateChange = (e) => {
    //         // setDate(e.target.value);
    //         dateTime = e.target.value;
    //         console.log(e.target.value);
    //     };


    //     const handleSeatsChange = (e) => {
    //         // setSeats(e.target.value);
    //         seats = e.target.value;
    //         console.log(e.target.value);
    //     };
    //     const handleAddress = (e) => {
    //         // setAddress(e.target.value);
    //         address = e.target.value;
    //         console.log(e.target.value);
    //     };

    //     const handleImage = (e) => {
    //         const file = e.target.files[0]; // Get the selected file
    //         const reader = new FileReader();

    //         reader.onload = () => {
    //           imageSrc = reader.result; // Set the image source
    //           console.log(imageSrc);
    //         };

    //         if (file) {
    //           reader.readAsDataURL(file); // Read the file as a data URL
    //         }
    //       };

    //     setCustomHtmlPage(

    //         <>
    //             {/* <input type="button">click</input> */}
    //             <div id="flex-add-evendt">

    //                 <form id="form-in" onSubmit={Event_Data}>
    //                     <br />
    //                     <label ><b>Title</b></label><br />
    //                     <div className="Box-flex  ">
    //                         <input onChange={handleTitleChange} className="edit-inputs inp-pos" ></input>
    //                         <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>

    //                     </div>



    //                     <label ><b>Description</b></label><br />
    //                     <div className="Box-flex ">
    //                         <textarea onChange={handleDescriptionChange} type="text" className="edit-inputs txt-box inp-pos" ></textarea><br />
    //                         <div className="cross-detail"> lfjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>


    //                     <label ><b>Price</b></label><br />
    //                     <div className="Box-flex">
    //                         <input type="number" onChange={handlePriceChange} className="edit-inputs inp-pos" />
    //                         <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>

    //                     <label ><b>Seats</b></label><br />
    //                     <div className="Box-flex  ">
    //                         <input onChange={handleSeatsChange} type="number" className="edit-inputs inp-pos"></input>
    //                         <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>




    //                     <label ><b>Date and Time</b></label><br />
    //                     <div className="Box-flex  ">
    //                         <input onChange={handleDateChange} type="datetime-local" className="edit-inputs inp-pos"></input>
    //                         <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>

    //                     <label ><b>Address</b></label><br />
    //                     <div className="Box-flex  ">
    //                         <input onChange={handleAddress} className="edit-inputs inp-pos"></input>
    //                         <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>



    //                     <div className="Box-flex  ">

    //                         <div className="inp-pos" id="img-cen">
    //                             <label htmlFor="upload-im" id="Add-Photo">Upload photo <MdAddPhotoAlternate /></label>
    //                             <div id="img-empty-upload">
    //                             <img src={imageSrc} alt="" />
    //                             </div> 
    //                         </div>

    //                         <input id="upload-im" accept="image/png, image/jpeg" type="file" onChange={handleImage} />

    //                         <div className="cross-detail" style={{ marginTop: "20px" }}>gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
    //                     </div>

    //                     <div className="cen" style={{ marginTop: "30px" }}>
    //                         <button type="submit" className="custom-btn btn-2 ">PUBLISH</button>
    //                     </div>

    //                 </form>



    //             </div>

    //         </>
    //     );

    // };


    const renderRecentPage = () => {

        setCustomHtmlPage(
            <>

                <div id="dash-flex">
                    <div id="views-box" className="report-box" ><h1>Views <FaEye /></h1><p className="inner-record">150</p></div>
                    <div id="sale-box" className="report-box"><h1>Sale <FaSellsy /></h1><p className="inner-record">20</p></div>
                    <div id="earning-box" className="report-box"><h1>Earning <FaMoneyBill /></h1><p className="inner-record">$1000</p></div>


                </div>

                <div id="hr-ruler"></div>
                <br />
                <MyChart />

                <table id="ana-table">

                    <tr style={{ fontSize: "20px", backgroundColor: "black" }}>
                        <th>Product</th>
                        <th>product id</th>
                        <th>sale</th>
                        <th>earning</th>
                    </tr>



                    <tr>
                        <td>val 1fd  fgb fg bgf fbgv gvf  gfb fg gfgbfc b fv  gfrt</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>
                    <tr>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                        <td>val 1</td>
                    </tr>

                </table>

                <div id="mob-hide"></div>

            </>
        );
    };

    const [eventpop, setEventpop] = useState(false)
    const renderEventsPage = () => {

        setCustomHtmlPage(
            <>
                <div id="Events-info-container">
                    <div id="inner-detail-flex">
                        <img id="e-pic" src="https://cdn.discordapp.com/attachments/1056612171309666316/1078364110296715386/skt_As_you_journey_onward_your_mind_is_suddenly_filled_with_a_v_c1f43e4e-ca3e-4943-9a9a-9e1cd107c315.png" alt="wait" ></img>
                        <div id="e-all-info">
                            <p id="title-eve-h" className="tit-abs" onClick={() => setEventpop(true)}>this is title section of the event</p>

                            <p id="title-eve-h" className="grp-alig "><h2 id="txtset"><FaEye /> 123</h2></p>
                            <p id="title-eve-h" className="grp-alig"><h2 id="txtset"><FaSellsy /> 10</h2></p>
                            <p id="title-eve-h" className="grp-alig" style={{ width: "45%", float: "left" }}><h3 style={{}} id="txtset"><MdDateRange />10-12-2023</h3></p>
                            <p id="Bin" style={{ float: "right", margin: "0" }}><h1 ><AiTwotoneDelete /></h1></p>
                        </div>
                    </div>
                </div>




            </>

        );
    };

    const renderEditPage = () => {
        setCustomHtmlPage(<>

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


        </>);
    };

    const renderBankPage = () => {
        setCustomHtmlPage(
            <>
                <img src="/ReactEvento/images/bank.svg" alt="fetching..." id="bnk-ills" />






               
            </>
        );
    };


    const [isOpen, setIsOpen] = useState(false);

    function Logout() {
        console.log("this is logout")
        axios.get('http://localhost:5000/co_Admin/Co-admin-logout').then(res => {
            if (res.data === "success") {
                Navigate("/")
            }
        })
    }

    return (
        <>
            <div id="bdy">
                <Navbar userType="coadmin" />

                <div className="super-main" style={{ backgroundColor: "rgba(165, 8, 238, 0.795)" }}>
                    <div className="main-sidebar" style={{ backgroundColor: "rgb(102, 8, 114)" }}>
                        <div className="side-content-box">
                            <div style={{ display: "flex", textAlign: "center" }}><div className="side-prof-img"> <img style={{ height: "100%", width: "100%" }} src="https://cdn.discordapp.com/attachments/1056612171309666316/1078364110296715386/skt_As_you_journey_onward_your_mind_is_suddenly_filled_with_a_v_c1f43e4e-ca3e-4943-9a9a-9e1cd107c315.png" alt="wait" ></img></div><span id="side-name">Name knv </span></div>
                            <div className="Unorder">

                                <ul className="side-contents" onClick={() => setPages('addEvents')} ><h3 ><span className="Icon-z"><VscDiffAdded /> </span><span className="Title-icon"> Add</span> </h3></ul>

                                <ul className="side-contents" onClick={() => setPages('edit')}><h3> <span className="Icon-y"><BiEdit /> </span> <span className="Title-icon"> Edit</span> </h3></ul>

                                <ul className="side-contents" onClick={() => setPages('stats')}><h3 > <span className="Icon-s"><TbDeviceDesktopAnalytics /> </span> <span className="Title-icon"> Analytics  </span></h3></ul>

                                <ul className="side-contents" onClick={() => setPages('events')}><h3 > <span className="Icon-z"> <CgListTree /> </span> <span className="Title-icon"> Events  </span></h3> </ul>

                                <ul className="side-contents" onClick={() => setPages('bank')}><h3 >   <span className="Icon-g"> <BsBank /> </span> <span className="Title-icon"> Bank Detail </span></h3> </ul>


                                <ul className="side-contents link-1" id="m2-c" onClick={() => setIsOpen(true)}><h3>  <span className="Icon-w" ><BiLogOut />  </span ><span className="Title-icon" > Log-out </span> </h3></ul>

                                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                                    <div id="Logout-div">
                                        <h1 id="head-logout-para">Do you really want to Logout? </h1>
                                        <h3 id="para-logout">If you click  button then it will terminate your current session</h3>
                                        <button onClick={Logout} className="custom-btn btn-2 edited-btn">Logout</button>
                                    </div>

                                </Modal>


                                <Modal open={eventpop} onClose={() => setEventpop(false)}>
                                    <h2 style={{ textAlign: "center" }}>Edit</h2>
                                    <div id="all-change-container">
                                        <form id="form-in">
                                            <br />
                                            <label >Title</label><br />
                                            <input className="edit-inputs"></input><br />
                                            <label >Description</label><br />
                                            <textarea type="text" className="edit-inputs txt-box inp-pos" ></textarea><br />
                                            <label >Phone.No</label><br />
                                            <input type="datetime-local" className="edit-inputs inp-pos"></input><br />
                                            <label >Address</label><br />
                                            <input className="edit-inputs inp-pos"></input><br />
                                            <button type="submit" style={{ fontSize: "17px" }} className="custom-btn btn-2 pass-change" ><p>SAVE</p></button>

                                        </form>
                                    </div>
                                </Modal>


                            </div>
                        </div>
                    </div>

                    {/* <div id="custm-main-container1" style={{ backgroundColor: "" }}>{customHtmlPage} </div> */}
                    <div id="custm-main-container1" style={{ backgroundColor: "" }}>{renderPage()} </div>
                    {/* <h1>hellloooo</h1> */}

                </div>

                <ToastContainer />

                <Footer />
            </div>

        </>
    )
}

export default Co_Home;