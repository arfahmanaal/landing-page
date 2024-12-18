import React from 'react';
import './Casestudies.css';
import arrow3 from '../assets/arrow3.png'; // Import the icon

function Casestudies() {
  const cardData = [
    {
      description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      linkText: "Learn more",
      linkUrl: "#"
    },
    {
      description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      linkText: "Learn more",
      linkUrl: "#"
    },
    {
      description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      linkText: "Learn more",
      linkUrl: "#"
    }
  ];

  const CardSection = () => {
    return (
      <div className="card-section">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <p>{card.description}</p>
            <a href={card.linkUrl}>
              {card.linkText} <img src={arrow3} alt="Arrow Icon" className="arrow-icon" />
            </a>
            {index < cardData.length - 1 && <div className="separator"></div>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="h2 text-3xl font-bold mr-4">
          <span className="highlight-green">Case studies</span>
        </h2>
        <p className="p text-gray-600">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>
      <CardSection />
    </div>
  );
}

export default Casestudies;
