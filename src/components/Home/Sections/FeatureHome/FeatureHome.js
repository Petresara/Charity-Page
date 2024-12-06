import React from "react";
import './FeatureHome.css';
import foodCard from '../../../Images/food-card-home.jpg';
import educationCard from '../../../Images/education-card-home.jpg';
import medicineCard from '../../../Images/medicine-card-home.jpg';
import Laura from '../../../Images/Laura-Faiary-about.png';

function FeatureHome() {
    return (
        <div className="features-home">
            <div className="features-home-container">
                <div className="features-content">
                    <h4 className="features-content-heading">We Love To Help Poor</h4>
                    <h2 className="features-heading">Our Featured Campaigns</h2>
                    <p className="features-text">
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, 
                    </p>
                </div>
                    <div className="home-cards">
                        <div className="food-container-card">
                            <img src={educationCard} className="education-card-img" alt="Education Campaign" />
                            <h2 className="link-title"><a href="/#">Help To Build a Secure Life Of a Poor Children.</a></h2>
                            <div className="education-raised-container">
                                <div className="education-percents">
                                    <p>65%</p>
                                </div>
                                <div className="features-progress-container">
                                    <div className="features-progress-bar">
                                        <div className="features-progress-value" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="features-raised-text">
                                        <p className="total-raised-left">Goal:<span>$3,000.00</span></p>
                                        <p className="total-raised-right">Raised:<span>$2,000.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-Laura">
                                <img src={Laura} alt="Laura Falary" />
                                <p className="laura-link"><a href="/#">Laura Falary</a></p>
                                <button className="donate-btn">Donate Now</button>
                            </div>
                        </div>
                        <div className="food-container-card">
                            <img src={foodCard} className="food-card-img" alt="Food Campaign" />
                            <h2 className="link-title"><a href="/#">Ensure Clean Water To The African Kids.</a></h2>
                            <div className="food-raised-container">
                                <div className="food-percents">
                                    <p>75%</p>
                                </div>
                                <div className="features-progress-container">
                                    <div className="features-progress-bar">
                                        <div className="features-progress-value" style={{ width: '75%' }}></div>
                                    </div>
                                    <div className="features-raised-text">
                                        <p className="total-raised-left">Goal:<span>$3,000.00</span></p>
                                        <p className="total-raised-right">Raised:<span>$2,000.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-Laura">
                                <img src={Laura} alt="Laura Falary" />
                                <p className="laura-link"><a href="/#">Laura Falary</a></p>
                                <button className="donate-btn">Donate Now</button>
                            </div>
                        </div>
                        <div className="medicine-container-card">
                            <img src={medicineCard} className="medicine-card-img" alt="Medicine Campaign" />
                            <h2 className="link-title">
                                <a href="/#">Your Help Can Save A Human Life From Death.</a>
                            </h2>
                            <div className="medicine-raised-container">
                                <div className="medicine-percents">
                                    <p>85%</p>
                                </div>
                                <div className="features-progress-container">
                                    <div className="features-progress-bar">
                                        <div className="features-progress-value" style={{ width: '85%' }}></div>
                                    
                                </div>
                                <div className="features-raised-text">
                                    <p className="total-raised-left">Goal:<span>$3,000.00</span></p>
                                    <p className="total-raised-right">Raised:<span>$2,000.00</span></p>
                                </div>
                                </div>
                            </div>
                            <div className="about-Laura">
                                <img src={Laura} alt="Laura Falary" />
                                <p className="laura-link"><a href="/#">Laura Falary</a></p>
                                <button className="donate-btn">Donate Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FeatureHome;
