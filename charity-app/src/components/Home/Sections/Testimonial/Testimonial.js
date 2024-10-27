import React from "react";
import "./Testimonal.css";
import TeastimonialCarous from "../../../Sliders/TestimonialCarousel/TestimonialCarous";

function Testimonial() {
    return(
        <div className="home-testimonial">
          <div className="home-testimonial-container">
           <div className="testimonial-container-content">
           <h4 className="testimonial-subhead">Testimonial</h4>
           <h2 className="testimonial-head">What People Say About Us</h2>
           <p className="testimonial-text">
           There are many variations of passages of Lorem Ipsum available, but
           the majority have suffered alteration in some form,
           </p>
           </div>
           <div className="te-carous-container">
            <TeastimonialCarous />
           </div>
          </div>
        </div>
    );
}
export default Testimonial;