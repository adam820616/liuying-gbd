import React from 'react';
import { Route, Switch } from 'react-router';
import { Main } from 'app/containers/layouts/Main';
import { Home as HomePage } from 'app/containers/views/Home';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Main>
      <Route path="/" component={HomePage} />
    </Main>
  </Switch>
));
