import React from 'react';
import './assets/Project.css';

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-overlay">
        <h3>{project.title}</h3>
        <div className="project-links">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}
export default Project