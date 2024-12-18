import React from 'react';
import './Cta.css';
import CTAillustration from '../assets/CTAillustration.png';

function Cta() {
  return (
    <div className="cta-card">
      <div className="cta-card-content">
        <h2 className="cta-card-title">Let's make things happen</h2>
        <p className="cta-card-text">
          Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
        <button className="cta-card-button">
          Get your free proposal
        </button>
      </div>
      <div className="cta-card-illustration-container">
        <img src={CTAillustration} alt="CTA Illustration" className="cta-card-illustration" />
      </div>
    </div>
  );
}

export default Cta;
