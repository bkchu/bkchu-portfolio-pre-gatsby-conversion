import React, { Component, Fragment } from 'react';
import Header from './Header/Header';

class Page extends Component {
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
    const { title, children } = this.props;
    return (
      <Fragment>
        <Header title={title} />
        <div className="Page">
          <div className="container">{children}</div>
        </div>
      </Fragment>
    );
  }
}

export default Page;
