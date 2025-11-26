import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'AWS', level: 65 },
        { name: 'Agile/Scrum', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

