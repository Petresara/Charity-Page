import React from "react";
import "./InfoContact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";


function InfoContact() {
  return (
    <div className="info-container">
      <div className="info-container-content">
        <div className="info-address">
          <div className="info-box-contact">
            <FaMapMarkerAlt />
          </div>
          <h3 className="info-heading">Address</h3>
          <h4 className="info-info">7 Green Lake Street Crawfordsville, IN 47933</h4>
        </div>
        <div className="info-email">
          <div className="info-box-contact">
            <MdEmail />
          </div>
          <h3 className="info-heading">Email Us</h3>
          <h4 className="info-info">charitio@gmail.com</h4>
          <h4 className="info-info">helloyou@gmail.com</h4>
        </div>
        <div className="info-phone">
          <div className="info-box-contact">
          <BsTelephoneFill />
          </div>
          <h3 className="info-heading">Call Now</h3>
          <h4 className="info-info">+1 800 123 456 789</h4>
          <h4 className="info-info">+1 800 123 654 987</h4>
        </div>
      </div>
    </div>
  );
}

export default InfoContact;
