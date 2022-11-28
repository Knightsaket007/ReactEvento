import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Cards from "./Components/Cards";
// import Ecards from "./Components/Ecard";
import { BsSearch } from 'react-icons/bs'
import Cards from "./Components/Cards";
import './Components/Ecards.css'

function Events() {
    return (
        <>
            <Navbar />
            
            {/* searchBar */}

            <div className="search">
                <input className="search-bar" type='search' />
               <button className="Search-icon"><BsSearch /></button>
           
            </div>
            
            <img className='img-ended-event' alt="fest"src="../ReactEvento/images/street.jpg"/>
      
           
            <Cards/>
            {/* <Ecards/> */}
            <Footer />
        </>
    )
}

export default Events;