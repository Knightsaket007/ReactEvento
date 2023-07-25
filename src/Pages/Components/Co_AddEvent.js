import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { MdAddPhotoAlternate } from 'react-icons/md';
import axios from "axios";

const Co_AddEvents = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [seats, setSeats] = useState("");
    const [address, setAddress] = useState("");
    const [imageSrc, setImageSrc] = useState('');
    const [imageObj, setImageObj] = useState('');


    const handleImage = (e) => {
        const file = e.target.files[0];
        setImageObj(file);
        console.log("image is :", imageObj)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);

            };
            reader.readAsDataURL(file);
        }
    }


    const validate = () => {

        if (title && description && price && dateTime && seats && address && (imageSrc && imageSrc.length > 0)) {

            return true;
        }
        toast.warn("Fill the empty fields")
        return false;
    }

    function Event_Data(event) {
        event.preventDefault();
        if (validate()) {
            console.log(title, description);

            let formdata = new FormData();
            formdata.append("title", title)
            formdata.append("description", description)
            formdata.append("price", price)
            formdata.append("datetime", dateTime)

            formdata.append("seats ", seats)
            formdata.append("address", address)
            formdata.append("imageObj", imageObj)
            axios.post('http://localhost:5000/co_Admin/Event_Data',formdata

                // title: title,
                // description: description,
                // price: price,
                // dateTime: dateTime,
                // seats: seats,
                // imageObj: imageObj,
                // address: address,


        ).then(res => {
                if (res.data === "success") {
                    console.log("inserted successfully");
                } else {
                    console.log("error");
                }
            })

            
        }

    }


    return (
        <>

            <div id="flex-add-evendt">

                <form id="form-in" onSubmit={Event_Data}>
                    <br />
                    <label ><b>Title</b></label><br />
                    <div className="Box-flex  ">
                        <input onChange={(e) => setTitle(e.target.value)} className="edit-inputs inp-pos" ></input>
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>

                    </div>



                    <label ><b>Description</b></label><br />
                    <div className="Box-flex ">
                        <textarea onChange={(e) => setDescription(e.target.value)} type="text" className="edit-inputs txt-box inp-pos" ></textarea><br />
                        <div className="cross-detail"> lfjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>



                    <label ><b>Category</b></label><br />
                    <div className="Box-flex">
                        <select  className=" classic edit-inputs inp-pos" >
                            <option value="Select">Select</option> 
                            <option value="Esports">Esports</option> 
                            <option value="Function">Function</option> 
                            <option value="Football">Football</option>
                             </select>
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>


                    <label ><b>Price</b></label><br />
                    <div className="Box-flex">
                        <input type="number" onChange={(e) => setPrice(e.target.value)} className="edit-inputs inp-pos" />
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>

                    <label ><b>Seats</b></label><br />
                    <div className="Box-flex  ">
                        <input onChange={(e) => setSeats(e.target.value)} type="number" className="edit-inputs inp-pos"></input>
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>




                    <label ><b>Date and Time</b></label><br />
                    <div className="Box-flex  ">
                        <input onChange={(e) => setDateTime(e.target.value)} type="datetime-local" className="edit-inputs inp-pos"></input>
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>

                    <label ><b>Address</b></label><br />
                    <div className="Box-flex  ">
                        <input onChange={(e) => setAddress(e.target.value)} className="edit-inputs inp-pos"></input>
                        <div className="cross-detail">gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>



                    <div className="Box-flex  ">

                        <div className="inp-pos" id="img-cen">
                            <label htmlFor="upload-im" id="Add-Photo">Upload photo <MdAddPhotoAlternate /></label>
                            <div id="img-empty-upload">
                                {imageSrc && <img style={{ width: "100%", height: "100%", borderRadius: "4px" }} src={imageSrc} alt="" />}                            </div>
                        </div>

                        <input onChange={handleImage} name="imageObj" enctype="multipart/form-data" id="upload-im" accept="image/png, image/jpeg" type="file" />

                        <div className="cross-detail" style={{ marginTop: "20px" }}>gfffffffffffffffffffffffff loej vkjs fjk ndndnfd  fk dk fkd f dk fkdk f fjf jfdj fjd fjndjfnjdnfnfdg  gdfbdfdb f vc cvb fcb fgb fgbfbgfbfgx  f fxgbfgxbgbgfxvfxbbgffgbxgf</div>
                    </div>

                    <div className="cen" style={{ marginTop: "30px" }}>
                        <button type="submit" className="custom-btn btn-2 ">PUBLISH</button>
                    </div>

                </form>



            </div>

            <ToastContainer />

        </>
    )
}

export default Co_AddEvents;