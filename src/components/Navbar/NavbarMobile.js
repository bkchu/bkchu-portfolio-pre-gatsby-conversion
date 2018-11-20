import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { contactModal } from '../../redux/ducks/reducer';

class NavbarMobile extends Component {
    state = {
        open: false
    };

    route = path => {
        this.setState({ open: false }, () => this.props.history.push(path));
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
        return (
            <div className="NavbarMobile">
                {this.state.open && (
                    <div
                        onClick={() => this.setState({ open: false })}
                        className="NavbarMobile__modal"
                    />
                )}
                <div
                    onClick={() =>
                        this.setState(({ open }) => ({ open: !open }))
                    }
                    className={this.state.open ? 'is-active' : ''}
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

export default connect(
    null,
    { contactModal }
)(withRouter(NavbarMobile));
