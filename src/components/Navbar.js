import React, { useState } from 'react';
import './Navbar.css';
import '../index.css';
import Icon from '../assets/Icon.png';
import homeillustration from '../assets/homeillustration.png';
import logo01 from '../assets/logo01.png';
import logo02 from '../assets/logo02.png';
import logo03 from '../assets/logo03.png';
import logo04 from '../assets/logo04.png';
import logo05 from '../assets/logo05.png';
import logo06 from '../assets/logo06.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Icon} alt="Brand Logo" />
          <span className="font-bold text-2xl ml-2 text-black">Positivus</span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <a href="#about">About us</a>
          <a href="#services">Services</a>
          <a href="#usecases">Use cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <button className="quote-btn bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-100 ml-4">
            Request a quote
          </button>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <div className="content-container">
        <div className="content flex flex-col md:flex-row items-center p-8">
          <div className="text-content md:w-1/2">
            <h1 className="custom-h1">Navigating the digital landscape for success</h1>
            <p className="custom-p">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="consultation-btn bg-black text-white border border-black px-4 py-2 rounded hover:bg-gray-100">
              Book a consultation
            </button>
          </div>
          <div className="illustration md:w-1/2 mt-8 md:mt-0">
            <img src={homeillustration} alt="Home Illustration" className="w-full h-auto" />
          </div>
        </div>
        <div className="logos-container">
          <img src={logo01} alt="Logo 1" className="mx-2" />
          <img src={logo02} alt="Logo 2" className="mx-2" />
          <img src={logo03} alt="Logo 3" className="mx-2" />
          <img src={logo04} alt="Logo 4" className="mx-2" />
          <img src={logo05} alt="Logo 5" className="mx-2" />
          <img src={logo06} alt="Logo 6" className="mx-2" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
