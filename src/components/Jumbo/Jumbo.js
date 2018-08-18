import React from 'react';

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
        {/* <a
            href="mailto:brandon.k.chung@gmail.com"
            className="Navbar__cta link"
          >
            HIRE ME
          </a> */}
      </div>
    </div>
  );
};

export default Jumbo;
