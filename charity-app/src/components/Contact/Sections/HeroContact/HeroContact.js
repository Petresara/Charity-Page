import React from "react";
import './HeroContact.css';

function HeroContact() {
    return(
      <div className="contact-hero">
       <div className="contact-hero-container">
        <div className="contact-hero-content">
            <h2 className="contact-hero-heading">Contact Us</h2>
            <p className="contact-hero-link"><a href="home">Home</a> <span>/</span> Contact</p>
        </div>
       </div>
      </div>
    );
}
export default HeroContact;