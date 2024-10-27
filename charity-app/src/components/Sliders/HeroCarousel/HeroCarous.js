import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HeroCaorusData from "./HeroCarousData";
import "./HeroCarous.css";

function HeroCarous() {
    const items = HeroCaorusData.map((type) => {
        return (
          <div className="item-hero" key={type}>
            <img src={type.image} alt="test" />
          </div>
        );
      });
      return (
        <div className="hero-carousel-container">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{ 0: { items: 1 }, 767: { items: 3 }, 1023: { items: 5 } }}
            disableDotsControls={true}
            disableButtonsControls={true}
            infinite={true}
            autoPlay={true}
            autoPlayInterval={3000}
          ></AliceCarousel>
        </div>
      );
}
export default HeroCarous;