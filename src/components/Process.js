import React, { useState } from 'react';
import './Process.css';
import plus from '../assets/plus.png';
import rest from '../assets/rest.png';

const processes = [
  { title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
  { title: "Research and Strategy Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vehicula, tincidunt ligula ac, dictum arcu." },
  { title: "Implementation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vehicula, tincidunt ligula ac, dictum arcu." },
  { title: "Monitoring and Optimization", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vehicula, tincidunt ligula ac, dictum arcu." },
  { title: "Reporting and Communication", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vehicula, tincidunt ligula ac, dictum arcu." },
  { title: "Continual Improvement", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel arcu vehicula, tincidunt ligula ac, dictum arcu." }
];

const ProcessCard = ({ title, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`process-card ${isExpanded ? 'expanded' : ''}`} 
      onClick={toggleExpand}
    >
      <div className="process-header">
        <span className="process-title"><strong>{index < 10 ? `0${index}` : index} {title}</strong></span>
        <img src={isExpanded ? rest : plus} alt="toggle icon" />
      </div>
      {isExpanded && <hr className="divider" />}
      {isExpanded && <p>{description}</p>}
    </div>
  );
};

const Process = () => {
  return (
    <div className="Process">
      <div className="flex items-center mb-4">
        <h2 className="h2 text-3xl font-bold mr-4">
          <span className="highlight-green">Our Working Process</span>
        </h2>
        <p className="p text-gray-600">
          Step-by-Step Guide to Achieving Your Business Goals.
        </p>
      </div>
      {processes.map((process, index) => (
        <ProcessCard 
          key={index} 
          title={process.title} 
          description={process.description} 
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default Process;



