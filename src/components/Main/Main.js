import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavBarMobile from '../Navbar/NavbarMobile';
import ModalConductor from '../Modal/ModalConductor';
import Routes from '../Routes/Routes';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar />
        <NavBarMobile />
        <Routes />
        <ModalConductor />
      </div>
    );
  }
}

export default Main;
