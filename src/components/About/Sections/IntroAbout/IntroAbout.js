import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CgPlayButton } from "react-icons/cg";
import IntroImg from "../../../Images/intro.jpg"; 
import "./IntroAbout.css"; 

const IntroAbout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="about-intro">
            <div className="about-intro-container">
                <div className="img-about-intro-container">
                    <img src={IntroImg} alt="Intro" className="intro-image" />
                    <button onClick={toggleModal} className="play-button">
                    <div className="pulse"></div> 
                    <CgPlayButton />
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className={`modal-background ${isModalOpen ? "open" : ""}`}>
                    <div className="modal-content">
                        <IoCloseOutline className="close-icon" onClick={toggleModal} />
                        <div className="video-container">
                            <iframe
                                className="video"
                                src="https://www.youtube.com/embed/iSbzh0r9IV4"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
            <h2 className="about-inro-text">
                See what we do for the <span>poor people and children</span>
            </h2>
        </div>
    );
};

export default IntroAbout;
