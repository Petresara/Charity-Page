import React from "react";
import "./InfoAbout.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import childrenAboutUs from "../../../Images/about-us-chilldren.png";

const InfoAbout = () => {
    return(
     <div className="about-info">
     <div className="about-info-container">
        <div className="about-info-content-img">
        <img src={childrenAboutUs} alt="chilldren"/>
        <div className="pulse-container">
        <div className="pulse-circle large circle1"></div>
        <div className="pulse-circle large circle2"></div>
        <div className="pulse-circle small circle3"></div>
        <div className="pulse-circle small circle4"></div>
        </div>
        <div className="total-raised-container">
        <div className="total-raised-icon">
        <IoWalletSharp />
        </div>
        <div className="total-raised-text">
          <ul>
            <li>Total Raised<span>$25000</span></li>
          </ul>
          <div className="progress-container">
             <div className="progress-bar">
              <div className="progress-value"></div>
             </div>
          </div>
        </div>
        </div>
        </div>
        <div className="about-info-content-text">
         <h4 className="info-title">About Us</h4>
         <h2 className="info-subtitle">We Can Save More Lifes With Your Helping Hand.</h2>
         <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
         </p>
         <ul>
            <li>
                <IoMdCheckmarkCircleOutline />The standard chunk of Lorem Ipsum used
                since.
            </li>
            <li>
                <IoMdCheckmarkCircleOutline /> Randomised words which don't look even
                slightly believable.
            </li>
            <li>
            <IoMdCheckmarkCircleOutline  /> Making this the first true generator on
            the Internet.
            </li>
         </ul>
         <button className="about-btn">More About</button>
        </div>
     </div>
     </div>
    );
}

export default InfoAbout;