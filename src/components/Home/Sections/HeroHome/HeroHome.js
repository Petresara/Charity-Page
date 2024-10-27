import React from 'react';
import './HeroHome.css';
import homeGirl from "../../../Images/homeGirl.png"
import totalProjects from "../../../Images/totalProjects.png";
import littleboy from "../../../Images/littleboy.png";
import HeroCarous from '../../../Sliders/HeroCarousel/HeroCarous';
import { FiDollarSign } from "react-icons/fi";


function HeroHome() {
  return (
    <div className='hero-home-container'>
      <div className='hero-home-content-container'>
        <h3 className='hero-home-subheading'>Help the Poor Children</h3>
        <h1 className='hero-home-heading'>Your Mercy Can Change Someone’s Life</h1>
        <p className='hero-home-description'>We help local nonprofits access the funding, tools, training, and support they need to become more.</p>
        <button className='hero-home-button'>Get Started</button>
      </div>
      <div className='hero-home-images-container'>
        <div className='hero-firstImgs-container'>
          <img src={homeGirl} alt='Girl' className='girl' />
          <div className='hero-carousel'>
            <HeroCarous />
          </div>
        </div>
        <div className='hero-secondImgs-container'>
          <div className="total-project-container">
            <img src={totalProjects} className='total-project'/>
            <div className="project-content">
              <div className="icon">
                <FiDollarSign size={30} />
              </div>
              <div className="text">
                <h2>252+</h2>
                <p>Total Projects</p>
              </div>
            </div>
          </div>
          <img src={littleboy} alt='Boy' className='boy' />
        </div>
      </div>
    </div>

  );
}
export default HeroHome;