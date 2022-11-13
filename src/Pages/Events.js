import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Cards from "./Components/Cards";
import Ecards from "./Components/Ecard";
import { BsSearch } from 'react-icons/bs'

function Events() {
    return (
        <>
            <Navbar />
            
            {/* searchBar */}

            <div className="search">
                <input className="search-bar" type='search' />
                <button className="Search-icon"><BsSearch /></button>
            </div>
            <img className="img-back-top" alt="background" src="./ReactEvento/images/coolBoy.png" />

            {/* <Cards/> */}
            <Ecards />
            <Footer />
        </>
    )
}

export default Events;