import React from 'react';
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import Logo from "../components/Images/LOGO white bg png 3.png"

const Footer = () => {
const Pdf_render = (url)=>{
   if(!url){
    console.error("document required")
    return;
   }
   window.open(url, "_blank");

}
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <ul className="footer-links">
          <li><Link to="/">Our Verticals</Link></li>
                <li>
              <Link to="/Our_products">Our Products</Link>
            </li>
            <li>
              <Link to="/Global_capability">Global Capability Centre Advisory</Link>
            </li>
            <li>
              <Link to="/team">Who we are</Link>
            </li>
            {/* <li>
              <Link to="/News">News</Link>
            </li> */}
            <li>
              <Link to="#Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='footer-middle'>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div className="footer-center">
          <img src={Logo} alt="Blu Parrot Logo" className="footer-logo" loading="lazy" />
          <address className="footer-address">
            Second floor, 94, Sector 44, Gurugram, Haryana 122003<br />
            nk@bluparrot.in<br />
            +91-9873666587
          </address>
          <button className="contact-button"><Link style={{textDecoration:'none', color:'white'}} to='/Contact_Us'>Contact Us</Link></button>
        </div>

        <div className="footer-right">
        <ul className="social-icons">
            <li><a href="https://www.linkedin.com/company/bluparrot" target='_blank' ><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.facebook.com/Bluparrotventures" target='_blank' ><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Bluparrot &nbsp;&nbsp;</p> || <p style={{cursor:'pointer'}} onClick={()=>{Pdf_render(`https://drive.google.com/file/d/13bKefSczuvEseKt0nEpYxfGQafX8Uj_T/view?usp=sharing`)}}>&nbsp;&nbsp;Terms and Condition&nbsp;&nbsp; </p> || <p style={{cursor:'pointer'}} onClick={() =>{Pdf_render(`https://drive.google.com/file/d/128vZ8eEHdL5CMk-B6Q7Xqloe7p8QqhDQ/view?usp=sharing`)}}>&nbsp;&nbsp; Policy </p>
      </div>
      </div>
      </div>

      
    </footer>
  );
};

export default Footer;
