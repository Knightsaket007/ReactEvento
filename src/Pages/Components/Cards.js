import './Cards.css'
import React, { Component } from 'react';
import Info from "./Info.json"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Cards() {
 
 
  //   const [Info, setInfo] = useState([]);

  //   useEffect(() => {t [Price,setPrice] = useState('');
  // const [Title,setTitle] = useState('');
 
  //       getAPI("./Info.json")    
  //   }, []); 


  // cons // const [Image,setImage] = useState('');
  // const [Seats,setSeats] = useState('');



  // const getAPI=(data)=>{
  //   // console.log(data)

  //   fetch(data, {
  //     headers:
  //     {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //     }
  // })
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log("hello")
  //         console.log(data)
  //         setInfo(data);
  //     })
  // }
  // // useEffect(()=>{
  // //   const fun=()=>{
  // //   axios.get('./Info.json').then((res)=>{
  // //     console.log(res.data)
  // //   })
  // // }
  // // fun();

  // // },[])




  return (   
    <>
    <div className="main-card-container">
      {
        Info.map((value,index) => {
          return (
            <>
              

              <div className='card-body'>
          <div className='card-img'>
            <img className='pure-img' src="/ReactEvento/images/seat.jpg" alt="wait" ></img>
          </div>
          <div className='card-content'>
          <div className='title-div'> 
             <p className='head-para'><Link to='/' style={{ textDecoration: "none" }}> {value.Title}</Link> </p>
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
            <p className='mob-para'><Link to='/' style={{ textDecoration: "none" }}> HELLO- world this is my product and you have to buy jhkjh s jhwg deh hbdhjgwjdg b...</Link> </p>
            <h2 className='price'>₹100  <span className='mob-price-cut'>₹150</span></h2>

            <h4 className='mob-seats'>Seats remain:<span> 000</span> </h4>
            {/* </div> */}
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