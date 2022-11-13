import './Nav.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title" style={{ fontSize: "28px" }}>
          <Link to="/" > Evento</Link>
          </div> 
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/Events" >Events</Link>
        <Link to="" >About</Link>
        <Link to="" >Contact</Link>
        </div>
{/* my edits */}
        <div className='sign-button'>
        <div className="ct-btn">
                <div className="gr-move">
                    <span className="gr-shadow2"></span>                        
                    <button className="gradient-neon" ><Link to="/">Login</Link></button>
                </div>
            </div>
      </div>
{/* my edits */}
      </div>

      
      
    </>
  )
}
export default Navbar