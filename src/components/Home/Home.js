import React from 'react';
import './Home.css';
import HeroHome from './Sections/HeroHome/HeroHome';
import IntroHome from './Sections/IntroHome/IntroHome';
import AboutHome from './Sections/AboutHome/AboutHome';
import FeatureHome from './Sections/FeatureHome/FeatureHome';
import VolunteersTeamHome from './Sections/VolunteerTeamHome/VolunteerTeamHome';
import Testimonial from './Sections/Testimonial/Testimonial';
import JoinVolunteer from './Sections/JoinVolunteers/JoinVoluteers';
import Events from './Sections/Events/Events';
import Blog from './Sections/Blog/Blog';
import SupportersHome from './Sections/SupportersHome/SupportersHome';

const Home = () => {
    return (
    <div className='home-conatiner'>
       <HeroHome />
       <IntroHome />
       <AboutHome />
       <FeatureHome />
       <VolunteersTeamHome />
       <Testimonial />
       <JoinVolunteer />
       <Events />
       <Blog />
       <SupportersHome />
    </div>
    );
}
export default Home;