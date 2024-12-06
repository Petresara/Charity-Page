import React from "react";
import "./CardsAbout.css";
import food from "../../../Images/food.png";
import water from "../../../Images/water.png";
import medicine from "../../../Images/medicine.png";
import education from "../../../Images/education.png";

function CardsAbout() {
    return(
     <div className="about-cards">
      <div className="about-cards-container">
       <div className="about-food-card">
        <div className="about-img-card-container">
          <img src={food} alt="food"/>
        </div>
        <a href="/#">Healthy Food</a>
       </div>
       <div className="about-water-card">
        <div className="about-img-card-container">
          <img src={water} alt="water"/>
        </div>
        <a href="/#">Clean Water</a>
       </div>
       <div className="about-medicine-card">
        <div className="about-img-card-container">
          <img src={medicine} alt="medicine"/>
        </div>
        <a href="/#">Medical Care</a>
       </div>
       <div className="about-education-card">
        <div className="about-img-card-container">
          <img src={education} alt="education"/>
        </div>
        <a href="/#">Child Education</a>
       </div>
      </div>
     </div>
    );
}

export default CardsAbout;
