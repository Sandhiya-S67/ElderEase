import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: "Margaret Johnson", role: "Elderly User", quote: "ElderEase has transformed my daily life with seamless care.", rating: "★★★★★" },
    { name: "Tom Roberts", role: "Caregiver", quote: "A game-changer for monitoring my mother's health.", rating: "★★★★★" },
    { name: "Linda Chen", role: "Health Expert", quote: "Revolutionary AI integration for elderly care.", rating: "★★★★★" },
    { name: "James Carter", role: "Family Member", quote: "Peace of mind with 24/7 support.", rating: "★★★★☆" },
    { name: "Sarah Lee", role: "Nurse", quote: "Simplifies care coordination effectively.", rating: "★★★★★" },
    { name: "Robert Davis", role: "Tech Enthusiast", quote: "Innovative and user-friendly design.", rating: "★★★★☆" },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>{testimonial.quote}</p>
              <div className="rating">{testimonial.rating}</div>
              <div className="testimonial-name">{testimonial.name}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;