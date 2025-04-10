import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Elderly care scene" />
        <div className="footer-logo">ElderEase</div>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p className="copyright">© 2025 ElderEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;