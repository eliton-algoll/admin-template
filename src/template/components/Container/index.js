import React from 'react';

import { ContainerSyled } from './styles';
// import Content from '../Content';
import Sidebar from '../Sidebar';
import Content from '../Content';

export default function Container() {
  return (
    <>
      <ContainerSyled>
        <Sidebar />
        <Content />
      </ContainerSyled>
    </>
  );
}
