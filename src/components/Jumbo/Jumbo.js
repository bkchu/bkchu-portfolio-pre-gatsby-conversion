import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Jumbo = () => {
  return (
    <div className="Jumbo">
      <div className="container">
        <h1 className="Jumbo__name">Brandon Chung</h1>
        <div className="Jumbo__contact">
          <a className="link Jumbo__info" href="tel:4693890119">
            <h5>(469) 389-0119</h5>
          </a>
          <div className="divider" />
          <a
            className="link Jumbo__info"
            href="mailto:brandon.k.chung@gmail.com"
          >
            <h5>brandon.k.chung@gmail.com</h5>
          </a>
        </div>
        <div className="Jumbo__networks">
          <a
            href="https://github.com/bkchu"
            rel="noopener noreferrer"
            target="_blank"
            className="network link"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/bkchuu"
            rel="noopener noreferrer"
            target="_blank"
            className="network link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
