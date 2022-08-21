import React from "react";
import { Helmet } from "react-helmet";
import './Custom.css'
// import front001 from '/images/front001.png'
function Home(){
    
    return(
    <>
  <Helmet>
        <style>{"body { background-color: rgb(84, 84, 84); }"}</style>
       
      </Helmet>
      
      <nav class="navbar">
  <div id="trapezoid">
    <a class="sub-home" href="/">Home</a>
    <a href="#About" class="expandHome">About</a>
     <div class="subnav">
     <button class="subnavbtn">Clients<i class="fa fa-caret-down"></i></button>
       <div class="subnav-content">
        <div id="subnav-trapezoid">
          <a href="#Clients">Burger King</a>
          <a href="#Clients">Southwest Airlines</a>
          <a href="#Clients">Levi Strauss</a>
        </div>
       </div>
    </div>
  
     <div class="subnav">
     <button class="subnavbtn">Services<i class="fa fa-caret-down"></i></button>
       <div class="subnav-content">
        <div class="subnav-trapezoid">
          <a href="#Services">Print Design</a>
          <a href="#Services">Web Design</a>
          <a href="#Services">Mobile App Development</a>
         </div>
       </div>
      </div>
    <a href="https://codepen.io/pec-man" class="expandHome">Contact</a>
  </div>
</nav>

<img src="/ReactEvento/images/front001.png" alt="hi" />

<div className="container jumbotron"> 
<h2>hbubfk</h2>

</div>
    </>
    )
}
export default Home;