import React from 'react';

const Techs = ({ techs }) => {
  let techsDisplay = techs
    .split(',')
    .map(tech => <p className="Techs__tech">{tech}</p>);
  return <div className="Techs">{techsDisplay}</div>;
};

export default Techs;
