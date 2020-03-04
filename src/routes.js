import React from 'react';
import { Switch, Route } from 'react-router-dom';

// páginas
import Company from './pages/Company';
import Main from './pages/Main';
import Protocolo from './pages/Protocolo';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/orgao" component={Company} />
      <Route path="/protocolo" component={Protocolo} />
    </Switch>
  );
}
