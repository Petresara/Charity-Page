import React, { useState } from "react";
import "../Navbar/Hamburger.css";
import { Link } from "react-router-dom";

function Hamburger() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="navButton">
            <input type="checkbox" checked={menuOpen} onChange={toggleMenu} />
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <div id="navMenu" className={menuOpen ? "open" : ""}>
                <span className="close-icon" onClick={toggleMenu}>×</span>
                <ul>
                    <Link to="home"><li>Home</li></Link>
                    <Link to="about"><li>About</li></Link>
                    <Link to="contact"><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Hamburger;
