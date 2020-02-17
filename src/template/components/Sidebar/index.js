import React from 'react';

import { Side } from './styles';

import Menu from '../../../components/Menu';

export default function Sidebar() {
  return (
    <>
      <Side>
        <Menu />
      </Side>
    </>
  );
}
