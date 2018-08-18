import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/BKC_Logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="Navbar__nav">
          <Link to="/" className="Navbar__link link">
            <img className="Navbar__logo" src={Logo} alt="brand" />
          </Link>
          <div className="Navbar__link-list">
            <Link to="/" className="Navbar__link link">
              Home
            </Link>
            <Link to="/projects" className="Navbar__link link">
              Projects
            </Link>
            <Link to="/" className="Navbar__link link">
              Skills
            </Link>
            <Link to="/" className="Navbar__link link">
              Experience
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
