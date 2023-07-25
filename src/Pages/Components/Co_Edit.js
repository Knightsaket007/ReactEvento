import { RiPencilLine } from 'react-icons/ri';
import { BsShieldLockFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Co_Edits = () => {  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [imageSend, setImageSend] = useState("");
    const [imageSrc, setImageSrc] = useState("https://static.miraheze.org/windowswallpaperwiki/thumb/6/67/User_(Windows_10_1507-1909).png/150px-User_(Windows_10_1507-1909).png");
 
    

    useEffect(() => {
        // setImageSrc("/ReactEvento/images/coolBoy.png")
        const fetchEmail = async () => {
            try {
                const response = await axios.get('http://localhost:5000/co_Admin/fetchEmail');
                const emailData = response.data;
                setName(emailData.Name);
                setEmail(emailData.Email);
                setPhone(emailData.Phone);
                setAddress(emailData.Address);
                setImageSrc(`data:image/${emailData.Extension};base64, ${emailData.ImagePath}`);
            } catch (error) {
                console.error('Error fetching email:', error);
            }
        };

        fetchEmail();
    }, []);

    const handleImage =(e)=>{
        const file = e.target.files[0];
        setImageSend(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);

            };
            reader.readAsDataURL(file);
        }
    }

    const updateData = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("name", name)
        formdata.append("email", email)
        formdata.append("phone", phone)
        formdata.append("imageSend", imageSend)


        axios.post("http://localhost:5000/co_Admin/updateUser",formdata 
        ).then(res => {

            if (res.data === 'success') {
                toast.success("Update successful!");
            }
            else
                toast.error("Something went wrong! Please try later")
        })
    }
  

    return (
        <>
            <div id="warning">Wrong Information Of Any Identification Attribute Result Permanent Ban </div>
            <div id="Edit-page">
                <div  id="edit-img-container"><img id="zoom-img" style={{ height: "100%", width: "100%", borderRadius: "50%" }} src={imageSrc} alt="fetching.." ></img>

                    <label for="profile-picture-upload" class="custom-button"><RiPencilLine /> Edit</label>
                    <input id="profile-picture-upload" onChange={handleImage} type="file" accept="image/png, image/jpeg" />
                </div>

                <form id="form-in">
                    <br />
                    <label >Name</label><br />
                    <input className="edit-inputs " id="sz" onChange={(e) => setName(e.target.value)} value={name} /><br />
                    <label >Email</label><br />
                    <input className="edit-inputs " id="sz" style={{ fontSize: "13px", filter: "blur(.8px)" }} value={email} disabled /><br />
                    <label >Phone.No</label><br />
                    <input className="edit-inputs" id='sz' onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
                    <label >Address</label><br />
                    <input className="edit-inputs " id="sz" onChange={(e) => setAddress(e.target.value)} value={address} /><br />
                    <button type="submit" style={{ fontSize: "17px" }} className="custom-btn btn-2 pass-change" ><p>Change Password <BsShieldLockFill /></p></button>

                </form>
            </div>
            <div className="cen">
                <button type="submit" id="edit-btn" style={{ fontSize: "17px" }} className="custom-btn btn-2" onClick={updateData} >Update</button></div>

            <ToastContainer />

        </>
    )
}

export default Co_Edits;