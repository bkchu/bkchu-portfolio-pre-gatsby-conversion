import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Jumbo from '../Jumbo/Jumbo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Jumbo} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
    </Switch>
  );
};

export default Routes;
