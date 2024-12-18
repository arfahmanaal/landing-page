import React from 'react';
import './Team.css';
import linkedin from '../assets/linkedin.png';
import team01 from '../assets/team01.png';
import team02 from '../assets/team02.png';
import team03 from '../assets/team03.png';
import team04 from '../assets/team04.png';
import team05 from '../assets/team05.png';
import team06 from '../assets/team06.png';

const teamMembers = [
  { name: "John Smith", title: "CEO and Founder", description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.", image: team01, linkedin: "#" },
  { name: "Jane Doe", title: "Director of Operations", description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.", image: team02, linkedin: "#" },
  { name: "Michael Brown", title: "Senior SEO Specialist", description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.", image: team03, linkedin: "#" },
  { name: "Emily Johnson", title: "PPC Manager", description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.", image: team04, linkedin: "#" },
  { name: "Brian Williams", title: "Social Media Specialist", description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.", image: team05, linkedin: "#" },
  { name: "Sarah Kim", title: "Content Creator", description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.", image: team06, linkedin: "#" }
];

function Team() {
  return (
    <div className="team-section">
      <div className="flex items-center mb-4">
        <h2 className="h2 text-3xl font-bold mr-4">
          <span className="highlight-green">Team</span>
        </h2>
        <p className="p text-gray-600">
          Meet the skilled and experienced team behind our successful digital marketing strategies.
        </p>
      </div>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="card-top">
              <img src={member.image} alt={member.name} className="team-image" />
              <div>
                <h3 className='team-name'>{member.name}</h3>
                <p className="team-title">{member.title}</p><hr/>
              </div>
              
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="linkedin-icon-top-right" />
              </a>
            </div>
            <div className="card-bottom">
              <p>{member.description}</p>
            </div>
          </div>
        ))}
        <div className="see-all-team">
        <button className="see-all-team-button">See all team</button>
      </div>
      </div>
    </div>
  );
}

export default Team;
