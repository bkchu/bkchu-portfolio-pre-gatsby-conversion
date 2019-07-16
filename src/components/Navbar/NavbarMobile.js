import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactModal } from '../../redux/ducks/reducer';
import classnames from 'classnames';

class NavbarMobile extends Component {
  state = {
    open: false
  };

  route = path => {
    this.setState({ open: false }, () => this.props.history.push(path));
  };

  menu = open => {
    const classes = classnames('NavbarMobile__nav', {
      'NavbarMobile__nav--open': open
    });
    return (
      <div className={classes}>
        <div className="NavbarMobile__links">
          <p
            onClick={() => this.route('/')}
            className="NavbarMobile__link link"
          >
            Home
          </p>
          <p
            onClick={() => this.route('/projects')}
            className="NavbarMobile__link link"
          >
            Projects
          </p>
          <p
            onClick={() => this.route('/skills')}
            className="NavbarMobile__link link"
          >
            Skills
          </p>
          <p
            onClick={() => this.route('/experience')}
            className="NavbarMobile__link link"
          >
            Experience
          </p>
          <p
            onClick={() => this.props.contactModal()}
            className="NavbarMobile__link link"
          >
            Contact
          </p>
        </div>
      </div>
    );
  };

  render() {
    const burgerClasses = classnames('burger', {
      'is-active': this.state.open,
      'burger--scrolled': this.props.isScrolled
    });
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
          className={burgerClasses}
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

const mapStateToProps = state => {
  return {
    isScrolled: state.isScrolled.isScrolled
  };
};

export default connect(
  mapStateToProps,
  { contactModal }
)(withRouter(NavbarMobile));
