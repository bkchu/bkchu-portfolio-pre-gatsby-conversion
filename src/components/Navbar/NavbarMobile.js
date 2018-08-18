import React, { Component } from 'react';

class NavbarMobile extends Component {
  state = {
    open: false
  };
  menu = open => {
    return (
      <div
        className={[
          'NavbarMobile__nav',
          open ? 'NavbarMobile__nav--open' : null
        ].join(' ')}
      >
        Navbar Menu
      </div>
    );
  };

  render() {
    return (
      <div className="NavbarMobile">
        <div
          onClick={() => this.setState(({ open }) => ({ open: !open }))}
          className={this.state.open && 'is-active'}
          id="burger"
        >
          <span />
          <span />
          <span />
        </div>
        {this.menu(this.state.open)}
      </div>
    );
  }
}

export default NavbarMobile;
