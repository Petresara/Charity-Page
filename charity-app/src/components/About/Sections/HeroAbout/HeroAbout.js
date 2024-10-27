import React from "react";
import "../HeroAbout/HeroAbout.css";

function HeroAbout() {
    return(
     <div className="about-hero">
      <div className="about-hero-container">
       <div className="about-hero-content">
         <h2 className="about-hero-heading">About Us</h2>
         <p className="about-hero-path">{" "}
            <a href="home">Home</a> <span>/</span> About
         </p>
       </div>
     </div>
     </div>
    );
}

export default HeroAbout;