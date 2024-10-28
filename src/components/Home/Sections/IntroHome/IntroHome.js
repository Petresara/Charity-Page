import React from "react";
import "./IntroHome.css";
import food from "../../../Images/food.png";
import water from "../../../Images/water.png";
import medicine from "../../../Images/medicine.png";
import education from "../../../Images/education.png";

function IntroHome() {
    return(
     <div className="home-cards">
      <div className="home-cards-container">
       <div className="home-food-card">
        <div className="home-img-card-container">
          <img src={food} alt="food"/>
        </div>
        <a href="#">Healthy Food</a>
       </div>
       <div className="home-water-card">
        <div className="home-img-card-container">
          <img src={water} alt="water"/>
        </div>
        <a href="#">Clean Water</a>
       </div>
       <div className="home-medicine-card">
        <div className="home-img-card-container">
          <img src={medicine} alt="medicine"/>
        </div>
        <a href="#">Medical Care</a>
       </div>
       <div className="home-education-card">
        <div className="home-img-card-container">
          <img src={education} alt="education"/>
        </div>
        <a href="#">Child Education</a>
       </div>
      </div>
     </div>
    );
}

export default IntroHome;
