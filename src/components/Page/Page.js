import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';

class Page extends Component {
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <div className="Page">
          <div className="container">{children}</div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Page;
