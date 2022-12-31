import './Cards.css'
import Info from "./Info.json"
import { Link } from 'react-router-dom'
// import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from 'react-icons/ti';
import React from 'react';
// import Rating from "./Rating.json"

function Cards() {

  // function getStarElements(val) {
   
  //   const  fullStars = Math.floor(val);
  //    console.log(fullStars)
  //    const halfStars = val % 1 >= 0.5  ? 1 : 0;
  //    const emptyStars = 5 - fullStars - halfStars;
 
  //    // Create the full, half, and empty star elements
  //    const starElements = [];
  //    for (let i = 0; i < fullStars; i++) {
  //      const element = <TiStarFullOutline key={i} />;
  //      starElements.push(element);
  //    }
  //    if (halfStars) {
  //      const element = <TiStarHalfOutline key={fullStars} />;
  //      starElements.push(element);
  //    }
  //    for (let i = 0; i < emptyStars; i++) {
  //      const element = <TiStarOutline key={fullStars + halfStars + i} />;
  //      starElements.push(element);
  //    }
 
  //    return starElements;
  //  }


  return (
    <>
      <div className="main-card-container">
        {
          Info.map((value, index) => {
            return (
              <>


                <div className='card-body'>
                  <div className='card-img'>
                    <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
                  </div>
                  <div className='card-content'>
                    <div className='title-div'>
                      <p className='head-para'><Link to='/eventinfo' style={{ textDecoration: "none" }}> {value.Title}</Link> </p>
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


      <div className="main-card-container">

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your... xd j jjd c djcbfj cjf  nf jjc fjc jf cjf chjf jch jf cjfchfb</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your...</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your...</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your...</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your...</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
            <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy otherwise you are resposible for your...</Link> </p>

            <h2 >₹100</h2>
            <h3 className='price-cut'>₹150</h3>
            <h4 className='seats'>Seats remain:<span> 000</span> </h4>

          </div>
        </div>

        {/* Mobile display cards */}


        <div className='mob-card-body'>
          <div className='mob-img-div'>
            <img className='pureMob-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='mob-content'>
            <p className='mob-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy jhkjh s jhwg deh hbdhjgwjdg b...</Link> </p>
            <h2 className='price'>₹100  <span className='mob-price-cut'>₹150</span></h2>

            <h4 className='mob-seats'>Seats remain:<span> 000</span> </h4>
            {/* </div> */}
          </div>
        </div>


        <div className='mob-card-body'>
          <div className='mob-img-div'>
            <img className='pureMob-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='mob-content'>
            <p className='mob-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy hhhhhh jhg bjyg b mygvnb hgnhf nng jhjggyj</Link> </p>
            <h2 className='price'>₹100  <span className='mob-price-cut'>₹150</span></h2>

            <h4 className='mob-seats'>Seats remain:<span> 000</span> </h4>
            {/* </div> */}
          </div>
        </div>


      </div>


    </>
  )

}
export default Cards;