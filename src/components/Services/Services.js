import React from "react";
import "./Services.css";
import "../../image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg";
import "../../image/bruce-mars-8YG31Xn4dSw-unsplash.jpg0";
import "../../image/rafaella-mendes-diniz-et_78QkMMQs-unsplash.jpg"

const services = [
  {
    title: "Web Design",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    icon: "📄",
    link: "#",
  },
  {
    title: "Search Engine Optimization",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country in which roasted parts of sentences fly into your mouth.",
    icon: "📊",
    link: "#",
  },
  {
    title: "Video Editing",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    icon: "🎥",
    link: "#",
  },
];

const testimonials = [
  {
    name: "Ethan McCown",
    position: "CEO XYZ Inc.",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Craig Gowen",
    position: "CEO XYZ Inc.",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Ethan McCown",
    position: "CEO XYZ Inc.",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Craig Gowen",
    position: "CEO XYZ Inc.",
    message:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    image: "https://via.placeholder.com/50",
  },
];

const ServiceCard = ({ title, description, icon, link }) => (
  <div className="service-card">
    <div className="service-icon">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <a href={link} className="service-link">
      Learn More &gt;
    </a>
  </div>
);

const TestimonialCard = ({ name, position, message, image }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} className="testimonial-image" />
    <div className="testimonial-message">{message}</div>
    <div className="testimonial-author">
      — {name}, <span className="highlight">{position}</span>
    </div>
  </div>
);

const Services = () => {
  return (
    <div>
      <div className="services-section">
        <h2 className="services-title">My <span className="highlight">Services</span></h2>
        <div className="services-container">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="testimonials-section">
        <h2 className="services-title">Client <span className="highlight">Testimonial</span></h2>
        <div className="testimonials-container testimonials-grid-two-rows">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
