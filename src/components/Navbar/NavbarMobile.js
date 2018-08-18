import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/" className="NavbarMobile__link link">
            Home
          </Link>
          <Link to="/projects" className="NavbarMobile__link link">
            Projects
          </Link>
          <Link to="/" className="NavbarMobile__link link">
            Skills
          </Link>
          <Link to="/" className="NavbarMobile__link link">
            Experience
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="NavbarMobile">
        {this.state.open && (
          <div
            onClick={() => this.setState({ open: false })}
            className="NavbarMobile__modal"
          />
        )}
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
