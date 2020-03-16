/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { connect, useDispatch } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';

import { logout } from '~/store/modules/auth/actions';

import logo from '../../../assets/images/logodsm.png';

import { HeaderStyled } from './styles';

function Header({ user }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <>
      <HeaderStyled>
        <div className="logo">
          <img src={logo} alt="logo" />
          <strong>Sipex </strong>
          <small> Sistema de Identificação do Pessoal do Exército</small>
        </div>

        <div className="user-avatar" onClick={handleClick}>
          <span>{`${user ? user.postoGrad : null} ${
            user ? user.nomeGuerra : null
          }`}</span>
          <img
            src={`data:image/png;base64,${user ? user.foto : null}`}
            alt="avatar"
          />
          <MdArrowDropDown style={{ fontSize: '20', color: '#fff' }} />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          TransitionComponent={Fade}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
      </HeaderStyled>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default connect(state => ({ user: state.auth.user }))(Header);
