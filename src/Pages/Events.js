import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Cards from "./Components/Cards";
// import Ecards from "./Components/Ecard";
import { BsSearch } from 'react-icons/bs'
import Cards from "./Components/Cards";
import './Components/Ecards.css'
// import { useEffect } from "react";

function Events() {

    // useEffect(() => {
    // let txt=document.getElementById('filter').innerHTML;
    // console.log(txt);
    // },[])

    return (
        <>
            <Navbar />

            {/* searchBar */}

            <div className="search" >
                <select id="Filter" >
                    <option value="1">All</option>
                    <option value="2">new event</option>
                    <option value="3">more eventsssssssssssssssssssssskkkkkkkk</option>
                    <option value="3">more eventsssssssssssssssssssssskkkkkkkk</option>
                </select>

                <input className="search-bar" type='search' />
                <button className="Search-icon"><BsSearch /></button>

            </div>

            <img className='img-ended-event' alt="fest" src="../ReactEvento/images/street.jpg" />


            <Cards />
            <div className="line-container">
                <div className="line"></div>
            </div>
            {/* <Ecards/> */}
            <Footer />
        </>
    )
}

export default Events;