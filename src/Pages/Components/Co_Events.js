import { FaEye } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa";
import { MdDateRange } from 'react-icons/md'
import { AiTwotoneDelete } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

function Co_Events() {


    const [eventpop, setEventpop] = useState(false)


    return (
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
                        <button type="submit"  className="custom-btn btn-2 edited-btn" ><p>Save</p></button>

                    </form>
                </div>
            </Modal>


        </>
    )
}
export default Co_Events