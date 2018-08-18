import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content1 from '../Content1/Content1';
import Projects from '../Projects/Projects';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Content1} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

export default Routes;
