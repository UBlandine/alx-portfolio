import React from "react";
import "./Contact.css"; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="title">Get In <span className="span">Touch </span> </h1>
      
      <div className="contact-container">
      
        <div className="contact-form">
        <h2>Drop A Message</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="form-input"
            />
            <textarea
              placeholder="Write a Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>My Contact Details</h2>
          <p>
            <strong>Email:</strong> < br />
             ugirablando@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> < br />
            +250 780 604 876
          </p>
          <p>
            <strong>Phone:</strong> < br />
            +250 734 155 222
          </p>
          <p>
            <strong>Address:</strong> < br />
            Kigali, Rwanda<br />
            Gasabo District<br />
            Bumbogo-Azam street, KK12
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
  <p>
    Copyright © 2025 All rights reserved | This template is made with{" "}
    <span className="heart">❤</span> by Blando
  </p>
  <div className="social-icons">
    {/* Replace '#' with valid URLs or remove */}
    <a href="https://www.facebook.com/yourprofile" className="social-icon">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://x.com/BUgirihirwe" className="social-icon">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com/yourprofile" className="social-icon">
      <i className="fab fa-instagram"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/blandine-ugirihirwe-3a443723a/"
      className="social-icon"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://vimeo.com/yourprofile" className="social-icon">
      <i className="fab fa-vimeo-v"></i>
    </a>
  </div>
</footer>

    </div>
  );
};

export default ContactPage;
