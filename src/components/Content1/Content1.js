import React, { Component } from 'react';
import svg1 from '../../assets/svg1.svg';

class Content1 extends Component {
  render() {
    return (
      <div className="Content1">
        <div className="container">
          <div className="body">
            <div className="Content1__content">
              <h1 className="header">Function with form.</h1>
              <p className="subheader">
                As a developer and a designer, achieving function with form is
                the motto I live and code by. I'm passionate about weaving crisp
                aesthetics into clean, modular code, resulting in a product
                that's easily maintable and beautifully engaging. Having learned
                a full web development stack within three months, I have grown
                to enjoy learning and building new things everyday.
              </p>
            </div>
            <img src={svg1} className="svg" alt="productive image" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content1;
