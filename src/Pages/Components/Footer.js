// import {faYoutube,faGithub,faInstagram,faFacebook }from '@fortawesome/free-brands-svg-icons'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
  return (
    <>

      <div className="outer">
        <div className="main ">
          {/* <span></span>
          <span></span> */}
        </div>

        <div className="foot-container">
          <div className=" footer">

          <div className='nav-txt-container'></div>


            {/* links */}
           

            <div className='Side_links'>
                <ul className='List'>
                  <li className='Order'>
                    <span><Link to="" style={{ textDecoration: "none", color: "#88888d" }}>Products </Link></span>
                  </li>
                  <li className='Order'>
                    <span><Link to="" style={{ textDecoration: "none", color: "#88888d" }}>Contacts </Link> </span>
                  </li>
                  <li className='Order'>
                    <span><Link to="" style={{ textDecoration: "none", color: "#88888d" }}>About </Link></span>
                  </li>
                  <li className='Order'>
                    <span><Link to="" style={{ textDecoration: "none", color: "#88888d" }}>Links </Link></span>
                  </li>

                </ul>
              </div>
          


            <div className='main-link-container'>
              <div className='link-subCat'>
                <ul className='List'>
                  <li className='li-head'> <span style={{ textDecoration: "none", color:"rgb(172, 164, 164)"}}>Information</span></li>
                  <li className='li-sub'> <span><Link to="" style={{ textDecoration: "none" }}>Contacts </Link> </span></li>
                  <li className='li-sub'> <span><Link to="" style={{ textDecoration: "none" }}>About </Link> </span></li>
                </ul>
              </div>

              <div className='link-subCat'>
                <ul className='List'>
                  <li className='li-head'> <span style={{ textDecoration: "none", color:"rgb(172, 164, 164)"}}>Evo Part</span></li>
                  <li className='li-sub'> <span><Link to="/co-signup" style={{ textDecoration: "none" }}>Organiger </Link> </span></li>
                  <li className='li-sub'> <span><Link to="" style={{ textDecoration: "none"}}>Promotion </Link> </span></li>
                </ul>
              </div>
            </div>

{/* CopyRight */}

<div className='CopyRight'><p>Copyright © 2023 EVENTO. All rights reserved.</p></div>


            {/* Social media links */}

            <div className="social_media">
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span className="icon-adjust"><AiFillFacebook /> </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span className="icon-adjust" ><AiOutlineTwitter /></span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span className="icon-adjust"><AiFillInstagram /></span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span className="icon-adjust"><AiFillGithub /></span>

                </li>

                <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span className="icon-adjust"><AiFillYoutube /></span>
                </li>
              </ul>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}
export default Footer