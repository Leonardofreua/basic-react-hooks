import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UseStateHook from './pages/hooks/UseStateHook';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/useStateHook" component={UseStateHook} />
      </Switch>
    </BrowserRouter>
  );
}
