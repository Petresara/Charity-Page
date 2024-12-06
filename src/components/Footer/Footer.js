import React from "react";
import charotioLogoFooter from '../Images/charitio-logo-footer.png';
import firstFooter from '../Images/first-footer.jpg';
import secondFooter from '../Images/second-footer.jpg';
import thirdFooter from '../Images/third-footer.jpg';
import forthFooter from '../Images/forth-footer.jpg';
import fifthFooter from '../Images/fifthfooter.jpg';
import sixthFooter from '../Images/sixth-footer.jpg';
import '../Footer/Footer.css';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram,TiSocialGooglePlus,} from 'react-icons/ti'
import { FiMail } from 'react-icons/fi';
import { FaPhone } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

function Footer() {
    return(
      <footer>
        <div className="footer-container">
          <div className="logo-container">
            <img src={charotioLogoFooter} alt="" className="logo-footer" />
            <p className="footer-text">Welcome and open yourself to your truest love this year with us! With the Release Process</p>
            <div className="social-media-container">
              <button className="social-media-button"> <TiSocialFacebook size={20}/></button>
              <button className="social-media-button"> <TiSocialTwitter size={20}/></button>
              <button className="social-media-button"> <TiSocialInstagram size={20}/> </button>
              <button className="social-media-button"> <TiSocialGooglePlus size={20} /> </button>
            </div>
          </div>
          <div className="services-container">
           <h2 className="services-heading">Services</h2>
           <ul>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Causes</a></li>
            <li><a href="/#">Latest News</a></li>
            <li><a href="/#">Contact us</a></li>
            <li><a href="/#">Events</a></li>
           </ul>
          </div>
          <div className="contact-container">
            <h2 className="contact-container-heading">Contact</h2>
            <p className="contact-container-text">Would you have any enquiries. Please feel free to contuct us</p>
            <p className="contact-mail"><FiMail /> &nbsp;charitio@gmail.com</p>
            <p className="contact-phone"> <FaPhone /> &nbsp;+888 (123) 869523</p>
            <p className="contact-location"> <SlLocationPin /> &nbsp;New York – 1075 Firs Avenue</p>
          </div>
          <div className="projects-container">
            <h2 className="projects-container-heading">Projects</h2>
            <div className="project-grid-container">
                        <img src={firstFooter} id='first-project' alt="Project 1" />
                        <img src={secondFooter} id='second-project' alt="Project 2" />
                        <img src={thirdFooter} id='third-project' alt="Project 3" />
                        <img src={forthFooter} id='fourth-project' alt="Project 4" />
                        <img src={fifthFooter} id='fifth-project' alt="Project 5" />
                        <img src={sixthFooter} id='sixth-project' alt="Project 6" />
            </div>
          </div>
        </div>
        <div className="footer-info">
            <p>© 2021 charitio Theme. Design By wpOcean. All Rights Reserved</p>
        </div>
      </footer>
    );
}
export default Footer;