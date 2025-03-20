
import React from 'react';
import './assets/Resume.css';

function Resume() {
  const proficiencies = [
    {
      category: 'Front-End',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'jQuery', 'Bootstrap']
    },
    {
      category: 'Back-End',
      skills: ['Node.js', 'Express',  'MySQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'npm',, 'Jest']
    }
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>
        <a 
          href="/jane-developer-resume.pdf" 
          download 
          className="resume-download"
        >
          Download Resume
        </a>
      </p>
      
      <div className="proficiencies">
        <h3>Technical Proficiencies</h3>
        
        {proficiencies.map((section, index) => (
          <div key={index} className="skill-section">
            <h4>{section.category}</h4>
            <ul>
              {section.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
