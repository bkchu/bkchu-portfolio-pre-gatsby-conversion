import React, { Fragment } from 'react';
import Page from '../Page/Page';
import Techs from './Techs/Techs';

import projects from './project_util';

const Projects = () => {
  const projectDisplay = projects.map(
    ({ title, description, year, technologies }) => (
      <div className="Project">
        <h1 className="Project__title">{title}</h1>
        <p className="Project__year">{year}</p>
        <p className="Project__description">{description}</p>
        <Techs techs={technologies} />
      </div>
    )
  );
  return (
    <Fragment>
      <Page title="Projects">
        <div className="Projects">{projectDisplay}</div>
      </Page>
    </Fragment>
  );
};

export default Projects;
