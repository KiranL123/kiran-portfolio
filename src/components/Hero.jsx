import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Kiran Lingadalli</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
        <p className="hero-description">
          I create beautiful, responsive web applications with modern technologies.
          Passionate about crafting elegant solutions to complex problems.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-circle"></div>
      </div>
    </section>
  );
};

export default Hero;

