import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import UseStateHook from './pages/hooks/UseStateHook';
import UseEffectHook from './pages/hooks/UseEffectHook';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/useStateHook" component={UseStateHook} />
        <Route path="/useEffectHook" component={UseEffectHook} />
      </Switch>
    </BrowserRouter>
  );
}
