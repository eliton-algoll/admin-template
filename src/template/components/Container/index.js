import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ContainerSyled } from './styles';
// import Content from '../Content';
import Sidebar from '../Sidebar';
import Content from '../Content';

export default function Container() {
  return (
    <>
      <CssBaseline />
      <ContainerSyled>
        <Sidebar />
        <Content />
      </ContainerSyled>
    </>
  );
}
