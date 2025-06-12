// AboutUs.jsx
import React, { useState } from 'react';
import './AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';
import c1 from '../assets/council/c1.jpg';
import c2 from '../assets/council/c2.jpg';
import c3 from '../assets/council/c3.jpg';
import c4 from '../assets/council/c4.jpg';
import c5 from '../assets/council/c5.jpg';
import c6 from '../assets/council/c6.jpg';
import c7 from '../assets/council/c7.jpg';
import c8 from '../assets/council/c8.jpg';
import c9 from '../assets/council/c9.jpg';
import c10 from '../assets/council/c10.jpg';
import c11 from '../assets/council/c11.jpg';
import c12 from '../assets/council/c12.jpg';
import c13 from '../assets/council/c13.jpg';

const councilMembers = [
  {
    name: 'Dr. Ramsastry Ambarish',
    role: 'Council Member / Special Invitee',
    image:c1,
    linkedin: 'https://www.linkedin.com/in/ramasastry-ambarish-38179363/',
    bio: 'Dr. Ambarish is an accomplished leader in technology-enabled ventures. With over 25 years of experience, he has mentored numerous startups in scaling innovation. He is known for his strategic insights in building resilient business models across India and abroad.',
  },
  {
    name: 'Mr. Sam Cherian',
    role: 'Council Member - Industry',
    image:c2,
    linkedin: 'https://www.linkedin.com/in/sam-cherian-17b21518/',
    bio:  'Mr. Cherian is a seasoned industrialist and entrepreneur. He plays a pivotal role in empowering the MSME sector in Karnataka and is an advocate for sustainable industrial growth. His contributions are widely acknowledged across the industry forums.',
  },
  
  {
    name: 'Dr. Shrilaksmi Desiraju',
    role: 'Council Member - Women Entrepreneurs',
    image:c3,
    linkedin: 'https://www.linkedin.com/in/shri-desiraju-probiotic-expert/?originalSubdomain=in',
    bio: 'Dr. Desiraju is a pioneer in probiotics and biotechnology ventures. A strong advocate for women-led startups, she brings decades of experience in healthcare innovation and has helped foster numerous inclusive business initiatives.',
  },
  {
    name: 'Mr. Sudhanva Dhananjaya',
    role: 'Council Member - Strategy',
    image:c4,
    linkedin: 'https://www.linkedin.com/in/sudhanva-dhananjaya-087356/',
    bio: "A recognized name in startup strategy, Mr. Sudhanva specializes in lean operations and scaling startups from seed to success. His work spans across India's major startup hubs with a focus on Karnataka-based entrepreneurs.",
  },
  {
    name: 'Prof. Sanjay Dwivedi',
    role: 'Council Member-Secretary',
    image:c5,
    linkedin: 'https://www.linkedin.com/in/sanjaydwivedi/',
    bio:'Prof. Dwivedi is a well-respected academic leader and innovation enabler. He has led educational reforms supporting startup incubation in universities and serves as a bridge between academia and entrepreneurship.',
  },
  {
    name: 'Mr. Bhaskar Kalale',
    role: 'Council Member - TiE-MYS & Mysore Angel Network',
    image:c6,
    linkedin: 'https://www.linkedin.com/in/bhaskarkalale/',
    bio: 'Mr. Kalale is a strategic angel investor and active member of TiE Mysuru. He provides funding, mentorship, and networking support to early-stage startups and is a key figure in the Mysuru startup investment landscape.',
  },
  {
    name: 'Ram Kevalur',
    role: 'Council Member - Website & Database',
    image:c7,
    linkedin: 'https://www.linkedin.com/in/ramkevalur/',
    bio: "Ram is a data and systems specialist. His digital infrastructure support for MEF ensures the platform's seamless performance, making data tools available to stakeholders across the ecosystem.",
  },
  {
    name: 'Harsha Kikkeri',
    role: 'Council Member - Hi-Tech-Under 40',
    image:c8,
    linkedin: 'https://www.linkedin.com/in/kikkeri-harish-6715b2130/',
    bio: 'Harsha is a rising leader in emerging technologies and has founded multiple tech ventures. As part of MEF, he advocates for next-gen entrepreneurs and provides technical mentorship to young innovators.',
  },
  {
    name: 'Dr. Rohini Nagapadma',
    role: 'Council Member - Education & Impact',
    image:c9,
    linkedin: 'https://www.linkedin.com/in/dr-rohini-nagapadma-162b301a5/',
    bio: 'Dr. Rohini is an academic visionary and social enterprise supporter. She leads several initiatives linking education with entrepreneurship, especially in rural and underrepresented communities.',
  },
  {
    name: 'Dr. Mahesh Rao',
    role: 'Council Member - Startup Ecosystem',
    image:c10,
    linkedin: 'https://www.linkedin.com/in/mahesh-rao-46a6a/',
    bio: 'Dr. Rao has been instrumental in developing startup accelerators and incubators. He is a key ecosystem builder with a strong focus on nurturing tech-based startups across Karnataka.',
  },
  {
    name: 'Mr. Pavan Ranga',
    role: 'Council Member - Strategy',
    image:c11,
    linkedin: 'https://www.linkedin.com/in/pavan-ranga-24803411/',
    bio: 'Pavan is a renowned industrial strategist who brings business model innovation to the table. His strategic planning expertise has elevated several startups to nationally recognized ventures.',
  },
  {
    name: 'Mr. Shivshankar',
    role: 'Council Member - Incubators & Colleges',
    image:c12,
    linkedin: 'https://www.linkedin.com/in/shiva-shankar-93b343b/',
    bio: 'Mr. Shivshankar works closely with universities and colleges to enhance their incubation capacity. He is a connector who links educational talent with entrepreneurial opportunities.',
  },
  {
    name: 'Mr. Kantharaj Urs',
    role: 'Council Member / Special Invitee',
    image:c13,
    linkedin: 'https://www.linkedin.com/in/kantharaj-urs-72b0372/',
    bio: 'Mr. Urs brings extensive experience in policy, governance, and public-private partnerships. He has advised numerous organizations and startups on navigating institutional frameworks.',
  },
];

const AboutUs = () => {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <div className="about-us">
      <section className="about-hero">
        <h1>About Mysuru Entrepreneurship Forum (MEF)</h1>
        <p>
          MEF is an initiative to reignite the entrepreneurial spirit of Mysuru & Kodagu by
          bringing together visionaries, mentors, and changemakers to create a thriving ecosystem.
        </p>
      </section>

      <section className="vision-mission">
        <div className="vm-card">
          <h2>Our Vision</h2>
          <p>
            To facilitate the development of an integrated and sustainable ecosystem of entrepreneurship
            for generating employment and creating social value in Mysuru & Kodagu Regions, State of Karnataka, and beyond.
          </p>
        </div>
        <div className="vm-card">
          <h2>Our Mission</h2>
          <p>
            Foster collaboration, guide with mutual support, and be an umbrella organization for the startup ecosystem;
            make Mysuru & Kodagu Regions attractive, thriving hubs for entrepreneurs and accelerate regional economic growth.
          </p>
        </div>
      </section>

      <section className="council">
        <h2>Our Council</h2>
        <div className="council-grid">
          {councilMembers.map((member, index) => (
            <div key={index} className="council-card" onClick={() => setActiveMember(member)}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          ))}
        </div>

        {activeMember && (
          <div className="modal" onClick={() => setActiveMember(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveMember(null)}>×</button>
              <h3>{activeMember.name}</h3>
              <p><strong>{activeMember.role}</strong></p>
              <p>{activeMember.bio}</p>
              <a href={activeMember.linkedin} target="_blank" rel="noreferrer" className="linkedin-link">
                View LinkedIn Profile
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
