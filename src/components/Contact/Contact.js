import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="title">Get In Touch</h1>
        <div className="content">
          {/* Left Section - Form */}
         
          <div className="form-section">
          <h2>Send Us a Message</h2>
          <br /> 
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Your Phone" />
              <textarea placeholder="Write a Message" rows="5" required />
              <button type="submit" className="submit-button">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Section - Contact Details */}
          <div className="details-section">
            <h2>My Contact Details</h2>
            <br /> 
            <p>
              <strong>Email:<br /> </strong> ugirablando@gmail.com
            </p>
            <p>
              <strong>Phone 1:<br />  </strong> +250 780604876
            </p>
            <p>
              <strong>Phone 2:<br />  </strong> +250 34155222
            </p>
            <p>
            <br /> 
            <br /> 
            <br /> 
              <strong>Address:</strong>
              <br />
              Kigali, Rwanda
              <br />
              Gasabo, Bumbogo
              <br />
              San Francisco Street, M1 50F
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Copyright © 2025 All rights reserved | This template is made with ❤️
          by Blando
        </p>
        <div className="social-icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-vimeo"></i>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
