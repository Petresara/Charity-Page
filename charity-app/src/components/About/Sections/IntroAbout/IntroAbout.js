import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5"; 
import { CgPlayButton } from "react-icons/cg";
import IntroImg from "../../../Images/intro.jpg"; 
import "./IntroAbout.css"; 

const IntroAbout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isVideoLoading, setIsVideoLoading] = useState(true); 


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const handleVideoLoad = () => {
        setIsVideoLoading(false);
    };

    return (
        <div className="about-intro">
            <div className="about-intro-container">
                <div className="img-about-intro-container">
                    <img src={IntroImg} alt="Intro" className="intro-image" />
                    <button onClick={toggleModal} className="play-button">
                        <CgPlayButton />
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-background">
                    <div className="modal-content">
                        <IoCloseOutline className="close-icon" onClick={toggleModal} />

                        <div className="video-container">
                            <iframe
                                className="video"
                                src="https://www.youtube.com/embed/iSbzh0r9IV4"
                                title="YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                onLoad={handleVideoLoad} 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
             <h2 className="about-inro-text">See what we do for the 
                <span> poor people and children</span>
            </h2>
        </div>
    );
};

export default IntroAbout;
