import Navbar from "./Components/Navbar";
function Home(){
    return(
        <>
        <Navbar/>
        
        

        {/* <img src="/ReactEvento/images/Pic.jpg"></img> */}
        
        <div className="ScriptTop">
          <div className="rt-container">
            <div className="col-rt-4" id="float-right">
            </div>
            <div className="col-rt-2">
              <ul>
                <li><a href="https://codeconvey.com/Tutorials/css-sticky-header-scroll">Previous Demo</a></li>
                <li><a href="https://codeconvey.com/pure-css-slideshow-autoplay-without-javascript">Back to the Article</a></li>
              </ul>
            </div>
          </div>
        </div>
        <header className="ScriptHeader">
          <div className="rt-container">
            <div className="col-rt-12">
              <div className="rt-heading">
                <h1>Auto Play Slideshow But No JS</h1>
                <h2>Build with CSS3 Animation</h2>
              </div>
            </div>
          </div>
        </header>
        <section> 
          <div className="rt-container">
            <div className="col-rt-12">
              {/* Slider */}
              <div id="slider">
                <div className="slides">
                  <div className="slider">
                    <div className="legend" />
                    <div className="content">
                      <div className="content-txt">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</p>
                      </div>
                    </div>
                    <div className="image"> <img  alt ="slide 1"src="ReactEvento/images/1.jpg" /> </div>
                  </div>
                  <div className="slider">
                    <div className="legend" />
                    <div className="content">
                      <div className="content-txt">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</p>
                      </div>
                    </div>
                    <div className="image"> <img alt="slide 2" src="ReactEvento/images/2.jpg"  /> </div>
                  </div>
                  <div className="slider">
                    <div className="legend" />
                    <div className="content">
                      <div className="content-txt">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</p>
                      </div>
                    </div>
                    <div className="image"> <img src="ReactEvento/images/3.jpg" alt="hello" /> </div>
                  </div>
                  <div className="slider">
                    <div className="legend" />
                    <div className="content">
                      <div className="content-txt">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Nam ultrices pellentesque facilisis. In semper tellus mollis nisl pulvinar vitae vulputate lorem consequat. Fusce odio tortor, pretium sit amet auctor ut, ultrices vel nibh.</p>
                      </div>
                    </div>
                    <div className="image"> <img src="ReacEvento/images/4.jpg" alt="hello"/> </div>
                  </div>
                </div>
               
              </div>
            </div> 
          </div>          
        </section>
       
      
        </>
    )
} 
export default Home;