// import {faYoutube,faGithub,faInstagram,faFacebook }from '@fortawesome/free-brands-svg-icons'
import { AiFillGithub,AiFillInstagram,AiFillYoutube,AiOutlineTwitter,AiFillFacebook } from 'react-icons/ai';
import "./Footer.css"
function Footer() {
  return (
    <>
   
      <div className="outer">
        <div className="main ">
          <span></span>
          <span></span>
        </div>
        <div className="foot-container">
          <div className=" footer">
            <span></span>
            <span></span>
            <div className="social_media">
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span style={{fontSize:"20px",marginTop:'10px'}}><h1><AiFillFacebook/></h1> </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span style={{fontSize:"20px",marginTop:'10px'}}><h1><AiOutlineTwitter/></h1></span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span style={{fontSize:"20px",marginTop:'10px'}}><h1><AiFillInstagram/></h1></span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span style={{fontSize:"20px",marginTop:'10px'}}><h1><AiFillGithub/></h1></span>
                
                </li>
                
                <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span style={{fontSize:"20px",marginTop:'10px'}}><h1><AiFillYoutube/></h1></span>
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