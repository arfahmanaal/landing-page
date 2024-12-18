import React from 'react';
import './Footer.css';
import logofooter from '../assets/logofooter.png';
import linkedin1 from '../assets/linkedin1.png';
import twitter from '../assets/twitter.png';
import fb from '../assets/fb.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logofooter} alt="Positivus Logo" />
        </div>
        <nav className="footer-nav">
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin1} alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-contact">
          <h3><span className="highlight-green">Contact us:</span></h3><br/>
          <p>Email: info@positivus.com</p><br/>
          <p>Phone: 555-567-8901</p><br/>
          <p>Address: 234 Main St, Moonstone City, 
          <br/>Outlast State 12345</p><br/>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Email" />
          <button className="subscribe-button">Subscribe to news</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <nav className="footer-bottom-nav">
          <a href="#privacy">Privacy Policy</a>
          
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
