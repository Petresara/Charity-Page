import React from "react";
import eventsFirst from "../../../Images/events-first.jpg";
import eventsSecond from "../../../Images/events-second.jpg";
import eventsThird from "../../../Images/events-third.jpg";
import './Events.css';

function Events() {
    return (
        <div className="home-events">
            <div className="events-container">
                <div className="events-content">
                    <h4 className="events-subheading">Events</h4>
                    <h2 className="events-heading">Fundraising Events</h2>
                    <p className="events-text">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                </div>
                <div className="event-cards">
                    <div className="card-container">
                        <img className="event-image" src={eventsFirst} alt="Event 1" />
                        <div className="card-content">
                            <h4 className="card-subhead">25 Nov, 2021</h4>
                            <h2 className="card-head"><a href="/#">Help The Poor From Your Soul</a></h2>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                    <div className="card-container">
                        <img className="event-image" src={eventsSecond} alt="Event 2" />
                        <div className="card-content">
                            <h4 className="card-subhead">26 Nov, 2021</h4>
                            <h2 className="card-head"><a href="/#">Help Children Raise Out Of Poverty.</a></h2>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                    <div className="card-container">
                        <img className="event-image" src={eventsThird} alt="Event 3" />
                        <div className="card-content">
                            <h4 className="card-subhead">27 Nov, 2021</h4>
                            <h2 className="card-head"><a href="/#">Providing Education Is The Valuable Gift</a></h2>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
