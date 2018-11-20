import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactModal } from '../../redux/ducks/reducer';

import Logo from '../../assets/BKC_Logo.svg';

class Navbar extends Component {
    state = {
        height: 0
    };
    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        this.setState({ height: window.scrollY });
    };

    render() {
        let navbarClasses = ['Navbar__nav'];
        if (this.props.location.pathname === '/' && this.state.height >= 300) {
            navbarClasses.push('Navbar__nav--scrolled');
        } else if (
            this.props.location.pathname !== '/' &&
            this.state.height >= 75
        ) {
            navbarClasses.push('Navbar__nav--scrolled');
        }
        return (
            <div className="Navbar">
                <nav className={navbarClasses.join(' ')}>
                    <Link to="/" className="Navbar__link link">
                        <img className="Navbar__logo" src={Logo} alt="brand" />
                    </Link>
                    <div className="Navbar__link-list">
                        <Link to="/" className="Navbar__link link">
                            Home
                        </Link>
                        <Link to="/projects" className="Navbar__link link">
                            Projects
                        </Link>
                        <Link to="/skills" className="Navbar__link link">
                            Skills
                        </Link>
                        <Link to="/experience" className="Navbar__link link">
                            Experience
                        </Link>
                        <a
                            onClick={() => this.props.contactModal()}
                            className="Navbar__link link"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default connect(
    null,
    { contactModal }
)(withRouter(Navbar));
