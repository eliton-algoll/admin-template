import React from 'react';
import { Switch, Route } from 'react-router-dom';

// páginas
import Company from './pages/Company';
import Main from './pages/Main';
import Protocolo from './pages/Protocolo';
import error404 from './pages/Error/404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/orgao" component={Company} />
      <Route path="/protocolo" component={Protocolo} />
      <Route path="/*" component={error404} />
    </Switch>
  );
}
