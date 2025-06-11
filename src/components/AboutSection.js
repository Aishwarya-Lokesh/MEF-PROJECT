import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Mysuru Entrepreneurship Forum (MEF)</h2>
        <p>
          MEF is a dynamic initiative fostering innovation and startup growth across Mysuru and beyond.
          We provide support, mentorship, and exposure to aspiring entrepreneurs, helping them thrive in today’s competitive environment.
        </p>
        <div className="about-stats">
          <div className="stat-box">
            <h3>120+</h3>
            <p>Trending Startups</p>
          </div>
          <div className="stat-box">
            <h3>50+</h3>
            <p>Active Mentors</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Events Annually</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;