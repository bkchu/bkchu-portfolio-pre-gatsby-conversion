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
        <div className="NavbarMobile__links">
          <a className="NavbarMobile__link link" href="">
            Home
          </a>
          <a className="NavbarMobile__link link" href="">
            Portfolio
          </a>
          <a className="NavbarMobile__link link" href="">
            Skills
          </a>
          <a className="NavbarMobile__link link" href="">
            Experience
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="NavbarMobile">
        <div
          onClick={() => this.setState(({ open }) => ({ open: !open }))}
          className={this.state.open && 'is-active'}
          // className={'is-active'}
          id="burger"
        >
          <span />
          <span />
          <span />
        </div>
        {this.menu(this.state.open)}
        {/* {this.menu(true)} */}
      </div>
    );
  }
}

export default NavbarMobile;
