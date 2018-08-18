import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavBarMobile from '../Navbar/NavbarMobile';
import Content1 from '../Content1/Content1';

class Porfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <Navbar />
        <NavBarMobile />
        <Content1 />
      </div>
    );
  }
}

export default Porfolio;
