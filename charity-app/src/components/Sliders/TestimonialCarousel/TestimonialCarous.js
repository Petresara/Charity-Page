import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { RiDoubleQuotesR } from "react-icons/ri";
import TestimonialCarouselData from "./TeastimonialCarousData";
import './TestimonialCarous.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function TeastimonialCarous() {
    const carouselRef = useRef(null);  

    const items = TestimonialCarouselData.map((type) => (
        <div className="item-testimonial" key={type.name}>
            <div className="item-testimonial-img">
                <img src={type.image} alt="testimonial" />
            </div>
            <div className="item-testimonial-desc">
                <RiDoubleQuotesR className="quote-icon" />
                <p>{type?.description}</p>
            </div>
            <div className="item-testimonial-name">
                <p><strong>{type?.name}</strong></p>
            </div>
            <div className="item-testimonial-title">
                <p>{type?.title}</p>
            </div>
        </div>
    ));

    return (
        <div className="testimonial-carousel-container">
            <AliceCarousel
                ref={carouselRef}  
                mouseTracking
                items={items}
                responsive={{
                    0: { items: 1 },
                    767: { items: 1 },
                    1023: { items: 2 },
                    1440: { items: 2 },
                }}
                infinite={true}
                autoPlay={true}
                autoPlayInterval={3000}
                disableDotsControls
                disableButtonsControls
            />
            <div className="carousel-arrows">
                <button
                    className="carousel-arrow left-arrow"
                    onClick={() => carouselRef.current.slidePrev()} 
                >
                    <FiArrowLeft size={24} />
                </button>
                <button
                    className="carousel-arrow right-arrow"
                    onClick={() => carouselRef.current.slideNext()} 
                >
                    <FiArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default TeastimonialCarous;
