import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import enable from '../assets/enable.png';
import disable from '../assets/disable.png';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director at XYZ Corp',
    testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateSlidePercentage = () => {
      if (window.innerWidth <= 600) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    updateSlidePercentage();
    window.addEventListener('resize', updateSlidePercentage);

    return () => window.removeEventListener('resize', updateSlidePercentage);
  }, []);

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="h2 text-3xl font-bold mr-4">
          <span className="highlight-green">Testimonials</span>
        </h2>
        <p className="p text-gray-600">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showStatus={false}
          showIndicators={false}
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          onChange={handleChange}
        >
          {testimonialsData.map((item, index) => (
            <div key={index} className="carousel-item">
              <blockquote className="testimonial-text">{item.testimonial}</blockquote>
              <footer className="testimonial-footer">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-position">{item.position}</span>
              </footer>
            </div>
          ))}
        </Carousel>
        <div className="carousel-icons">
          {testimonialsData.map((_, index) => (
            <img
              key={index}
              src={currentIndex === index ? enable : disable}
              alt={currentIndex === index ? 'enable' : 'disable'}
              className="carousel-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
