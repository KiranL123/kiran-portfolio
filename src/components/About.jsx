import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate developer with a love for creating elegant and efficient solutions. 
              With expertise in modern web technologies, I specialize in building responsive, 
              user-friendly applications that make a difference.
            </p>
            <p>
              My journey in web development started several years ago, and since then, I've worked 
              on numerous projects ranging from small business websites to complex web applications. 
              I'm constantly learning and staying up-to-date with the latest technologies and best practices.
            </p>
            <div className="about-info">
              <div className="info-item">
                <h3>Experience</h3>
                <p>3+ Years</p>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
              <div className="info-item">
                <h3>Education</h3>
                <p>Bachelor's Degree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

