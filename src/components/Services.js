import React from 'react';
import './Services.css';
import services01 from '../assets/services01.png';
import services02 from '../assets/services02.png';
import services03 from '../assets/services03.png';
import services04 from '../assets/services04.png';
import services05 from '../assets/services05.png';
import services06 from '../assets/services06.png';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';

const Card = ({ title, illustration, iconUrl, learnMoreUrl, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-content">
        <h2 className="card-title"><span className='highlight-green'>{title}</span></h2>
        <a href={learnMoreUrl} className="card-link">
          <img src={iconUrl} alt="Icon" className="card-icon" />
          Learn more
        </a>
      </div>
      <div className="card-illustration-container">
        <img src={illustration} alt={title} className="card-illustration" />
      </div>
    </div>
  );
};

function Services() {
  const cardData = [
    {
      title: 'Search Engine Optimization',
      illustration: services01,
      iconUrl: arrow1,
      learnMoreUrl: '/learn-more-seo',
      bgColor: '#F3F3F3'
    },
    {
      title: 'Pay-Per-Click Advertising',
      illustration: services02,
      iconUrl: arrow1,
      learnMoreUrl: '/learn-more-ppc',
      bgColor: '#B9FF66'
    },
    {
      title: 'Social Media Marketing',
      illustration: services03,
      iconUrl: arrow2,
      learnMoreUrl: '/learn-more-smm',
      bgColor: '#000000'
    },
    {
      title: 'Email Marketing',
      illustration: services04,
      iconUrl: arrow1,
      learnMoreUrl: '/learn-more-email',
      bgColor: '#F3F3F3'
    },
    {
      title: 'Content Creation',
      illustration: services05,
      iconUrl: arrow1,
      learnMoreUrl: '/learn-more-content',
      bgColor: '#B9FF66'
    },
    {
      title: 'Analytics and Tracking',
      illustration: services06,
      iconUrl: arrow2,
      learnMoreUrl: '/learn-more-analytics',
      bgColor: '#000000'
    }
  ];

  return (
  <>
      <div className="flex items-center mb-4">
        <h2 className="h2 text-3xl font-bold ">
          <span className="highlight-green">Services</span>
        </h2>
        <p className="p text-gray-600">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p> 
      </div>
      
    <div className="card-container">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>


      </>
  );
}

export default Services;
