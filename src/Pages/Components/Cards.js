import './Cards.css'
function Cards(){
    return(
        <>
        {/* <div className="container">

         <div className="box">
    <span></span>
    <div className="content">
      <h2>Card two</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <a href="#">Read More</a>
    </div>
  </div>
  </div> */}
   <div className="container">
        <section className="card">
          <div className="card_inner">
            <div className="card_inner__circle">
              <img  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/rocket.png" />
            </div>
            <div className="card_inner__header">
              {/* <img src="http://www.pixeden.com/media/k2/galleries/343/002-city-vector-background-town-vol2.jpg" /> */}
              <img src="/ReactEvento/images/neon002.gif" alt="wait" ></img>
            </div>
            <div className="card_inner__content">
              <div className="title">Personal edition</div>
              <div className="price">$19.99</div>
              <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br /> <br />Fusce sed tortor in orci ultrices tempor quis ut leo. Fusce imperdiet eget ante eu faucibus. Nam rhoncus sapien</div>
            </div>
            <div className="card_inner__cta">
              <button>
                <span>Buy now</span>
              </button>
            </div>
          </div>
        </section>
       
       
      </div>
        </>
    )
}
export default Cards;