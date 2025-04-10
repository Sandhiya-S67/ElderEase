import React from 'react';
import { FaHeartbeat, FaBell, FaExclamationTriangle, FaSmile } from 'react-icons/fa';
import { IoMdMic } from 'react-icons/io';

const Features = () => {
  const features = [
    {
      icon: <FaHeartbeat size={48} />,
      title: "Health Monitoring",
      description: "Real-time tracking of vital signs for peace of mind.",
      link: "#",
      linkText: "Discover More"
    },
    {
      icon: <IoMdMic size={48} />,
      title: "Voice Assistant",
      description: "Intuitive support for daily tasks and reminders.",
      link: "#",
      linkText: "Explore Now"
    },
    {
      icon: <FaExclamationTriangle size={48} />,
      title: "Emergency Alerts",
      description: "Instant notifications for caregivers in emergencies.",
      link: "#",
      linkText: "Learn About Alerts"
    },
    {
      icon: <FaSmile size={48} />,
      title: "Emotional Wellness",
      description: "Tools to support mental health and emotional stability.",
      link: "#",
      linkText: "See Wellness Tools"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Innovative Features</h2>
        <p className="section-subtitle">Revolutionary Features Tailored for Elders</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href={feature.link} className="btn btn-outline">{feature.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
