import React from "react";
import '../Navbar/Hamburger.css';
import { Link } from "react-router-dom";

function Hamburger() {
    return(
     <div>
        <div className="navButton">
         <input type="checkbox"/>
         <span className="bar"></span>
         <span className="bar"></span>
         <span className="bar"></span>
         <ul id="navMenu">
          <Link to="home"><a href="/#"><li>Home</li></a></Link>
          <Link to="about"><a href="/#"><li>About</li></a></Link>
          <Link to="contact"><a href="/#"><li>Contact</li></a></Link>
         </ul>
        </div>
     </div>
    );
}

export default Hamburger;