import React from 'react';
import { Switch, Route } from 'react-router-dom';

// páginas
import Company from './pages/Company';
import Main from './pages/Main';
import Protocolo from './pages/Protocolo';
import error404 from './pages/Error/404';
import Login from './pages/Auth/Login';
import Identificacao from './pages/Identificacao';

export default function Routes() {
  // const { signed } = store.getState().auth.signed;

  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/orgao" component={Company} />
        <Route path="/protocolo" component={Protocolo} />
        <Route path="/identificacao/:protocolo" component={Identificacao} />
        <Route path="/*" component={error404} />
      </Switch>
    </>
  );
}
