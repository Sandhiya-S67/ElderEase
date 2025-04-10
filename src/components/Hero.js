import React, { useEffect } from 'react';
import { FaSpotify, FaApple, FaGoogle } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const handleScroll = () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to ElderEase</h1>
          <p className="hero-subtitle">Your Companion in Care</p>
          <p className="hero-description">
            Experience cutting-edge AI technology designed for comprehensive elderly care, focusing on health monitoring, reminders, and emotional wellness.
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn">Discover Features</a>
            <a href="#testimonials" className="btn">See Testimonials</a>
          </div>
          <div className="podcast-links">
            <p>Listen to our podcast:</p>
            <div className="podcast-buttons">
              <a href="#" className="btn"><FaSpotify /> Stream on Spotify</a>
              <a href="#" className="btn"><FaApple /> Apple Podcasts</a>
              <a href="#" className="btn"><FaGoogle /> Google Podcasts</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;