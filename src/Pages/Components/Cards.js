import './Cards.css'
import Info from "./Info.json"
import { Link } from 'react-router-dom'
import React from 'react';

function Cards() {
  let intervalId;
  let clickInfo = {};

  function sendDataToServer(data) {
    if (Object.keys(data).length !== 0) {
      const dataArray = Object.entries(data).map(([id, clicks]) => ({ id, clicks }));
      const url = 'http://localhost:5000/co_Admin/userActions';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataArray),
      })
        .then(response => {
          if (response.body === "ok") {
            // localStorage.removeItem('clickInfo');
          } else {
            throw new Error('Failed to send data to server');
          }
        })

    }
  }

  function incrementClickCount(id) {
    const clickCount = clickInfo[id] || 0;
    const newClickCount = clickCount + 1;
    clickInfo[id] = newClickCount;
    console.log("clickinfo is ", clickInfo);
    return newClickCount;
  }


  function handleClick(id) {
    console.log("card id is:", id);
    const newClickCount = incrementClickCount(id);
    console.log("click count:", newClickCount);
  }


  function startInterval() {

    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      sendDataToServer(clickInfo);
      clickInfo = {};
    }, 10000);
  }

  startInterval();

  window.addEventListener('beforeunload', () => {

    sendDataToServer(clickInfo);
  });


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
                      <p className='head-para'><Link to='/eventinfo' style={{ textDecoration: "none" }} onClick={() => handleClick(value.id)}>{value.Title}</Link></p>
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
                    <p className='mob-para'><Link to='/eventinfo' style={{ textDecoration: "none" }} >{value.Title}</Link> </p>
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