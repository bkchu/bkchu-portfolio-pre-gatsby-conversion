import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/BKC_Logo.svg';
import { contactModal, setScrolled } from '../../redux/ducks/reducer';
import classnames from 'classnames';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.props.setScrolled(false);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const height = window.scrollY;
    if (this.props.location.pathname === '/' && height >= 50) {
      this.props.setScrolled(true);
    } else if (this.props.location.pathname !== '/' && height >= 75) {
      this.props.setScrolled(true);
    } else {
      this.props.setScrolled(false);
    }
  };

  render() {
    let navbarClasses = classnames('Navbar__nav', {
      'Navbar__nav--scrolled': this.props.isScrolled
    });

    return (
      <div className="Navbar">
        <nav className={navbarClasses}>
          <Link to="/" className="Navbar__logo-link link">
            <img className="Navbar__logo" src={Logo} alt="brand" />
          </Link>
          <div className="Navbar__link-list">
            <Link to="/" className="Navbar__list-link link">
              Home
            </Link>
            <Link to="/projects" className="Navbar__list-link link">
              Projects
            </Link>
            <Link to="/skills" className="Navbar__list-link link">
              Skills
            </Link>
            <Link to="/experience" className="Navbar__list-link link">
              Experience
            </Link>
            <a
              onClick={() => this.props.contactModal()}
              className="Navbar__list-link link"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isScrolled: state.isScrolled.isScrolled
});

export default connect(
  mapStateToProps,
  { contactModal, setScrolled }
)(withRouter(Navbar));
