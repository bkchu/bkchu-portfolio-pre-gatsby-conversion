import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Content1 from '../Content1/Content1';

class Porfolio extends Component {
  state = {};

  render() {
    return (
      <div className="Portfolio">
        <Navbar />
        <Content1 />
      </div>
    );
  }
}

export default Porfolio;
