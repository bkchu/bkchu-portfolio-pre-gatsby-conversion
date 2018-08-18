import React, { Fragment } from 'react';
import Header from './Header/Header';

const Page = ({ title, children }) => {
  return (
    <Fragment>
      <Header title={title} />
      <div className="Page">
        <div className="container">{children}</div>
      </div>
    </Fragment>
  );
};

export default Page;
