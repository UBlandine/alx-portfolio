import React from "react";
import "./Services.css"; // Link to your CSS file

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "I am a creative web designer passionate about crafting visually appealing and user-friendly websites. I focus on designing engaging layouts, intuitive user interfaces, and seamless user experiences. With a strong understanding of design principles and web technologies, I work closely with clients to bring their visions to life.",
      icon: "🌐",
      link: "#",
    },
    {
      title: "Search Engine Optimization",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: "📈", // Placeholder icon
      link: "#",
    },
    {
      title: "Video Editing",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      icon: "🎥", // Placeholder icon
      link: "#",
    },
  ];

  return (
    <div className="services-container" id="services">
      <h1 className="services-title">
        My <span>Services</span>
      </h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.link} className="learn-more">
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
