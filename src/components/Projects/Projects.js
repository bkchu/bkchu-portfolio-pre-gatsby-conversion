import React from 'react';
import Page from '../Page/Page';
import Techs from './Techs/Techs';

import projects from './project_util';

const Projects = () => {
  const projectDisplay = projects.map(
    ({ title, description, year, technologies, url }) => (
      <div key={title} className="Project">
        <h1 className="Project__title">{title}</h1>
        <p className="Project__year">{year}</p>
        <a className="Project__link link" target="_blank" href={url}>
          {url}
        </a>
        <p className="Project__description">{description}</p>
        <Techs techs={technologies} />
      </div>
    )
  );
  return (
    <Page title="Projects">
      <div className="Projects">{projectDisplay}</div>
    </Page>
  );
};

export default Projects;
