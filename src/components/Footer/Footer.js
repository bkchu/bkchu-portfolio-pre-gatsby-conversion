import React from 'react';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__contact">
        <a className="link Footer__info" href="tel:4693890119">
          <p>(469) 389-0119</p>
        </a>
        <a
          className="link Footer__info"
          href="mailto:brandon.k.chung@gmail.com"
        >
          <p>brandon.k.chung@gmail.com</p>
        </a>
      </div>
      <div className="Footer__networks">
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
  );
};

export default Footer;
