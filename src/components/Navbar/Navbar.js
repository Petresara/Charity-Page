import React from "react";
import './Navbar.css';
import charitioLogo from '../Images/charitioLogo.png';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi'; 
import ScrollToTop from "./ScrollToTop";
import Hamburger from "./Hamburger";

function Navbar() {
    return (
        <nav className="navbar">        
            <div className="navbar-container">
                <div className="hamburger-menu">
                    <Hamburger/>
                </div>
                <div className="navbar-img-container">
                    <img src={charitioLogo} id='charitioLogo' alt=""/>
                </div>
                <div className="navbar-list">
                    <div className="navbar-home-dropdown">
                        <button className="home-dropdown-btn">
                            <Link to="home">Home</Link>
                        </button>
                        <div className="home-dropdown-menu">
                            <ul className="navbar-dropdown-list">
                                <li className="dropdown-link">Home Charity</li>
                                <li className="dropdown-link">Home Education</li>
                                <li className="dropdown-link">Home Wildlife</li>
                                <li className="dropdown-link">Home Ocean Pollution</li>
                                <li className="dropdown-link">Home World Pandemic</li>
                            </ul>
                        </div>
                    </div>
                    <button className="link-btn">
                        <Link to="about">About</Link>
                    </button>
                    <button className="link-btn">
                    <Link to="contact">Contact</Link>
                    </button>
                </div>
                <div className="buttons">
                    <button id="donate-btn"><Link to="contact">Donate Now</Link></button>
                    <button id="search-btn"><Link to="contact"><BiSearch /></Link></button>
                </div>
            </div>
            <ScrollToTop/>
        </nav>
    );
}

export default Navbar;
