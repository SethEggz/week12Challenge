import React from 'react';
import Project from './project';
import './assets/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    },
    {
      id: 2,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    },
    {
      id: 3,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    },
    {
      id: 4,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    },
    {
      id: 5,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    },
    {
      id: 6,
      title: '',
      image: '',
      deployedLink: '',
      githubLink: ''
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;