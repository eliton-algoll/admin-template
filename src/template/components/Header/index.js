import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logodsm.png';

import { HeaderStyled } from './styles';

function Header({ user }) {
  return (
    <>
      <HeaderStyled>
        <div className="logo">
          <img src={logo} alt="logo" />
          <strong>Sipex </strong>
          <small> Sistema de Identificação do Pessoal do Exército</small>
        </div>
        <div className="user-avatar">
          <span>{`${user ? user.postoGrad : null} ${
            user ? user.nomeGuerra : null
          }`}</span>
          <img
            src={`data:image/png;base64,${user ? user.foto : null}`}
            alt="avatar"
          />
          <MdArrowDropDown />
        </div>
      </HeaderStyled>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default connect(state => ({ user: state.auth.user }))(Header);
