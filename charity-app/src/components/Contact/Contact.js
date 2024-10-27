import React from "react";
import HeroContact from './Sections/HeroContact/HeroContact';
import InfoContact from "./Sections/InfoContact/InfoContact";
import ContactUs from './Sections/ContactUs/ContactUs';
import Location from "./Sections/Location/Location";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section-container">
         <HeroContact />
         <InfoContact />
         <ContactUs />
         <Location />
        </div>
    );
}
export default Contact;
