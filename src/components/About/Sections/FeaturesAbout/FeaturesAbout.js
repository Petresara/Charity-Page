import React from "react";
import './FeaturesAbout.css';
import foodCard from '../../../Images/food-card-home.jpg';
import educationCard from '../../../Images/education-card-home.jpg';
import medicineCard from '../../../Images/medicine-card-home.jpg';
import Laura from '../../../Images/Laura-Faiary-about.png';


function FeaturesAbout() {
    return(
    <div className="features-about">
     <div className="features-about-container">
      <div className="features-content">
        <h4 className="features-content-heading">We Love To Help Poor</h4>
        <h2 className="features-heading">Our Featured Campaigns</h2>
        <p className="features-text">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, 
        </p>
      </div>
       <div className="about-cards">
        <div className="education-container-card-ab">
          <img src={educationCard} alt="educationCard" className="education-card-img-ab"/>
          <h2 className="link-title-ab"><a href="/#">Help To Build A Secure Life Of a Poor Children.</a></h2>
          <div className="education-raised-container-ab">
        <div className="education-percents-ab">
            <p>65%</p>
        </div>
          <div className="features-progress-container-ab">
             <div className="features-progress-bar-ab">
              <div className="features-progress-value-ab"style={{ width: '65%' }}></div>
             </div>
          </div>
        <div className="features-raised-text-ab">
         <p className="total-raised-left-ab">Goal:<span>$3,000.00</span></p>
         <p className="total-raised-right-ab">Raised:<span>$2,000.00</span></p>
        </div>
        </div>
          <div className="about-Laura-ab">
           <img src={Laura} alt="Laura"/>
           <p className="laura-link-ab"><a href="/#">Laura Falary</a></p>
           <button className="donate-btn-ab">Donate Now</button>
          </div>
        </div>
        <div className="food-container-card-ab">
          <img src={foodCard} alt='foodCard' className="food-card-img-ab"/>
          <h2 className="link-title-ab"><a href="/#">Ensure Clean Water To The African Kids.</a></h2>
          <div className="food-raised-container-ab">
        <div className="food-percents-ab">
            <p>75%</p>
        </div>
          <div className="features-progress-container-ab">
             <div className="features-progress-bar-ab">
              <div className="features-progress-value-ab"style={{ width: '75%' }}></div>
             </div>
          </div>
        <div className="features-raised-text-ab">
         <p className="total-raised-left-ab">Goal:<span>$3,000.00</span></p>
         <p className="total-raised-right-ab">Raised:<span>$2,000.00</span></p>
        </div>
        </div>
          <div className="about-Laura-ab">
           <img src={Laura} alt="Laura"/>
           <p className="laura-link-ab"><a href="/#">Laura Falary</a></p>
           <button className="donate-btn-ab">Donate Now</button>
          </div>
        </div>
        <div className="medicine-container-card-ab">
          <img src={medicineCard} alt= 'medicineCard' className="medicine-card-img-ab"/>
          <h2 className="link-title-ab"><a href="/#">Your Help Can Save A Human Life From Death.</a></h2>
          <div className="medicine-raised-container-ab">
        <div className="medicine-percents-ab">
            <p>85%</p>
        </div>
          <div className="features-progress-container-ab">
             <div className="features-progress-bar-ab">
              <div className="features-progress-value-ab"style={{ width: '85%' }}></div>
             </div>
          </div>
        <div className="features-raised-text-ab">
         <p className="total-raised-right-ab">Goal:<span>$3,000.00</span></p>
         <p className="total-raised-left-ab">Raised:<span>$2,000.00</span></p>
        </div>
        </div>
          <div className="about-Laura-ab">
           <img src={Laura} alt="Laura"/>
           <p className="laura-link-ab"><a href="/#">Laura Falary</a></p>
           <button className="donate-btn-ab">Donate Now</button>
          </div>
        </div>
       </div>
      </div>
     </div>
    );
}
export default FeaturesAbout;