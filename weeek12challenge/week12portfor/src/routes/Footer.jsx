import React from 'react';
import './assets/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/SethEggz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/seth-eggenburg-207bab68" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://bsky.app/profile/nukedeggz.bsky.social" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> BlueSky
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Seth Eggenburg</p>
    </footer>
  );
}

export default Footer;

  