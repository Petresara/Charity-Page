import React, { useState, useEffect } from "react";
import VolunteerCarousData from "./VolunteerCarousData";
import './VolunteerCarous.css';

function VolunteerCarous() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = VolunteerCarousData.length; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 === VolunteerCarousData.length ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const visibleItems = VolunteerCarousData.slice(currentIndex, currentIndex + visibleSlides)
        .concat(VolunteerCarousData.slice(0, Math.max(0, currentIndex + visibleSlides - VolunteerCarousData.length)));

    return (
        <div className="carousel-container">
            <div className="carousel-content">
              <h3 className="carousel-heading">Expert Team</h3>
              <h1 className="main-heading">Meet Our Volunteer Team</h1>
              <p className="carousel-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="carousel-track">
                {visibleItems.map((volunteer, index) => (
                    <div key={index}>
                        <img
                            src={volunteer.image}
                            alt={volunteer.name}
                        />
                        <a href="#" className="volunteer-name">
                            {volunteer.name}
                        </a>
                        <p className="volunteer-desc">{volunteer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VolunteerCarous;
