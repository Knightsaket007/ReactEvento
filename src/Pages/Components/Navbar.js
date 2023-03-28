import './Nav.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
function Navbar() {

  useEffect(() => {
    let sess = 1;
    const sign = document.getElementById('sign-button')
    
    if (sess === 1) {
      sign.style.display = "none"
    }
  })

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title" style={{ fontSize: "28px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>Evento</Link>
          </div>
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links lnk-hov">
          <Link to="/" >Home</Link>
          <Link to="/Events" >Events</Link>
          <Link to="/about" >About</Link>
          <Link to="" >Contact</Link>
        </div>
        {/* my edits */}
        <div id='sign-button'>
          <div className="ct-btn">
            <div className="gr-move">
              <span className="gr-shadow2"></span>
              <button className="gradient-neon" ><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link></button>


            </div>
          </div>
        </div>
        {/* my edits */}
      </div>



    </>
  )
}
export default Navbar;