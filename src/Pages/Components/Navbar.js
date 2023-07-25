import './Nav.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (props.userType === "coadmin") {
      axios.get('http://localhost:5000/co_Admin/Co-admin-auth').then(res => {
        console.log(res.data)
        if (res.data === "login") {
          Navigate("/co-login")
        }
      })
    }
    else if(props.userType === "user"){ 
    axios.get('http://localhost:5000/users/users-auth').then(res => {
      console.log(res.data)
      if (res.data === "not login") {
        Navigate("/user-login")
      }
    })
  }

  }, []);




  const renderLinks = () => {
    if (props.userType === "coadmin") {
      return (
        <div className="nav-links lnk-hov">
          <Link to="/Co-Home">Home</Link>
          <Link to="/sale">Sale</Link>
          <Link to="/traffic">Traffic</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      );
    } else {
      return (
        <div className="nav-links lnk-hov">
          <Link to="/Home">Home</Link>
          <Link to="/Events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      );
    }
  };

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
        {renderLinks()}
      </div>
    </>
  )
}

export default Navbar;
