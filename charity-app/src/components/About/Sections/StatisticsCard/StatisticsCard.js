import React from "react";
import "./StatisticsCard.css";

function StatisticsCard() {
    return(
     <div className="about-statistics-card">
        <div className="statistics-card-container">
            <div className="statistics-card-info">
         <div className="statistics-card-first-info">
            <h3 className="statistics-card-heading">250+</h3>
            <p className="statistics-card-text">Expert Volunteer</p>
         </div>
         <div className="statistics-card-second-info">
          <h3 className="statistics-card-heading">1026+</h3>
          <p className="statistics-card-text">Happy Families</p>
         </div>
         <div className="statistics-card-third-info">
          <h3 className="statistics-card-heading">25M</h3>
          <p className="statistics-card-text">Total Donation</p>
         </div>
         <div className="statistics-card-forth-info">
          <h3 className="statistics-card-heading">1250</h3>
          <p className="statistics-card-text">Successful Campains</p>
          </div>
         </div>
        </div>
     </div>
    );
}
export default StatisticsCard;