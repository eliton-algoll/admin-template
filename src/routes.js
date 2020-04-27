import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// páginas
import Company from './pages/Company';
import TipoOrgao from './pages/TipoOrgao';
import Main from './pages/Main';
import Protocolo from './pages/Protocolo';
import error404 from './pages/Error/404';
import Login from './pages/Auth/Login';
import Identificacao from './pages/Identificacao';
import DadosBiometricos from './pages/DadosBiometricos';
import Usuario from './pages/Usuario';
import Perfil from './pages/Perfil';
import Cartorio from './pages/Cartorio';
import Tabela from './pages/Tabela';
import Coluna from './pages/Coluna';

function Routes({ signed }) {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />

        {!signed && <Redirect to="/login" />}

        <Route path="/" exact component={Main} />
        <Route path="/orgao" component={Company} />
        <Route path="/tipo-orgao" component={TipoOrgao} />
        <Route path="/protocolo" component={Protocolo} />
        <Route path="/usuario" component={Usuario} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/identificacao/:protocolo" component={Identificacao} />
        <Route
          path="/dadosbiometricos/:protocolo"
          component={DadosBiometricos}
        />
        <Route path="/cartorio" component={Cartorio} />

        <Route path="/tabelas" component={Tabela} />
        <Route path="/colunas" component={Coluna} />
        <Route path="/acoes" component={Perfil} />
        <Route path="/permissoes" component={Perfil} />

        <Route path="/*" component={error404} />
      </Switch>
    </>
  );
}

Routes.propTypes = {
  signed: PropTypes.bool,
};

Routes.defaultProps = {
  signed: false,
};

export default connect(state => ({ signed: state.auth.signed }))(Routes);
