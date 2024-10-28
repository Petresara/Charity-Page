import React from "react";
import "./JoinVolunteers.css";
import volunteer from "../../../Images/volunteer.png";

function JoinVolunteer() {
    return(
        <div className="home-joinVolunteer">
         <div className="volunteer-home-container">
           <div className="volunteer-home-content">
             <div className="volunteer-home-heading">
              <h1 className="volunteer-head">Lets Chenge The World With Humanity</h1>
             </div>
             <div className="volunteer-home-btn">
              <button className="volunteer-btn">Became A Volunteer</button>
             </div>
           </div>
           <div className="home-volunteer-img">
            <img src={volunteer} alt="volunteer" className="volunteer-img"/>
           </div>
         </div>
        </div>
    );
}
export default JoinVolunteer;