import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// páginas
import Company from './pages/Company';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/orgao" component={Company} />
      </Switch>
    </BrowserRouter>
  );
}
