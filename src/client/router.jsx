import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './app';
import FourOhFour from './404';

const ClientApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);

export default ClientApp;
