import React, { useState } from 'react';
import contactImage from '../assets/contact.png';
import './Contact.css';

const ContactForm = () => {
  const [contactType, setContactType] = useState('sayHi');

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
    <>
    <div className="flex items-center mb-4">
    <h2 className="h2 text-3xl font-bold mr-4">
      <span className="highlight-green">Contact Us</span>
    </h2>
    <p className="p text-gray-600">
    Connect with Us: Let's Discuss Your Digital Marketing Needs
    </p>
  </div>
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="contact-type">
          <label>
            <input
              type="radio"
              value="sayHi"
              checked={contactType === 'sayHi'}
              onChange={handleContactTypeChange}
            />
            Say Hi
          </label>
          <label>
            <input
              type="radio"
              value="getQuote"
              checked={contactType === 'getQuote'}
              onChange={handleContactTypeChange}
            />
            Get a Quote
          </label>
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" required />
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" placeholder="Email" required />
          <label htmlFor="message">Message*</label>
          <textarea id="message" placeholder="Message" required></textarea>
          <button className='contact-btn' type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={contactImage} alt="Contact Illustration" />
      </div>
    </div>
    </>
  );
};

export default ContactForm;
