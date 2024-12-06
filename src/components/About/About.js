import React from "react";
import "../About/About.css";
import HeroAbout from "./Sections/HeroAbout/HeroAbout";
import IntroAbout from "./Sections/IntroAbout/IntroAbout";
import CardsAbout from "./Sections/CardsAbout/CardsAbout";
import InfoAbout from "./Sections/InfoAbout/InfoAbout";
import StatisticsCard from "./Sections/StatisticsCard/StatisticsCard";
import FeaturesAbout from "./Sections/FeaturesAbout/FeaturesAbout";
import VolunteersTeamAbout from "./Sections/VolunteerTeamAbout/VolunteersTeamAbout";
import SupportersAbout from './Sections/SupportersAbout/SupportersAbout';


const About = () => {
    return(
      <div className="about-container">
       <HeroAbout />
       <IntroAbout />
       <CardsAbout />
       {/* <InfoAbout /> */}
       {/* <StatisticsCard /> */}
       {/* <FeaturesAbout /> */}
       {/* <VolunteersTeamAbout /> */}
       {/* <SupportersAbout /> */}
      </div>
    );
}
export default About;
