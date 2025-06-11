// src/components/SuccessStories.js

import React from 'react';
import './SuccessStories.css';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';
import founder3 from '../assets/founder3.jpg';

const stories = [
  {
    image: founder1,
    name: 'Aarav S.',
    story:
      'Launched an AI startup with MEF funding and mentorship. Raised Series A within 10 months.',
  },
  {
    image: founder2,
    name: 'Meera K.',
    story:
      'Built a sustainable fashion brand after MEF workshops and networking events.',
  },
  {
    image: founder3,
    name: 'Rahul T.',
    story:
      'Expanded edtech startup across South India through MEF\'s ecosystem and guidance.',
  },
];

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="story-cards">
        {stories.map((s, index) => (
          <div key={index} className="story-card">
            <img src={s.image} alt={s.name} className="story-image" />
            <h3>{s.name}</h3>
            <p>{s.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
