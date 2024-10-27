import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return(
      <div className="contact-contactUs">
      <div className="contactUs-header">
           <h2 className="contactUs-heading">Have Any Question?</h2>
           <h4 className="contactUs-text">It is a long established fact that a reader will be distracted content of a page when looking.</h4>
      </div>
      <div className="contactUs-container">
          <div className="contactUs-form-container">
              <div className="form">
                  <form action="#" method="#">
                      <input type="text" name="Name" id="name-field" placeholder="Name" />
                      <input type="text" name="Lastname" id="surname-field" placeholder="Lastname" />
                      <input type="email" name="Email" id="email-field" placeholder="Email" />
                      <select name="subject" id="select-field">
                          <option value="Subject">Subject</option>
                          <option value="Subject 1">Subject</option>
                          <option value="Subject 2">Subject</option>
                          <option value="Subject 3">Subject</option>
                          <option value="Subject 4">Subject</option>
                      </select>
                      <textarea placeholder="Message" />
                      <div className="submit-container">
                      <button className="submit-button" type="submit" id="submit-btn">Send Message</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
   </div>
   
    );
}

export default ContactUs;