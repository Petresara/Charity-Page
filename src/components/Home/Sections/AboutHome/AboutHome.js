import React from "react";
import littleGirl from "../../../Images/littleGirl.jpg";
import './AboutHome.css';
import { IoWalletSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


function AboutHome() {
    return(
        <div className="home-aboutHome">
        <div className="home-aboutHome-container">
           <div className="aboutHome-content-img">
           <img src={littleGirl}/>
           <div className="design-container">
        <div className="cube cube1"></div>
        <div className="cube cube2"></div>
        </div>
           <div className="total-raised-container-home">
           <div className="total-raised-icon-home">
           <IoWalletSharp />
           </div>
           <div className="total-raised-text-home">
             <ul>
               <li>Total Raised<span>$25000</span></li>
             </ul>
             <div className="progress-container-home">
                <div className="progress-bar-home">
                 <div className="progress-value-home"></div>
                </div>
             </div>
           </div>
           </div>
           </div>
           <div className="aboutHome-content-text">
            <h4 className="abouHome-title">About Us</h4>
            <h2 className="aboutHome-subtitle">We Can Save More Lifes With Your Helping Hand.</h2>
            <p className="aboutHome-text">
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
            <button className="aboutHome-btn">More About</button>
           </div>
        </div>
        </div>
       );
}

export default AboutHome;