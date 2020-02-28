import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import imageLobo from '../../../assets/images/lobo.jpg';
import logo from '../../../assets/images/logodsm.png';

import { HeaderStyled } from './styles';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <div className="logo">
          <img src={logo} alt="logo" />
          <strong>Sipex </strong>
          <small> Sistema de Identificação do Pessoal do Exército</small>
        </div>
        <div className="user-avatar">
          <span>Fulano de tal</span>
          <img src={imageLobo} alt="avatar" />
          <MdArrowDropDown />
        </div>
      </HeaderStyled>
    </>
  );
}
