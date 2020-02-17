import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import imageLobo from '../../../assets/images/lobo.jpg';
import logoNindas from '../../../assets/images/logo-nindas.svg';

import { HeaderStyled } from './styles';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <div className="logo">
          <img src={logoNindas} alt="logo" />
          <strong>Gestão de Riscos</strong>
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
