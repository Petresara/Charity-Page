import React, { useState, useEffect } from "react";
import SupportCarousData from "./SupportCarousData";
import './SupportCarous.css';

function SupportCarous() {
    const [currIndex, setCurrIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); 

    const visibleSupportersCount = isMobile ? 3 : SupportCarousData.length; 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };
        
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIndex((prevIndex) => 
                prevIndex + 1 === SupportCarousData.length ? 0 : prevIndex + 1
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const visibleSupporters = SupportCarousData.slice(currIndex, currIndex + visibleSupportersCount)
        .concat(SupportCarousData.slice(0, Math.max(0, currIndex + visibleSupportersCount - SupportCarousData.length)));

    return(
        <div className="supporters-carousel">
            <div className="carousel-track-supp">
                {visibleSupporters.map((supporter, index) => (
                    <div key={index}>
                        <img 
                            src={supporter.image}
                            alt={`Supporter ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SupportCarous;
