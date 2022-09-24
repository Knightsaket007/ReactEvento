import './Nav.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
         <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title" style={{fontSize:"28px"}}>
            Evento
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
          <Link to="" >Github</Link>
          <Link to="" >Home</Link>
          <Link to="" >Event</Link>
          <Link to="" >About</Link>
          <Link to="" >Contact</Link>
        </div>
      </div>
        </>
    )
}
export default Navbar