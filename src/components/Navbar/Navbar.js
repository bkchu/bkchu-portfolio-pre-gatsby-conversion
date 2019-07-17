import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/BKC_Logo.svg';
import { contactModal, setScrolled } from '../../redux/ducks/reducer';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import NavItem from './NavItem/NavItem';

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
    const navbarClasses = classnames('Navbar__nav', {
      'Navbar__nav--scrolled': this.props.isScrolled
    });

    const variants = {
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.1 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
    };

    const nav = [
      {
        to: '/',
        name: 'Home',
        onClick: null
      },
      {
        to: '/projects',
        name: 'Projects',
        onClick: null
      },
      {
        to: '/skills',
        name: 'Skills',
        onClick: null
      },
      {
        to: '/experience',
        name: 'Experience',
        onClick: null
      },
      {
        to: '#',
        name: 'Contact',
        onClick: () => this.props.contactModal()
      }
    ];

    return (
      <div className="Navbar">
        <nav className={navbarClasses}>
          <Link to="/" className="Navbar__logo-link link">
            <img className="Navbar__logo" src={Logo} alt="brand" />
          </Link>
          <motion.div
            initial="closed"
            animate="open"
            variants={variants}
            className="Navbar__link-list"
          >
            {nav.map(({ to, name, ...props }, i) => (
              <NavItem
                key={i}
                to={to}
                className="Navbar__list-link link"
                {...props}
              >
                {name}
              </NavItem>
            ))}
          </motion.div>
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
