import React, { Component } from 'react';
import Logo from '../../assets/BKC_Logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container">
          <nav className="Navbar__nav">
            <img className="Navbar__logo" src={Logo} alt="brand" />
            <div className="Navbar__link-list">
              <a className="Navbar__link link" href="">
                Home
              </a>
              <a className="Navbar__link link" href="">
                Portfolio
              </a>
              <a className="Navbar__link link" href="">
                Skills
              </a>
              <a className="Navbar__link link" href="">
                Experience
              </a>
            </div>
          </nav>
          <h1 className="Navbar__name">Brandon Chung</h1>
          <div className="Navbar__contact">
            <a className="link Navbar__info" href="tel:4693890119">
              <h5>(469) 389-0119</h5>
            </a>
            <div className="divider" />
            <a
              className="link Navbar__info"
              href="mailto:brandon.k.chung@gmail.com"
            >
              <h5>brandon.k.chung@gmail.com</h5>
            </a>
          </div>
          {/* <a
            href="mailto:brandon.k.chung@gmail.com"
            className="Navbar__cta link"
          >
            HIRE ME
          </a> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
