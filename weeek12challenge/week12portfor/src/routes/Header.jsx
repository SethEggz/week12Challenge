import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Seth Eggenburg</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;