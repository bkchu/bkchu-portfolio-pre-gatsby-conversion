import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content1 from '../Content1/Content1';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Content1} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
    </Switch>
  );
};

export default Routes;
