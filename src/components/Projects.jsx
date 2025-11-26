import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging, posts, and user profiles.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'Collaborative project management tool with drag-and-drop functionality and team features.',
      technologies: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts, maps, and location-based data.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'Content management system for creative professionals to showcase their work.',
      technologies: ['React', 'Next.js', 'Sanity.io', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking application with workout plans and progress analytics.',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

