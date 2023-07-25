import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BsSearch } from 'react-icons/bs'
import Cards from "./Components/Cards";
import './Components/Ecards.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const languages = [
    'French',
    'English',
    'Spanish',
    'Chinese',
    'Japanese',
    'Korean',
    'Italian',
    'German',
];


function Events() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
      setIsChecked(!isChecked);
      if(!isChecked){
        toast(" '🦄Trending Events!", {
            position: toast.POSITION.TOP_CENTER
          });
      }
    };

    // useEffect(() => {

    // }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Languages');

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };


    return (
        <div id="bb">
            <Navbar />

            <ToastContainer autoClose={2000}/>

            
            {/* searchBar */}

            <div className="search" >


                <input className="search-bar" type='search' />
                <button className="Search-icon"><BsSearch /></button>

            </div>

            {/* <div id="img-container"> <img className='img-ended-event' alt="fest" src="../ReactEvento/images/street.jpg" /></div> */}


            <div className="checkbox-wrapper-5">
                <div className="check">
                    <input type="checkbox" id="check-5"  checked={isChecked} onChange={handleToggle}/>
                    <label for="check-5"></label>
                </div>
            </div>

            <div id="img-container">
                <img className='img-ended-event' alt="fest" src="../ReactEvento/images/street.jpg" />
                <div className="overlay"></div>
            </div> 


            <div className="container">
                <div className={`select-btn ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="btn-text">{selectedLanguage}</span>
                    <span className="arrow-dwn">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                

                {isOpen && (
                    <ul className="list-items">
                        {languages.map((language, index) => (
                            <li className="item" key={index} onClick={() => handleLanguageSelect(language)}>
                                <span className="checkbox">
                                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                                </span>
                                <span className="item-text">{language}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>



            <Cards />
            <div className="line-container">
                <div className="line"></div>
            </div>
            {/* <Ecards/> */}
            <Footer />
        </div>
    )
}

export default Events;