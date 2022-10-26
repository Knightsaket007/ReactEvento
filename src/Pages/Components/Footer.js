// import {faYoutube,faGithub,faInstagram,faFacebook }from '@fortawesome/free-brands-svg-icons'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
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