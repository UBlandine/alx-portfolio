import React from "react";

import "./ClientTes.css";

const testimonials = [
  {
    id: 1,
    image: "https://via.placeholder.com/60",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Ethan McCown",
    position: "CEO XYZ Inc",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/60",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Craig Gowen",
    position: "CEO XYZ Inc",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/60",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Ethan McCown",
    position: "CEO XYZ Inc",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/60",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    author: "Craig Gowen",
    position: "CEO XYZ Inc",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="client">
      <h1>
        Client <span className="highlight">Testimonial</span>
      </h1>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-image">
            <img src="../../image/Blando.jpg" alt="" />


            </div>
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
              <span>
                — {testimonial.author}, {testimonial.position}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
