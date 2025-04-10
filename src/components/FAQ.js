import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    { question: "What is ElderEase?", answer: "A platform using AI for health monitoring, reminders, and wellness support." },
    { question: "Is my data secure?", answer: "Yes, with robust encryption and compliance with data regulations." },
    { question: "Can I connect devices?", answer: "Yes, integrate health devices for vital sign tracking." },
    { question: "Mobile app available?", answer: "No, it is currently a web application only." },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer"><p>{faq.answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;