import './Cards.css'
import Info from "./Info.json"
import { Link } from 'react-router-dom'
// import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import React from 'react';
// import Rating from "./Rating.json"

function Cards() {

  return (
    <>
      <div className="main-card-container">
        {
          Info.map((value) => {
            return (
              <>


                <div className='card-body'>
                  <div className='card-img'>
                    <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
                  </div>
                  <div className='card-content'>
                    <div className='title-div'>
                      <p className='head-para'><Link to='/eventinfo'  key={value.id} style={{ textDecoration: "none" }}> {value.Title}</Link> </p>
                    </div>

                    <h2 >₹100</h2>
                    <h3 className='price-cut'>₹150</h3>
                    <h4 className='seats'>Seats remain:<span> 000</span> </h4>

                  </div>
                </div>

                {/* Mobile */}

                <div className='mob-card-body'>
                  <div className='mob-img-div'>
                    <img className='pureMob-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
                  </div>
                  <div className='mob-content'>
                    <p className='mob-para'><Link to='/' style={{ textDecoration: "none" }}>{value.Title}</Link> </p>
                    <h2 className='price'>₹100  <span className='mob-price-cut'>₹150</span></h2>

                    <h4 className='mob-seats'>Seats remain:<span> 000</span> </h4>


                  </div>
                </div>



              </>

            )
          })
        }
      </div>

    </>
  )

}
export default Cards;